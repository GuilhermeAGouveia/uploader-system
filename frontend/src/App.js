import React from 'react';
import GlobalStyle from "./styles/global"
import { Content, Container } from "./styles/styles"
import { uniqueId } from "lodash"
import filesize from "filesize"
import Upload from './componentes/Upload'
import FileList from './componentes/FilesList'
import api from "./services/api"
class App extends React.Component {

  state = {
      uploadedFiles: [],
    };

  componentDidMount(){
    api.get("listFiles").then(response => {
      this.setState({uploadedFiles: response.data.map(file => ({
        id: file._id,
        name: file.name,
        readableSize: filesize(file.size),
        uploaded: true,
        url: file.path,
        preview: file.path
      }))
    })
  })
  }

  

componentWillUnmount(){
  this.state.uploadedFiles.forEach(files => URL.revokeObjectURL(files.preview))
}
  handleUpload = files => {
    console.log(this.state.uploadedFiles)
    const uploadedFiles = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size), 
      preview: URL.createObjectURL(file),
      uploaded: false,
      error:false,
      errorString:'',
      progress:0,
      url: null,
    }));
    this.setState({uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)})
    uploadedFiles.forEach(this.processUpload);
  }
  handleDelete = async id => {
    await api.delete(`deleteFile/${id}`)
    this.setState({uploadedFiles: this.state.uploadedFiles.filter(files => files.id !== id)})

}
  updateFile = (id, data) => {
    this.setState({ uploadedFiles: this.state.uploadedFiles.map( uploadedFile => {
      return id === uploadedFile.id ? {...uploadedFile, ...data} : uploadedFile;
    })})
  }
  processUpload = uploadedFile => {
    const data = new FormData();
    data.append("file", uploadedFile.file, uploadedFile.name)
    api.post("uploadFile", data, {
      onUploadProgress: e => {
        const progress = parseInt(Math.round(e.loaded * 100 / e.total))
        this.updateFile(uploadedFile.id, {
          progress,
        })
      }
    }).then(response => {
      this.updateFile(uploadedFile.id, {
        uploaded: true,
        id: response.data._id,
        url: response.data.path
      })
    }).catch(error => {
     
      this.updateFile(uploadedFile.id, {
        error: true,
        errorString: `${error}`
      })
    })
  }
  render(){
    const {uploadedFiles} = this.state;
    return (
    
      <Container>
        <Content>
          <Upload onUpload={this.handleUpload}></Upload>
          {!!uploadedFiles.length && (<FileList onDelete={this.handleDelete} uploadedFiles={uploadedFiles}></FileList>)}
        </Content>
        <GlobalStyle></GlobalStyle>
      </Container>
    );
    }
  }

export default App;

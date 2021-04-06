import React from "react"
import {CircularProgressbar} from "react-circular-progressbar"
import { Container, FileInfo, Preview, ErrorMessage} from "./styles"
import { MdCheckCircle, MdError, MdLink} from "react-icons/md"

export default class FileList extends React.Component {
    constructor(props){
        super(props)
        this.props = props
        this.state = {
            mouseover: false
        }
    }
  
    render() {
        const {uploadedFiles, onDelete} = this.props
        return (
            <Container>
              {uploadedFiles.map(files => (
                     <li key={files.id}>
                     <FileInfo>
                         <Preview src={files.url}/>
                         <div>
                            <strong>{files.name}</strong>
                            <span>{files.readableSize}{files.uploaded && <button onClick={() => onDelete(files.id)}>Excluir</button>}</span>
                         </div>
                     </FileInfo>
                     <div>
                        {!files.uploaded && !files.error &&   
                        <CircularProgressbar
                             styles={{
                                 root:{width: 24},
                                 path:{stroke: '#7159c1'}
                             }}
                             strokeWidth={10}
                             value={files.progress}
                         />}
                         {files.uploaded && 
                         (<a
                             href={files.url}
                             target="_brank"
                             rel="noopener noreferrer">
 
                             <MdLink styles={{ marginRight: 8 }} size={24} color={"#222"}></MdLink>
                         </a>)}
                         {files.uploaded && <MdCheckCircle styles={{ marginRight: 8 }} size={24} color={"#78e5d5"}></MdCheckCircle>}
                         {files.error && (
                        <ErrorMessage>
                         <MdError 
                            styles={{ marginRight: 8 }} 
                            size={24} 
                            color={"#e57878"}>
                                
                         </MdError>
                         <span>{files.errorString}<div></div></span>
                         </ErrorMessage>)}
                         
                     </div>
                 </li>
              ))}
            </Container>
        )
    }
}
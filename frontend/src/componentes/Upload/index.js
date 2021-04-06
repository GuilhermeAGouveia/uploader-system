import React from "react"
import Dropzone from "react-dropzone"
import {UploadMessage, DropContainer} from "./styles"
export default class Upload extends React.Component {
    
    returnTextState(isDragActive, isDragReject){
        if(!isDragActive){
            return <UploadMessage>Arraste arquivos aqui...</UploadMessage>
        }
        if (isDragReject){
            return <UploadMessage type={"error"}>Arquivo não suportado</UploadMessage>
        }
        return <UploadMessage type={"success"}>Solte os arquivos aqui</UploadMessage>
    }
    render() {
        const { onUpload } = this.props
        return(
        <Dropzone accept="image/*" onDropAccepted={onUpload}>
            {({getInputProps, getRootProps, isDragActive, isDragReject}) => (
                <DropContainer
                    {...getRootProps()}
                    isDragActive={isDragActive}
                    isDragReject={isDragReject}>
                    
                    <input {...getInputProps()}/>
                    {this.returnTextState(isDragActive,isDragReject)}
                    </DropContainer>
            )} 
        </Dropzone>
        )
    }
}
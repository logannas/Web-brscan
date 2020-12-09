import React from 'react';
import Imagem from '../Imagem/index';
import '../index.css'

function Upload(){
    const [file, setFile] = React.useState("");

    function handleUpload(event) {
      setFile(event.target.files[0]);
  
      //Código para enviar para o servidor
    }
  
    return (
      <div class="upload-box">
        <input type="file" onChange={handleUpload} />
        <p>Filename: {file.name}</p>
        <p>File type: {file.type}</p>
        <p>File size: {file.size} bytes</p>
        {file && <Imagem image={file} />}
      </div>
    );
  }

export default Upload;
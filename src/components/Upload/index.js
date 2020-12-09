import React from 'react';
import Imagem from '../Image/index';
import '../main.css';


export default function Upload(){
    const [file, setFile] = React.useState("");

    function handleUpload(event) {
      setFile(event.target.files[0]);
  
      //Código para enviar para o servidor
    }
  
    return (
      <div class="upload-box">
        <input type="file" onChange={handleUpload} />
        <p>Nome da imagem: {file.name}</p>
        <p>Tipo da imagem: {file.type}</p>
        <p>Tamanho da imagem: {file.size} bytes</p>
        {file && <Imagem image={file} />}
      </div>
    );
  }

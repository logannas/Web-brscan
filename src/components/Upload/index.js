import React from 'react';
import Imagem from '../Image/index';
import {Button, makeStyles} from "@material-ui/core";
import { Link as RouterLink} from 'react-router-dom';
import '../main.css';

const useStyles = makeStyles(() => ({
  uploadButton:{
      background: "linear-gradient(45deg, #263073 30%, #346E9D 90%)",
      fontFamily: "Helvetica",
      fontSize: "20px",
      width: "100px",
      height: "50px",
      margin: "20px",
      padding: "20px",
      borderRadius: "10px",
      fontWeight: 500,
      size: "10px",
      marginLeft: "38px",
      color: "white",
  },
}));


export default function Upload(props){
    const [file, setFile] = React.useState("");
    const link = props.link;

    const {uploadButton} = useStyles();

    const headersData=[
        {
            label: "Resultado",
            href: "/resultado/" + link,
        },
    ];

    function handleUpload(event) {
      setFile(event.target.files[0]);
    }

    const getUploadButton = () =>{
      return headersData.map(({label, href})=>{
          return(
            <Button type="button"{...{key: label, to:href, component: RouterLink, className:uploadButton}} file={file}>Enviar</Button>
          );
      });
    };

    function Teste(file){
      if(file){
        return getUploadButton(file);
      }
    }

    return (
      <div className="upload-box Upload">
        <input type="file" onChange={handleUpload} />
        <p>Nome da imagem: {file.name}</p>
        <p>Tipo da imagem: {file.type}</p>
        <p>Tamanho da imagem: {file.size} bytes</p>
        {file && <Imagem image={file} />}
        {Teste(file)}
      </div>
    );
  }

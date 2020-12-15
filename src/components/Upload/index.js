import React from 'react';
import Imagem from '../Image/index';
import {Button, makeStyles} from "@material-ui/core";
import Modal from "react-modal";
import ResultClassification from "../ResultClassification/index";
import ResultObject from "../ResultObject/index";
import '../main.css';

const useStyles = makeStyles(() => ({
  uploadButton:{
      background: "linear-gradient(45deg, #B43C48  30%, #EF3B36 90%)",
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
  modal:{
    backgroundColor: "#F7FCFC",
    marginLeft: "20%",
    marginRight: "20%",
    marginTop: "8%",
  },
  button:{
    background: "linear-gradient(45deg, #B43C48  30%, #EF3B36 90%)",
    fontFamily: "Helvetica",
    fontSize: "10px",
    width: "50px",
    height: "25px",
    margin: "10px",
    padding: "10px",
    borderRadius: "5px",
    fontWeight: 250,
    size: "5px",
    marginLeft: "10px",
    color: "white",
  },
}));


export default function Upload(props){
    const [file, setFile] = React.useState("");
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const link = props.link;

    const {uploadButton, modal, button} = useStyles();

    const headersData=[
        {
            label: "Resultado",
        },
    ];

    function handleUpload(event) {
      setFile(event.target.files[0]);
    }

    const send =()=>{
      //Enviar para o servidor
      //Pagar as informações de resposta do servidor
      setModalIsOpen(true);
      
    }

    const setModalIsOpenToFalse =()=>{
      setModalIsOpen(false)
    }

    const getUploadButton = (file) =>{
      return headersData.map(({label})=>{
          return(
            <Button onClick={send} type="button"{...{key: label, className:uploadButton}}>Enviar</Button>
          );
      });
    };

    function Teste(file){
      if(file){
        return getUploadButton(file);
      }
    }

    function Teste2(){
      if(link === "1"){
        return(<ResultClassification file={file}/>)
      }
      else if(link ==="2"){
        return(<ResultObject />)
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
        <Modal isOpen={modalIsOpen} className={modal} ariaHideApp={false}>
          <Button className={button} onClick={setModalIsOpenToFalse}>Voltar</Button>
          {Teste2()}
        </Modal>
      </div>
    );
  }

import React from 'react';
import {Button, makeStyles} from "@material-ui/core";
import '../main.css';

const useStyles = makeStyles(() => ({
    sectionButton:{
        backgroundColor: "#346E9D",
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
    },
}));

export default function Image(props){
    const {sectionButton} = useStyles();

    return(
        <div className="DivImage">
            <img src={URL.createObjectURL(props.image)} alt={props.name} className="imagem"/>
            <br></br>
            <Button  type="button"{...{className:sectionButton}}>Enviar</Button>
        </div>

    );
}

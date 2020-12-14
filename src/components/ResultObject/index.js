import React from 'react';
import Title from '../Title/index';
import {Button, makeStyles} from "@material-ui/core";
import '../main.css';
import { Link as RouterLink} from 'react-router-dom';

const useStyles = makeStyles(() => ({
    resultButton:{
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
  }));
  

export default function ResultClassification(props){

    const {resultButton} = useStyles();

    const headersData=[
        {
            label: "Início",
            href: "/",
        },
    ];

    const getResultButton = () =>{
        return headersData.map(({label, href})=>{
            return(
              <Button type="button"{...{key: label, to:href, component: RouterLink, className:resultButton}}>Início</Button>
            );
        });
    };

    return(
        <div>
            <Title title="Esse serviço ainda não está disponível"/>
            <div className="upload-box Upload" >
                {getResultButton()}
            </div>
            
        </div>
    );

}

import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {Button, makeStyles} from "@material-ui/core";
import '../main.css';


const useStyles = makeStyles(() => ({
    sectionButton:{
        backgroundColor: "#06CDDB",
        fontFamily: "Helvetica",
        fontSize: "20px",
        width: "300px",
        height: "200px",
        margin: "20px",
        padding: "20px",
        borderRadius: "10px",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
    },
}));

export default function Sections(props){
    var link = props.numero;
    const {sectionButton} = useStyles();

    const headersData=[
        {
            label: "ClassificacaoImagem",
            href: "/upload/" + link,
        },
    ];

    const getMenuButton = () =>{
        return headersData.map(({label, href})=>{
            return(
                <Button type="button"{...{key: label, to:href, component: RouterLink, className:sectionButton}}>{props.title}</Button>
            );
        });
    };

    return(
        <div class="bnt">{getMenuButton()}</div>

    );
}

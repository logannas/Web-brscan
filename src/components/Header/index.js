import React from 'react';
import '../main.css';
import {AppBar, Button, Toolbar, makeStyles} from "@material-ui/core";
import { Link as RouterLink} from 'react-router-dom';

const useStyles = makeStyles(() => ({
        header:{
            backgroundColor: "#B43C48",
            fontFamily: "Helvetica",
            color: "#000000",
        },

        menuButton:{
            fontFamily: "Open Sans, sans-serif",
            fontWeight: 700,
            size: "18px",
            marginLeft: "38px",
            variant:"contained",
            color:"white",
        },

        toolbar: {
            display: "flex",
            justifyContent: "space-between",
            color: "white",
        },
}));

const headersData=[
    {
        label: "Início",
        href: "/",
    },
];


export default function Header(props){
    const {header, menuButton, toolbar} = useStyles();

    const getMenuButton = () =>{
        return headersData.map(({label, href})=>{
            return(
                <Button {...{key: label, to:href, component: RouterLink, className:menuButton}}>{label}</Button>
            );
        });
    };

    const displayDesktop = () =>{
        return (
            <Toolbar className={toolbar}>
                {props.title}
                {getMenuButton()}
            </Toolbar>
        )
    }
    return(
        <header>
           <AppBar className={header}>{displayDesktop()}</AppBar>
        </header>
    );
}

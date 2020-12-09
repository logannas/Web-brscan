import React from 'react';
import '../index.css'
import {AppBar, Button, Toolbar, makeStyles} from "@material-ui/core";
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
        header:{
            backgroundColor: "#06CDDB",
            fontFamily: "Helvetica",
            color: "#02383C",
        },

        menuButton:{
            fontFamily: "Open Sans, sans-serif",
            fontWeight: 700,
            size: "18px",
            marginLeft: "38px",
        },

        toolbar: {
            display: "flex",
            justifyContent: "space-between",
        },
}));

const headersData=[
    {
        label: "Home",
    },
];


function Header(props){
    const {header, menuButton, toolbar} = useStyles();

    const getMenuButton = () =>{
        return headersData.map(({label})=>{
            return(
                <Button className={menuButton}><Link to={"/"} class="Link">{label}</Link></Button>
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

export default Header;
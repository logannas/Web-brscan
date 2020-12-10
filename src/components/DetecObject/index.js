import React from 'react';
import Header from '../Header/index';
import Titulo from '../Title/index';
import Upload from '../Upload/index';
import '../main.css';


export default function DetectObject (){
    return(
            <div>
                <Header title="Esse é o título"/>
                <Titulo title="Faça o upload abaixo da imagem que deseja classificar:"/>
                <Upload />
            </div>
    );

}

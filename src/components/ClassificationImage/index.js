import React from 'react';
import Header from '../Header/index';
import Title from '../Title/index';
import Upload from '../Upload/index';
import '../main.css';

export default function ClassificationImage (){
    return(
        <div>
            <div class="Header">
                <Header title="Esse é o título"/>
            </div>

            <div class = "Titulo">
                <Title title="Faça o upload abaixo da imagem que deseja classificar"/>
            </div>

            <div class="Upload">
                <Upload />
            </div>
        </div>
    );

}

import React from 'react';
import Header from '../Header/index';
import Titulo from '../Titulo/index';
import Upload from '../Upload/index';
import '../index.css';

function ClassificacaoImagem (){
    return(
        <div>
            <div class="Header">
                <Header title="Esse é o título"/>
            </div>

            <div class = "Titulo">
                <Titulo title="Faça o upload abaixo da imagem que deseja classificar"/>
            </div>

            <div class="Upload">
                <Upload />
            </div>
        </div>
    );

}

export default ClassificacaoImagem;
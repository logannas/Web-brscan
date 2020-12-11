import React from 'react';
import Header from '../Header/index';
import Title from '../Title/index';
import Upload from '../Upload/index';
import '../main.css';

export default function ClassificationImage (){
    return(
        <div>
            <Header title="Esse é o título"/>
            <Title title="Faça o upload abaixo da imagem que deseja classificar:"/>
            <Upload link="1"/>
        </div>
    );

}

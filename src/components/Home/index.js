import React from 'react';
import Header from '../Header/index'
import Sections from '../Sections/index'
import Title from '../Title/index'
import '../main.css';


export default function Home(){
    return(
    <div>
        <Header title="Esse é o título"/>
        <Title title="Escolha uma opção abaixo:"/>
        <div className="Section">
            <Sections title="Classificação de Imagem" numero="1"/>
            <Sections title="Detecção de Objetos" numero="2"/>
        </div>    
        
    </div>
        

    );
}

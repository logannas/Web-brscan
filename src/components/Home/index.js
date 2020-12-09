import React from 'react';
import Header from '../Header/index'
import Sections from '../Sections/index'
import Titulo from '../Titulo/index'
import '../index.css'

function Home(){
    return(
    <div>
        <div class="Header">
            <Header title="Esse é o título"/>
        </div>

        <div class = "Titulo">
            <Titulo title="Escolha uma opção abaixo:"/>
        </div>

        <div class="Section">
        <Sections title="Classificação de Imagem" numero="1"/>
        <Sections title="Detecção de Objetos" numero="2"/>
        </div>    
    
        
    </div>
        

    );
}

export default Home;
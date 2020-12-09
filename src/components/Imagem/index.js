import React from 'react';
import '../index.css';

function Imagem(props){

    return(
        <div>
            <img src={URL.createObjectURL(props.image)} alt={props.name} class="imagem"/>
        </div>

    );
}

export default Imagem;
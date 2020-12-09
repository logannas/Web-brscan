import React from 'react';
import '../main.css';


export default function Image(props){

    return(
        <div>
            <img src={URL.createObjectURL(props.image)} alt={props.name} class="imagem"/>
        </div>

    );
}

import React from 'react';
import {Link} from 'react-router-dom';
import '../index.css'

function Sections(props){
    var link = props.numero;
    return(
        <div class="bnt">
            <button type="button" class="efeito efeito-1"><Link to={"/upload/" + link} class="Link"> {props.title}</Link>
            </button>
        </div>

    );
}

export default Sections;
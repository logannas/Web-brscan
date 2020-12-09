import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './components/Home/index';
import ClassificacaoImagem from './components/ClassificacaoImagem/index';
import DetectObjeto from './components/DetecObjeto/index';

function Routes(){
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={ClassificacaoImagem} path="/upload/1"/>
            <Route component={DetectObjeto} path="/upload/2"/>
        </BrowserRouter>
    );
}

export default Routes;
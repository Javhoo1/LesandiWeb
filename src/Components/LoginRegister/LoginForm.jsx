import React from 'react';
import {Link} from "react-router-dom";

export default function LoginSide() {
    return (
        <body className="bodyLogin">
        <div className='LoginBox'>
            <h1>Inicia Sesión</h1>
            
            <div>
                <input type="text" placeholder='Usuario' className="LoginItems"/>
                <br/>
                <input type="text" placeholder='Contraseña'/>
                <p></p>
                <p><a href="/#" class="btn btn-success" role="button" aria-pressed="true">INICIAR SESIÓN</a></p>
                
            </div>
            <p>¿Olvido su contraseña? <Link to='/'>Recuperar</Link> </p>
            <p>Si no tienes cuenta</p>
            <a href="Register" class="btn btn-secondary" role="button" aria-pressed="true">REGISTRATE</a>
        </div>
        </body>
    );
}
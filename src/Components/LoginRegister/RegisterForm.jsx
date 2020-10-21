import React from 'react';

export default function RegisterSide() {
    return (
        <body className="bodyRegister">
        <div className='divRegisterForm'>
            <h1>Crea tu perfil</h1>
            <p>Si ya estás registrado, <a href="Login">Inicia Sesion</a></p>

                <input className='inputRegister' type="text" placeholder='Nombre'/>
                <br/>
                <input className='inputRegister' type="text" placeholder='Nombre de Usuario'/>
                <br/>
                <input className='inputRegister' type="text" placeholder='Contraseña'/>
                <br/>
                <select className='inputRegister'>
                    <option selected value="primergrado" disabled="true">Seleccione Grado</option>
                    <option value="primergrado">Primer Grado</option>
                    <option value="segundogrado">Segundo Grado</option>
                    <option value="tercergrado">Tercer Grado</option>
                    <option value="otro">Otro</option>
                </select>
                <br/>
                <input className='inputRegister' type="text" placeholder='Nombre Institucion (opcional)'/>
                <br/>
                <a href="/#" class="btn btn-outline-success" role="button" aria-pressed="true">CREAR CUENTA</a>
        </div>
        </body>
    );
}
import React from 'react';

export default function Home(){
    return(
        <body className="bodyHome">
            <div>
                <h1>BIENVENIDOS A LESANDI</h1>;
                <h3>Aprender nunca ha sido tan divertido</h3>;
                <div className="botonHome">
                    <button type="button" class="btn btn-outline-info btn-lg" href="Login">INICIAR SESIÓN</button>
                    <button type="button" class="btn btn-outline-success btn-lg" href="Login">REGISTRARSE</button>
                </div>
            </div>
        </body>
        
    );
}
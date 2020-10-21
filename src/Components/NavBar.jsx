import React from 'react';
import Logo from '../Img/Logo-Lesandi.jpg';

export default function NavBar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="Home"><img src={Logo} alt="Logo" maxwidth="100%" width="60" height="" /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-link" className="textnav-link" href="Home">Inicio</a>
                <a class="nav-link" className="textnav-link" href="Nosotros">Nosotros</a>
                <a class="nav-link" className="textnav-link" href="Juegos">Juegos</a>
                <a class="nav-link" className="textnav-link" href="Contacto">Contacto</a>
                <a class="nav-link" className="textnav-link" href="Login">Iniciar Sesion</a>
            </div>
            </div>
        </nav>
    );
}
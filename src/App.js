import React from 'react';

import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import Nosotros from "./Pages/Nosotros";
import Contacto from "./Pages/Contacto";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Juegos from "./Pages/Juegos";
import Register from "./Pages/Register";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/Home' component={Home}/>
                <Route exact path='/Nosotros' component={Nosotros}/>
                <Route path='/Juegos' component={Juegos}/>
                <Route path='/Contacto' component={Contacto}/>
                <Route path='/Login' component={Login}/>
                <Route path='/Register' component={Register}/>
            </Switch>
        </Router>
    );
}

export default App;
import React from 'react';
import './content.css';
import {Switch, Route} from 'react-router-dom';
import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import Param from '../../views/examples/Param';
import NotFound from '../../views/examples/NotFound';

const Content = props =>(
    <main className="content">
        <Switch>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/param/:id">
                <Param/>
            </Route>
            {/* Só enra no home se for exatamente barra */}
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="*">
                <NotFound/>
            </Route>
            
        </Switch>
    </main>
)

export default Content;
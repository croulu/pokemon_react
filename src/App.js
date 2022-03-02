import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import UsePokedex from './hooks/UsePokedex'
import Home from "./pages/Home";
import PokeContext from "./contexts/PokeContext";

const App = () => {

    const {pokemonsList, isLoading, goPrev, goNext} = UsePokedex()

    return (
        <PokeContext.Provider value={{pokemonsList, isLoading, goPrev, goNext}}>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Home></Home>
                    </Route>
                    <Route path='/*'><h1>pokemon *</h1></Route>
                </Switch>
            </Router>
        </PokeContext.Provider>
    );
}

export default App;

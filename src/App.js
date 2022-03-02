import React from 'react';
import UsePokedex from './hooks/UsePokedex'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

const App = () => {

    const {pokemonsList, isLoading, goPrev, goNext} = UsePokedex()


    if (isLoading) return <h1>Loading...</h1>

    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <div className="App">
                        <ul>
                            {
                                pokemonsList.results.map(pokemon => <li key={pokemon.name}>
                                    <Link to={`/${pokemon.name}`}>{pokemon.name}</Link>
                                </li>)
                            }
                        </ul>
                        <button disabled={!pokemonsList.previous} onClick={goPrev}>Prev</button>
                        <button disabled={!pokemonsList.next} onClick={goNext}>Next</button>
                    </div>
                </Route>
                <Route path='/*'><h1>pokemon *</h1></Route>
            </Switch>
        </Router>
    );
}

export default App;

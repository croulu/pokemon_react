import React from 'react';
import UsePokedex from "./UsePokedex"

const App = () => {

    const {pokemonList} = UsePokedex()

    console.log(pokemonList)

    return (
        <div className="App">
            AAA
        </div>
    );
}

export default App;

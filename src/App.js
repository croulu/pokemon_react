import React from 'react';
import UsePokedex from "./UsePokedex"

const App = () => {

    const {pokemonList, isLoading} = UsePokedex()

    console.log(pokemonList)

    if (isLoading) return <h1>Loading...</h1>

    return (
        <div className="App">
            Hello
        </div>
    );
}

export default App;

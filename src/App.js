import React from 'react';
import UsePokedex from "./UsePokedex"

const App = () => {

    const {pokemonsList, isLoading} = UsePokedex()

    console.log('--->')
    console.log(pokemonsList)

    if (isLoading) return <h1>Loading...</h1>

    return (
        <div className="App">
            Hello
        </div>
    );
}

export default App;

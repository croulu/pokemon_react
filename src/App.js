import React from 'react';
import UsePokedex from "./UsePokedex"

const App = () => {

    const {pokemonsList, isLoading, goPrev, goNext} = UsePokedex()


    if (isLoading) return <h1>Loading...</h1>

    return (
        <div className="App">
            <ul>
                {
                    pokemonsList.results.map(pokemon => <li key={pokemon.name}>{pokemon.name}</li>)
                }
            </ul>
            <button disabled={!pokemonsList.previous} onClick={goPrev}>Prev</button>
            <button disabled={!pokemonsList.next} onClick={goNext}>Next</button>
        </div>
    );
}

export default App;

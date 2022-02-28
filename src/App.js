import React from 'react';
import UsePokedex from "./UsePokedex"

const App = () => {

    const {pokemonsList, isLoading, goPrev, goNext} = UsePokedex()

    if (isLoading) return <h1>Loading...</h1>

    return (
        <div className="App">
            <button onClick={goPrev}>Prev</button>
            <button onClick={goNext}>Next</button>
        </div>
    );
}

export default App;

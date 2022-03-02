import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import PokeContext from "../contexts/PokeContext";

const Home = () => {
    const {pokemonsList, isLoading, goPrev, goNext} = useContext(PokeContext)
    if (isLoading) return <h1>Loading...</h1>

    return (
        <div>
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
    );
};

export default Home;

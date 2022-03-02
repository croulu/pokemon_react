import React, {useContext, useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import PokeContext from "../contexts/PokeContext";

const Pokemon = () => {
    const {getPokemon} = useContext(PokeContext)
    const location = useLocation()

    const [pokemon, setPokemon] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        const fetchPokemon = async () => {
            const name = location.pathname.slice(1)
            const pokemon = await getPokemon(name)
            setPokemon(pokemon)
            setIsLoading(false)
        }
        fetchPokemon()

    }, [location, getPokemon])

    if (isLoading) return <h1>Loading...</h1>

    return (
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.other['official-artwork'].front_default}
                 alt=''
                 style={{height: '300px'}}
            />
        </div>
    );
};

export default Pokemon;

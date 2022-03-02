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

    }, [location])

    if (isLoading) return <h1>Loading...</h1>

    return (
        <div>
            {pokemon.name}
        </div>
    );
};

export default Pokemon;

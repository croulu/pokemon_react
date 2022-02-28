import React from 'react';
import {useState, useEffect} from 'react';

const Pokedex = require('pokeapi-js-wrapper')
const P = new Pokedex.Pokedex()


const UsePokedex = () => {
    const [pokemonsList, setPokemonList] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [config, setConfig] = useState({
        offset: 0,
        limit: 10
    })

    useEffect(() => {
        setIsLoading(true)

        const getPokemonsList = async () => {
            const pokemons = await P.getPokemonsList(config)
            setPokemonList(pokemons)
            setIsLoading(false)
        }
        getPokemonsList()
    }, [config])

    return {
        pokemonsList, isLoading
    }
};

export default UsePokedex;

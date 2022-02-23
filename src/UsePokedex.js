import React from 'react';
import {useState, useEffect} from 'react';

const Pokedex = require('pokeapi-js-wrapper')
const P = new Pokedex.Pokedex()


const UsePokedex = () => {
    const [pokemonList, setPokemonList] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [config, setConfig] = useState({
        offset: 0,
        limit: 10
    })

    useEffect(() => {
        setIsLoading(true)

        const getPokemonList = async () => {
            const pokemons = await P.getPokemonsList(config)
            setPokemonList(pokemons)
            setIsLoading(false)
        }
        getPokemonList()
    }, [config])

    return {
        pokemonList, isLoading
    }
};

export default UsePokedex;

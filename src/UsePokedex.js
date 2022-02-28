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
            console.log(pokemonsList)
            setIsLoading(false)
        }
        getPokemonsList()
    }, [config])

    const goPrev = () => {
        const offset = config.offset - 10

        setConfig ({
            ... config,
            offset
        })
    }

    const goNext = () => {
        const offset = config.offset + 10

        setConfig ({
            ... config,
            offset
        })
    }

    return {
        pokemonsList, isLoading, goPrev, goNext
    }
};

export default UsePokedex;

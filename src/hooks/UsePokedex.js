import {useState, useEffect} from 'react';

const Pokedex = require('pokeapi-js-wrapper')
const P = new Pokedex.Pokedex()


const UsePokedex = () => {
    const [pokemonsList, setPokemonsList] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [config, setConfig] = useState({
        offset: 0,
        limit: 10
    })

    useEffect(() => {
        setIsLoading(true)

        const getPokemonsList = async () => {
            const pokemons = await P.getPokemonsList(config)

            const requests = pokemons.results.map(( {name}) => P.getPokemonByName(name))
            const results = await Promise.all(requests)

            setPokemonsList({...pokemons, results})
            setIsLoading(false)
        }
        getPokemonsList()
    }, [config])

    const goPrev = () => {
        const offset = config.offset - 10

        setConfig ({
            ...config,
            offset
        })
    }

    const goNext = () => {
        const offset = config.offset + 10

        setConfig ({
            ...config,
            offset
        })
    }

    const getPokemon = async name => {
        const pokemon = await P.getPokemonByName(name)
        return {...pokemon}
    }

    return {
        pokemonsList, isLoading, goPrev, goNext, getPokemon
    }
};

export default UsePokedex;

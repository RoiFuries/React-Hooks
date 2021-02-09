import React, {useState, useEffect, useReducer} from 'react'

const initialState = {
    favorites: []
}

const favoriteReducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_FAVORITE':
            return{
                ...state,
                favorites:[...state.favorites, action.payload]
            };
            default:
                return state;
    }
}

const Chracters  = () => {

    const [characters, setCharacters] = useState([]);
    const [favorites, dispatch] = useReducer(favoriteReducer,initialState)

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(respuesta => respuesta.json())
        .then(datos => setCharacters(datos.results));  //la info que sacamos del reponse.json se la pasamos a setcaracters
    }, []);

    const handleClick = favorite => {
        dispatch({type: 'ADD_TO_FAVORITE', payload: favorite})
    }

    return (
        <div className="Chracters">

            {favorites.favorites.map(favorite => (
                <li key="{favorite.id}">
                    {favorite.name}
                </li>
            ))}
            {characters.map(character => (
                <div className="item" key={character.id}>
                    <h2>{character.name}</h2>
                    <button type='button' onClick={() => handleClick(character)}>Agregas a Favs </button>
                </div>
            ))}
        </div>
        

    );
}
export default Chracters
import React, {useState, useEffect, useReducer, useMemo } from 'react'

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
    const [search, setSearch] = useState('')


    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(respuesta => respuesta.json())
        .then(datos => setCharacters(datos.results));  //la info que sacamos del reponse.json se la pasamos a setcaracters
    }, []);

    const handleClick = favorite => {
        dispatch({type: 'ADD_TO_FAVORITE', payload: favorite})
    }

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }
    // const filteredUsers = characters.filter((user) =>{
    //     return user.name.toLowerCase().includes(search.toLowerCase());
    // })

    const filteredUsers = useMemo(() =>
        characters.filter((user) =>{
            return user.name.toLowerCase().includes(search.toLowerCase());
        }),
        [characters, search]
    )

    return (
        <div className="Chracters">

            {favorites.favorites.map(favorite => (
                <li key="{favorite.id}">
                    {favorite.name}
                </li>
            ))}

            <div className="Search">
                <input type="text" value={search} onChange={handleSearch} />
            </div>

            {filteredUsers.map(character => (
                <div className="item" key={character.id}>
                    <h2>{character.name}</h2>
                    <button type='button' onClick={() => handleClick(character)}>Agregas a Favs </button>
                </div>
            ))}
        </div>
        

    );
}
export default Chracters
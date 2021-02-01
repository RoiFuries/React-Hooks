import React, {useState, useEffect} from 'react'


const Chracters  = () => {

    const [personajes, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(respuesta => respuesta.json())
        .then(datos => setCharacters(datos.results));  //la info que sacamos del reponse.json se la pasamos a setcaracters
    }, []);


    return (
        <div className="Chracters">
                {personajes.map(personajes => (
                    <h2>{personajes.name}</h2>
                ))}
        </div>

    );
}
export default Chracters
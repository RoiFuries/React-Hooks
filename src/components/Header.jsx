import React, { useState, useContext } from 'react';
import ThemeContext from '../context/ThemeContext'

const Header = () => {
    const [darkMode, setDarkmode] = useState(false); 
    const color = useContext(ThemeContext)
    
    const  accion = () => {
        setDarkmode(!darkMode)
    }

    return(
        <div className="Header">
            <h1 style={{color}}>ReactHooks</h1>
            <button type="button" onClick={accion}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button>  {/*esto es un if */}
        </div>
    );
}

export default Header;
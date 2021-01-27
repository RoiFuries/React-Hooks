import React, {useState} from 'react';

const Header = () => {
    const [darkMode, setDarkmode] = useState(false);
    
    const  accion = () => {
        setDarkmode(!darkMode)
    }

    return(
        <div className="Header">
            <h1>ReactHooks</h1>
            <button type="button" onClick={accion}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button>  {/*esto es un if */}
        </div>
    );
}

export default Header;
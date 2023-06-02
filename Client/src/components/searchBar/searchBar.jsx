import { useState } from "react";
import style from "./searchBar.module.css"
import logo from "../../img/rick.png"

const SearchBar = ({onSearch}) => {
    const [id, setId] = useState('');

    const handleChange = (event) => {
        setId(event.target.value)
    };

    return (
       <div className={style.wrappedBar}>
            <img className={style.imgNav} src={logo} alt=''/>
            <input className={style.inputNav} type='search' onChange={handleChange} value={id} /> 
            <body/>
            <button className={style.buttonNav}onClick={()=>{onSearch(id)}}>Agregar</button> 
       </div>
    );
};
 
export default SearchBar;
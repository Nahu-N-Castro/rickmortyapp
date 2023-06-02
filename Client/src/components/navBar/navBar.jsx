import { NavLink} from "react-router-dom";
import SearchBar from "../searchBar/searchBar";
import style from "./navBar.module.css"

const navBar = ({onSearch}) => {
    return(
        <div className={style.div}>
            <NavLink className={style.Navbuttons} to='/home'>Home</NavLink>
            <NavLink className={style.Navbuttons} to='/about'>About</NavLink>
            <NavLink className={style.Navbuttons} to='/favorites'>Favorites</NavLink>
            <SearchBar className={style.search} onSearch={onSearch}/>
        </div>

    );
}

export default navBar;  
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState  } from "react";

const Detail = () => {

    const [character, setCharacter] = useState({});
    const {id} = useParams() 

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
     
    return(
        <div>
            <h1>{character.name && character.name}</h1>
            <h1>{character.status && character.status}</h1>
            <h1>{character.species && character.species}</h1>
            <h1>{character.gender && character.gender}</h1>
            <h1>{character.name && character.name}</h1>
            <img src={character.image && character.image} alt='' />
        </div>

    )
}
export default Detail;
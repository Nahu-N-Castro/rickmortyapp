import style from "./card.module.css";
import { Link } from "react-router-dom";
import { addFav, deleteFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

const Card = ({id, name, status, species, gender, origin, image, onClose, addFav, deleteFav, myFavorites}) => {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () =>{
    isFav ? deleteFav(id) : addFav({id, name, status, species, gender, origin, image, onClose});
    setIsFav(!isFav)
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites,id]);

  return (
    <div className={style.fondo}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button className={style.button} onClick={() => {onClose(id);}}>X</button>
      <img className={style.images} src={image} alt="" />
      <Link className={style.link}to={`/detail/${id}`}>
        <h2 className={style.name}>{name}</h2>
      </Link>
      <div className={style.description}>
        <h2>Status: {status}</h2>
        <h2>Species: {species}</h2>
        <h2>Gender: {gender}</h2>
        <h2>Origin: {origin}</h2>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    deleteFav: (id) => dispatch(deleteFav(id)),
  };
};


const mapStateToProps = (state)=> {
   return{
      myFavorites: state.myFavorites
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);

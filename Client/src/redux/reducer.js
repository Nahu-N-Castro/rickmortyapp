import { ADD_FAV, DELETE_FAV,ORDER,FILTER_CARDS } from "./actions";

const initialState = {
  myFavorites: [],
  allCharactersFav: [] 
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharactersFav, action.payload],
        allCharactersFav: [...state.allCharactersFav, action.payload],
      };

    case DELETE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((fav) => fav.id !== Number(action.payload)),
        allCharactersFav: [...state.allCharactersFav, action.payload]
      };

    case FILTER_CARDS:
      const allCharactersFiltered = state.allCharactersFav.filter((char)=>char.gender === action.payload)
      return{
        ...state,
        myFavorites: allCharactersFiltered
      }

    case ORDER:
      const allCharactersCopy = [...state.allCharactersFav]
      return{
        ...state,
        myFavorites: 
        action.payload === "A"
        ?allCharactersCopy.sort((a,b)=>a.id - b.id)
        :allCharactersCopy.sort((a,b)=>b.id - a.id)
      }

    default:
      return { ...state };
  } 
};

export default reducer;
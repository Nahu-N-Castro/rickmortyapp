import style from './App.module.css';
import Home from './components/Views/Home.jsx';
import About from './components/Views/About.jsx';
import NavBar from './components/navBar/navBar.jsx';
import Detail from './components/detail/detail.jsx';
import Forms from './components/forms/forms';
import axios from 'axios';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Favorites from './components/favorites/favorites';


function App() {

  const [characters, setCharacters ] =  useState([])

  function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }      

   const onClose = (id) => {
    setCharacters(
      characters.filter((char)=>{
        return char.id !== Number(id)
      })
    )
  }

  return (
    <div className={style.App}>
      <NavBar onSearch={onSearch} />
      <Routes>
        <Route path= '/' element={<Forms/>}/>
        <Route path='/home' element={<Home characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
    </div>
  );
  }

  export default App;

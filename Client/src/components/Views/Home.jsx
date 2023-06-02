import Cards from "../cards/cards"

const Home = ({characters, onClose}) =>{
    return(
        <div>
            <Cards  characters={characters} onClose={onClose} />
        </div>
    )
}

export default Home;
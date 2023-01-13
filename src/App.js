import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css';

function App() {
  const [fruits, setFruits] = useState([])
  const [fruit, setFruit] = useState({})
  const [display, setDisplay] = useState(false)
  const [fruitImage, setFruitImage] = useState("")


  useEffect(() => {
    apiCall()
  }, [])

  function apiCall() {
    fetch("https://project2-production.up.railway.app/fruits")
      .then((res) => res.json())
      .then((data) => setFruits(data))
  }

  const handleClick = async (fruitName) => {
    const response = await axios(`https://api.giphy.com/v1/gifs/search?api_key=APIKEY&q=${fruitName}`)
    setFruitImage(response.data.data[0].images.original.url)
    setDisplay(prev => !prev)
  }


  return (
    <div className="App">

      <div className="fruits-list">
        {fruits.map((fruit) => (
          // <div className="fruit-container" onClick={() =}

          // <div className="modal">
          <div onClick={() => handleClick(fruit.name)} className="info" key={fruit._id}>
            <h1>{fruit.name}</h1>
            <p>{fruit.genus}</p>
            <p>{fruit.family}</p>
            <p>{fruit.order}</p>
            <p>{fruit.nutrition.carbohydrates}</p>
            <p>Protein: {fruit.nutrition.protein}</p>
            <p>{fruit.nutrition.fat}</p>
            <p>{fruit.nutrition.calories}</p>
            <p>{fruit.nutrition.suger}</p>
          </div>
        ))}
        {display && (
          <div>
            <img src={fruitImage} />
          </div>
        )}
      </div>
    </div>

  );

}

export default App;

import { useEffect, useState } from 'react'
import Nav from './Nav.jsx';
import './App.css';

function App() {
  const [fruits, setFruits] = useState([])
  const [fruit, setFruit] = useState({})
  let [modalToggle, setModalToggle] = useState(false)

  useEffect(() => {
    apiCall()
  }, [])

  function apiCall() {
    fetch("https://project2-production.up.railway.app/fruits")
     
    
    .then((res) => res.json())
    .then((data) => setFruits(data))
  }
  


  function display() {
    setModalToggle(prev => !prev)
  }

  function handleClick(fruInfo) {
    setFruit(fruInfo)
    display()
  }

  return (
    <div className="App">
      <Nav />
      <div className="fruit-list">
        {fruits.map((fruit, index) => (
          <div className="fruit-container" onClick={() => handleClick(fruit)} key={index}>
            
            <h5>{fruit.name}</h5>
          </div>
        ))}
      </div>
      {modalToggle ?
        <div className="modal">
          <div className="modal-content">
            <div className="info">
            <h1>{fruit.name}</h1>
                    <p>Genus: {fruit.genus}</p>
                    <p>Family {fruit.family}</p>
              <p>Order: {fruit.order}</p>
              <p>Carbs: {fruit.nutrition.carbohydrates}</p>
              <p>Protein: {fruit.nutrition.protein}</p>
                    <p>Fat: {fruit.nutrition.fat}</p>
                    <p>Calories: {fruit.nutrition.calories}</p>
                    <p>Sugar: {fruit.nutrition.sugar}</p>
              <button onClick={display}>x</button>
              </div>
        </div>
          </div>
        
        :
        null
      }
    </div>
  );
}

export default App;

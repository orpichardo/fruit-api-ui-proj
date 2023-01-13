import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [fruits, setFruits] = useState([])
  const [fruit, setFruit] = useState({})
  

  useEffect(() => {
    apiCall()
  }, [])

  function apiCall() {
    fetch("https://project2-production.up.railway.app/fruits")
      .then((res) => res.json())
      .then((data) => setFruits(data.results))
  }


  return (
    <div className="App">
     
    </div>
  );
}

export default App;

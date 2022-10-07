import CatsForLife from './components/cats4life';
import NavBar from './components/navbar';
import './App.css';
import {useEffect, useState} from "react"

function App() {
  const [cats, setCats] = useState()
  
  useEffect(() => {
    async function getCats(){
      const res = await fetch("https://api.thecatapi.com/v1/breeds?limit=10")
      const data = await res.json()
      console.log(data)
    }
    getCats()
  },[])


  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
      </div>
    </div>
  );
}

export default App;

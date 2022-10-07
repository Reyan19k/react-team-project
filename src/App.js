import CatsForLife from './components/cats4life';
import CatsFooter from './components/footer';
import NavBar from './components/navbar';
import './App.css';
import {useEffect, useState} from "react"

function App() {
  const [cats, setCats] = useState()
  
  useEffect(() => {
    async function getCats(){
      const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_NU5mYCQqNl9PSQh4QNh8xShqFbfp3eMXKwMQ9szUiYZxaoxjQsyKoDYJJA0dTbw2")
      const data = await res.json()
      console.log(data)
      setCats([...data])
    }
    getCats()
  },[])

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <CatsFooter/>
      </div>
    </div>
  );
}

export default App;
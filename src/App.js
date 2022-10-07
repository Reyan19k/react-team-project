import CatsForLife from './components/cats4life';
import CatsFooter from './components/footer';
import NavBar from './components/navbar';
import './App.css';
import {useEffect, useState} from "react"

function App() {

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
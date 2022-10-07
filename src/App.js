import CatsForLife from './components/cats4life';
import styled from "styled-components"
import { useState } from "react"
import Sidebar from "./components/Sidebar"
import './App.css';

function App() {
  const [show, setShow] = useState(false)
  return (
    <Container>
      <Sidebar show={show} />
      <StyledButton onClick={() => setShow(!show)}>Show/Hide Cart</StyledButton>
      <CatsForLife />
    </Container>
  );
}

export default App;

const Container = styled.div`
display: flex;
height: 100vh;
width: 100vw;`

const StyledButton = styled.button`
border: none;
height: 50px;
width: 100px;
background-color: tan;
color: white;
border-radius: 5px;
margin: 10px;
margin-right: 15px;
cursor: pointer;
`
import CatsForLife from '../components/cats4life';
import Sidebar from "../components/Sidebar"
import {useEffect, useState} from "react"
import styled from "styled-components"



const Home = () => {
    const [show, setShow] = useState(false)

    return (
        <div>
            <div>
                <Sidebar show={show} />
                <StyledButton onClick={() => setShow(!show)}>Show/Hide Cart</StyledButton>
            </div>
            <div>
                <h1>Home page</h1>
            </div>
            <div>
                <CatsForLife />
            </div>
        </div>
    )
}

export default Home;

const Container = styled.div`
display: flex;
height: 100vh;`

const StyledButton = styled.button`
border: none;
height: 50px;
width: 100px;
background-color: tan;
color: white;
border-radius: 5px;
margin: 10px;
margin-right: 15px;
cursor: pointer;`
import styled from "styled-components"

const Sidebar = ({show}) => {
    return (
    <BarContainer show={show}>
        <Sideheader>Your Cart</Sideheader>
        <Sidecontent></Sidecontent>
        <Sidefooter>Purchase Cart?</Sidefooter>
    </BarContainer>
    )
}

export default Sidebar

const BarContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
max-height: 100%;
width: 256px;
margin-right: 0;
background-color: ${({show}) => show ? "tan" : "white"};
transition: all 0.5s;
transform: ${({show}) => show ? "translateX(0)" : "translateX(-500px)"}
`

const Sidecontent = styled.div`
position: absolute;
width: 100%;
top: 60px;
bottom: 60px;
left: 5px;
overflow-y:auto;`

const Sideheader = styled.p`
height: 50px;
font-size: 35px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
padding-bottom: 5px;
margin: 0;
cursor: default;
border-bottom: 3px solid black;
`
const Sidefooter = styled.div`
height: 50px;
font-size: 25px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
paddint-top: 5px;
margin: 0;
cursor: pointer;
border-top: 3px solid black`
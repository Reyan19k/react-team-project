import happyCat from "../images/happycat.jpg"

const About = () => {
    return (
        <div className="aboutPage">
            <div><h1><strong>About page</strong></h1></div>
            <div><p>Here at Cats4Life we aim to home cats and kittens in their loving forever homes.<br></br>We source locally bred, healthy and happy felines for prospective cat owners to ensure they will go to the best homes where they will be loved and cared for.</p></div>
            <div><img src={happyCat}></img></div>
        </div>
    )
}

export default About;
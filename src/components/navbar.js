import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"

const NavBar = () => {
    const navigate = useNavigate()

    return (
        <div className="container_nav">
            <nav >
                <Link className="nav_link" to="/"><p>Home</p></Link>
                <Link className="nav_link" to="/About"><p>About</p></Link>
                <Link className="nav_link" to="/contact"><p>Contact</p></Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="About" element={<About />} />
                <Route path="Contact" element={<Contact />} />
            </Routes>
        </div>
    )
}

export default NavBar;
import { Container, Nav, Navbar } from "react-bootstrap"
import logo from "../assets/images/logo-small.jpg"
import { useThemeContext } from "../context/ThemeContext"
import ToggleSwitch from "./ToggleSwitch"
const NavigationBar = () =>{

    const {themeMode} = useThemeContext()

    console.log("themeMode", themeMode)
    return( 
    <Navbar bg={themeMode ? "dark" : "light"} expand="lg" fixed="top" variant={themeMode ? "dark" : "light"}>
        <Container>
            <Navbar.Brand href="/">
                <img src={logo} height="50" className="d-inline-block align-top" alt="Zoyeb Khan" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#projects">Project</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#experience">Experience</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <ToggleSwitch />
        </Container>
    </Navbar>
    )
}

export default NavigationBar
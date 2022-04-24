import { Fragment } from "react"
import About from "../components/About"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import Skills from "../components/Skills"

const Home = () =>{
    return(
        <Fragment>
            <About />
            <Projects />
            <Skills />
            <Experience />
        </Fragment>
    )
}

export default Home
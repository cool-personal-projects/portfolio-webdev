import Projects from "./components/projects/projects.jsx";
import Header from "./components/welcomePage/header.jsx";
import About from "./components/about/about.jsx";
import Contact from "./components/contact/contact.jsx";
import Skills from "./components/skills/skills.jsx";
import {createRoot} from "react-dom/client";
import "../style.css"

export default function Main() {

    return (
        <main>
            <Header/>
            <About/>
            <Projects/>
            <Skills/>
            <Contact/>
        </main>

    )
}
const root = createRoot(document.getElementById("root"));
root.render(
    <Main/>
)
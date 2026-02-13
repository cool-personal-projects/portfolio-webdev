import Projects from "./components/projects/projects.jsx";
import Header from "./components/welcomePage/header.jsx";
import {createRoot} from "react-dom/client";
import About from "./components/about/about.jsx";
import "../style.css"

export default function Main() {

    return (
        <main>
            <Header/>
            <About />
            <Projects/>
        </main>
    )
}
const root = createRoot(document.getElementById("root"));
root.render(
    <Main/>
)
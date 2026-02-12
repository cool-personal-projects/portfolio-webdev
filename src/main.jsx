import ipad from "./assets/ipad.png"
import Project from "./components/project.jsx";
import {createRoot} from "react-dom/client";
import "../style.css"
export default function Main() {
    const langs = ["React", "HTML", "CSS", "JavaScript"];
    const newLangs = langs.map(lang => (
        <button key={lang}>{lang}</button>
    ))
    return (
        <main>
            <Project
                image = {ipad}
                title = "Website Development"
                description = "Minimalist portfolio website showcasing creative work with smooth animations and transitions."
                languages = {newLangs}
                demoLink = "https://weather-app-project-ui.netlify.app"
                codeLink = "https://github.com/javaScript-small-projects/weather-app.git"
            />
            <Project
                image = {ipad}
                title = "Website Development"
                description = "Minimalist portfolio website showcasing creative work with smooth animations and transitions."
                languages = {newLangs}
                demoLink = "weather-app-project-ui.netlify.app"
                codeLink = "https://github.com/javaScript-small-projects/weather-app.git"
            />
            <Project
                image = {ipad}
                title = "Website Development"
                description = "Minimalist portfolio website showcasing creative work with smooth animations and transitions."
                languages = {newLangs}
                demoLink = "weather-app-project-ui.netlify.app"
                codeLink = "https://github.com/javaScript-small-projects/weather-app.git"
            />
            <Project
                image = {ipad}
                title = "Website Development"
                description = "Minimalist portfolio website showcasing creative work with smooth animations and transitions."
                languages = {newLangs}
                demoLink = "weather-app-project-ui.netlify.app"
                codeLink = "https://github.com/javaScript-small-projects/weather-app.git"
            />
            <Project
                image = {ipad}
                title = "Website Development"
                description = "Minimalist portfolio website showcasing creative work with smooth animations and transitions."
                languages = {newLangs}
                demoLink = "weather-app-project-ui.netlify.app"
                codeLink = "https://github.com/javaScript-small-projects/weather-app.git"
            />
        </main>
    )
}
const root = createRoot(document.getElementById("root"));
root.render(
    <Main/>
)
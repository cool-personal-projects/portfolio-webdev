import Project from "./project.jsx";
import ipad from "../../assets/ipad.png"

export default function Projects() {
    const langsProject1 = ["React", "HTML", "CSS", "JavaScript"];
    const buttonLangsProject1 = langsProject1.map(lang => (
        <button key={lang}>{lang}</button>
    ))
    const langsProject2 = ["React", "HTML", "CSS", "JavaScript"];
    const buttonLangsProject2 = langsProject2.map(lang => (
        <button key={lang}>{lang}</button>
    ))
    const langsProject3 = ["Angular", "HTML", "CSS", "JavaScript"];
    const buttonLangsProject3 = langsProject3.map(lang => (
        <button key={lang}>{lang}</button>
    ))
    const langsProject4 = ["React", "HTML", "CSS", "Vanila JavaScript"];
    const buttonLangsProject4 = langsProject4.map(lang => (
        <button key={lang}>{lang}</button>
    ))

    return (
        <div className="projects-container">
            <div className="text">
                <p id="title">Featured Projects</p>
                <p id="description">A selection of my recent work showcasing various technologies and design approaches</p>
            </div>

            <div className="main-projects">
                <Project
                    image = {ipad}
                    title = "Website Development"
                    description = "Minimalist portfolio website showcasing creative work with smooth animations and transitions."
                    languages = {buttonLangsProject1}
                    demoLink = "https://weather-app-project-ui.netlify.app"
                    codeLink = "https://github.com/javaScript-small-projects/weather-app.git"
                />
                <Project
                    image = {ipad}
                    title = "Website Development"
                    description = "Minimalist portfolio website showcasing creative work with smooth animations and transitions."
                    languages = {buttonLangsProject2}
                    demoLink = "https://weather-app-project-ui.netlify.app"
                    codeLink = "https://github.com/javaScript-small-projects/weather-app.git"
                />
                <Project
                    image = {ipad}
                    title = "Website Development"
                    description = "Minimalist portfolio website showcasing creative work with smooth animations and transitions."
                    languages = {buttonLangsProject3}
                    demoLink = "https://weather-app-project-ui.netlify.app"
                    codeLink = "https://github.com/javaScript-small-projects/weather-app.git"
                />
                <Project
                    image = {ipad}
                    title = "Website Development"
                    description = "Minimalist portfolio website showcasing creative work with smooth animations and transitions."
                    languages = {buttonLangsProject4}
                    demoLink = "https://weather-app-project-ui.netlify.app"
                    codeLink = "https://github.com/javaScript-small-projects/weather-app.git"
                />
            </div>
        </div>
    )
}
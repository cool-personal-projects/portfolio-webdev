import Project from "./project.jsx";
import weather  from "../../assets/projects-pictures/weather.jpg"
import calculator from "../../assets/projects-pictures/calculator.png"
import claude from "../../assets/projects-pictures/claude-cooking.png"
import leads from "../../assets/projects-pictures/leads.png"

export default function Projects() {
    const langsProject1 = ["React", "HTML", "CSS"];
    const buttonLangsProject1 = langsProject1.map(lang => (
        <button key={lang}>{lang}</button>
    ))
    const langsProject2 = ["HTML", "CSS", "JavaScript"];
    const buttonLangsProject2 = langsProject2.map(lang => (
        <button key={lang}>{lang}</button>
    ))
    const langsProject3 = ["HTML", "CSS", "JavaScript"];
    const buttonLangsProject3 = langsProject3.map(lang => (
        <button key={lang}>{lang}</button>
    ))
    const langsProject4 = ["fireBase", "HTML", "CSS", "JavaScript"];
    const buttonLangsProject4 = langsProject4.map(lang => (
        <button key={lang}>{lang}</button>
    ))

    return (
        <section id="projects-container">
            <div className="text">
                <p id="title">Featured Projects</p>
                <p id="description">A selection of my recent work showcasing various technologies and design approaches</p>
            </div>

            <div className="main-projects">
                <Project
                    image = {claude}
                    title = "Cooking with Claude"
                    description = "Minimalist 'Recipe Generator based on available ingredients website showcasing creative work. Using Claude API."
                    languages = {buttonLangsProject3}
                    demoLink = "https://cook-with-claude-ai.netlify.app"
                    codeLink = "https://github.com/cool-personal-projects/chef-claude.git"
                />
                <Project
                    image = {weather}
                    title = "Weather UpDate"
                    description = "Type your city and see the weather infos. I used openweathermap API to fetch the data."
                    languages = {buttonLangsProject1}
                    demoLink = "https://weather-app-project-ui.netlify.app"
                    codeLink = "https://github.com/javaScript-small-projects/weather-app.git"
                />
                <Project
                    image = {calculator}
                    title = "Calculator"
                    description = "Minimalist portfolio website showcasing creative work with smooth animations and transitions."
                    languages = {buttonLangsProject2}
                    demoLink = "https://green-calculator-js.netlify.app/"
                    codeLink = "https://github.com/javaScript-small-projects/calculator.git"
                />
                <Project
                    image = {leads}
                    title = "Leads traking"
                    description = "A Chrome Exstention that helps recruiters select potentiel candidates, by saving the link to there profils and get back to it when there are done."
                    languages = {buttonLangsProject4}
                    demoLink = "https://url-tracker-mobile-app.netlify.app"
                    codeLink = "https://github.com/javaScript-small-projects/leads-tracker-app.git"
                />
            </div>
        </section>
    )
}
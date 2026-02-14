import AboutBox from "./aboutBox.jsx";
import Code from "../../assets/code.png"
import UI from "../../assets/ui-ux.png"
import Sport from "../../assets/sport.png"

export default function About() {
    return (
        <div id="about-container">
            <div className="text">
                <p id="title">About Me</p>
                <p id="description">I'm a passionate developer with a keen eye for design, dedicated to building exceptional digital products that make a difference.</p>
            </div>
            <div className="boxes">
                <AboutBox
                image ={Code}
                title = "Clean Code"
                text = "Writing maintainable, scalable, and efficient code"
                />
                <AboutBox
                    image ={UI}
                    title = "Creative Design"
                    text = "Crafting beautiful and intuitive user interfaces"
                />
                <AboutBox
                    image ={Sport}
                    title = "Sports / Social"
                    text = "I love collective sports"
                />
            </div>
            <p className="about-me">
                I'm a passionate developer at the beginning of my professional journey,
                constantly learning and building projects to improve my skills in web
                development and design. <br/>
                Through personal projects and continuous practice, I focus on writing
                clean, maintainable code and creating intuitive user experiences.
                <br/>
                I'm currently looking for an internship opportunity where I can grow,
                contribute to real-world projects, and learn from experienced developers.
            </p>
        </div>
    )
}
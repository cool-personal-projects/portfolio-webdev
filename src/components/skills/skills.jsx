import Skill from './skill.jsx';

export default function Skills() {
    const frontEnd = ["React", "Html/CSS", "Javascript", "Angular"];
    const buttonSkills1 = frontEnd.map((skill ) => (
        <p className="skill">{skill}</p>
    ))
    const backEnd = ["SQL", "PostgreSQL", "FireBase"];
    const buttonSkills2 = backEnd.map((skill ) => (
        <p className="skill">{skill}</p>
    ))
    const tools = ["Git", "Figma", "Docker", "SonarQube", "Java", "C"]
    const buttonSkills3 = tools.map((skill ) => (
        <p className="skill">{skill}</p>
    ))
    return (
        <div id="skills-container">
            <div className="text">
                <p id="title">Skills & Technologies</p>
                <p id="description">Always learning and exploring new technologies to stay at the forefront of web development.</p>
            </div>
            <div className="skills">
                <Skill
                    title = "Frontend"
                    skills = {buttonSkills1}
                />
                <Skill
                    title = "Backend"
                    skills = {buttonSkills2}
                />
                <Skill
                    title = "Tools & other"
                    skills = {buttonSkills3}
                />
            </div>
        </div>
    )
}
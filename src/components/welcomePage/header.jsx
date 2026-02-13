import NavBar from "./navbar.jsx";

export default function Header() {
    return (
        <div className="header">
            <NavBar />
            <div className="header-main">
                <p id="greeting">Hi, I'm Younes Tsouli</p>
                <p id="description">Creative Developer & Designer crafting beautiful digital experiences</p>
                <div id="buttons">
                    <a href={"#projects-container"} id="projects">View my work</a>
                    <a href={"#contact-me"} id="contact">Get in touch</a>
                </div>
            </div>
        </div>
    )
}
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
export default function Contact() {
    const socialLinks = [
        {
            icon: Mail,
            label: 'Mail',
            href: "mailto: younestsouli444@gmail.com",
            color: "hover: text-red-600",
            id: "mail",
        },
        {
            icon: Linkedin,
            label: 'Linkedin',
            href: "https://linkedin.com/in/younes-tsouli",
            color: "hover: text-blue-600",
            id: "linkedin",
        },
        {
            icon: Github,
            label: "GitHub",
            href: "https://github.com/Younes-tsouli",
            color: "hover:text-gray-900",
            id: "github",
        }
    ]
    return (
        <div id="contact-container">
            <div className="text">
                <p id="title">Let's Work Together</p>
                <p id="description">I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!</p>
            </div>
            <div className="links">
                {
                    socialLinks.map((link, index) => {
                        const Icon = link.icon
                        return (
                            <a  href={link.href}
                                key={index}
                                aria-label={ link.label }
                                className= {`link ${link.color}`}
                                target="_blank"
                                id={ link.id }
                            >
                                <Icon className="icon"/>
                            </a>
                        );
                    })
                }
            </div>
            <a href="mailto: younestsouli444@gmail.com" className="email-btn"><Mail /> Send Me an Email</a>
            <hr className="limit"/>
            <p id="description">© 2026 Younes Tsouli. Built by me from scratch using React and CSS.</p>
        </div>
    )
}
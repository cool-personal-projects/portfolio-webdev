import GitPic from '../assets/git-pic.png';
import FollowLink from '../assets/follow-link.png';

export default function Project(props) {
    return (
        <div className="project">
            <img src={props.image} alt="image" className="image"/>
            <div className="details">
                <h2 className="title">{props.title}</h2>
                <p className="description">{props.description}</p>
                <div className="languages">
                    {props.languages}
                </div>
                <div className="project-links">
                    <a href={props.codeLink} target="_blank" className="btn-code">
                        View Code
                    </a>

                    <a href={props.demoLink} target="_blank" className="btn-demo">
                        Live Demo
                    </a>
                </div>

            </div>
        </div>
    )
}
export default function Skill(props) {

    return (
        <div className="subject">
            <p id="title">{props.title}</p>
            <div className="container">
                {props.skills}
            </div>

        </div>
    )
}
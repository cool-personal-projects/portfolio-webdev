export default function AboutBox(props) {
    return (
        <div className="box">
            <img src={props.image} alt="" className="image" />
            <p className="title">{props.title}</p>
            <p className="text">{props.text}</p>
        </div>
    )
}
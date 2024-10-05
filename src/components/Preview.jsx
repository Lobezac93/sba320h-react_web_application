import "./Preview.css";

export default function Preview(props) {
    return (
        <div className={props.cName}>
            <img src={props.previewImg} alt="preview" /> 
            
            <div className="preview-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href={props.url} className={props.btnClass}>{props.btnText}</a>
            </div>
        </div>
    );
}

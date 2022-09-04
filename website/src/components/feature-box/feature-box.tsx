import { Link } from "react-router-dom";
import './feature-box.css' 

const FeatureBox = (props : any) => {
    var title = props.title;

    return (
        <div className="feature-box">
            <div className = "feature-box-content">
            <h1>{title}</h1>
            <p className = "feature-box-paragraph">This is a pargraph describing what this feature is and what it does.</p>
            </div>
        </div>
    )
}

export default FeatureBox;
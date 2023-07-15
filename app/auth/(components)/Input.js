import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Input({ icon, label, type }) {
    

    return (
        <div className="row">
            <FontAwesomeIcon icon={icon} size="3x" fixedWidth/>
            <p className="label">{label}</p>
            <input type={type}/>
        </div>
    )
}
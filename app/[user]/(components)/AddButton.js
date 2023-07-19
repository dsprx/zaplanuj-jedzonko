import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

export default function AddButton({ text }) {

    return (
        <div className="add-btn">
            <FontAwesomeIcon icon={faPlusSquare} size="3x"/>
            <p>{text}</p>
        </div>
    )
}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function TableCard(props) {
    const {id, name, description, week} = props.element;

    return (
        <tr className="table-card">
            <td>{id}</td>
            <td>{name}</td>
            <td>{description}</td>
            {props.type === "plans" && <td>{week}</td>}
            <td>
                <button>
                    <FontAwesomeIcon icon={faTrashCan}/>
                </button>
            </td>
        </tr>
    )
}
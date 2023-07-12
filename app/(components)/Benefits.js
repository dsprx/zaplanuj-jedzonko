import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClock, faListDots } from "@fortawesome/free-solid-svg-icons";

import "../(styles)/Benefits.css";

export default function Benefits() {
    return (
        <div id="benefits" className="container">
            <Card icon={faCheck}/>
            <Card icon={faClock}/>
            <Card icon={faListDots}/>
        </div>
    )    
}

function Card({icon}) {
    return (
        <div className="card">
            <FontAwesomeIcon icon={icon}/>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faubicus arcu condimentum sed.</p>
        </div>
    )
}
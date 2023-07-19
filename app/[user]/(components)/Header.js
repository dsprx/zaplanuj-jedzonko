import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Logo from "@/(components)/Logo";

export default function Header() {
    
    return (
        <header className="top-bar">
            <Logo/>
            <div className="user">
                <p>username</p>
                <FontAwesomeIcon icon={faUser} size="2x"/>
            </div>
        </header>
    )
}
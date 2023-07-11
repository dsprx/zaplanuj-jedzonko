import { NewsletterForm } from "./Newsletter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

import "../(styles)/Footer.css";
import Copyright from "./Copyright";

export default function Footer() {

    return (
        <footer>
            <div className="footer-cards">
                <div className="container">
                    <FooterCard type="text"/>
                    <FooterCard type="list"/>
                    <FooterCard type="contact"/>
                </div>
            </div>
            <Copyright/>
        </footer>
    )
}

function FooterCard({ type }) {
    const text = <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>;
    
    const list = (
        <ul>
            <li>consectetur adipiscing elit</li>
            <li> sed do eiusmod tempor</li>
            <li>incididunt ut labore</li>
            <li>et dolore magna aliqua</li>    
        </ul>
    );

    const inputStyle = {
        fontSize: "1.5rem",
        padding: "10px 20px",
        margin: 5
    }

    const buttonStyle = {
        text: "ZAPISUJĘ SIĘ",
        pSides: 20,
        pTop: 10,
        fontSize: "1.5rem"
    }

    const contact = (
        <>
            <NewsletterForm inputSpecs={inputStyle} buttonSpecs={buttonStyle}/>
            <div className="icons">
                <a href="https://facebook.com/"><FontAwesomeIcon icon={faFacebook}/></a>
                <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter}/></a>
                <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram}/></a>
            </div>
        </>
    )

    const types = {
        text, 
        list, 
        contact
    }

    return (
        <div className="card">
            <h2>{type === "contact" ? "Zapisz się do newslettera" : "Lorem ipsum"}</h2>
            {types[type]}
        </div>
    )
}
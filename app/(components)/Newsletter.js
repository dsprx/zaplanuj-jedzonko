import Button from "./Button";

import "../(styles)/Newsletter.css";

export default function Newsletter() {
    const inputStyle = {
        fontSize: "2rem",
        padding: 20,
        margin: 10
    }

    const buttonStyle = {
        text: "ZAPISUJĘ SIĘ",
        pSides: 40,
        pTop: 20,
        fontSize: "2rem"
    }

    return (
        <div className="newsletter-section">
            <div className="container">
                 <h2>Zapisz się do naszego newslettera</h2>
                <NewsletterForm inputSpecs={inputStyle} buttonSpecs={buttonStyle}/>
            </div>
        </div>
    )
}

export function NewsletterForm({ inputSpecs, buttonSpecs }) {

    return (
        <form>
            <input style={inputSpecs} type="email" placeholder="Adres e-mail"/>
            <Button {...buttonSpecs}/>
        </form>
    )
}
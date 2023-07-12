import Button from "./Button";

import "../(styles)/Newsletter.css";

export default function Newsletter() {
    const inputStyle = {
        fontSize: "2rem",
        padding: 20,
        margin: 10
    }

    return (
        <div className="newsletter-section">
            <div className="container">
                 <h2>Zapisz się do naszego newslettera</h2>
                <NewsletterForm/>
            </div>
        </div>
    )
}

export function NewsletterForm() {

    return (
        <form>
            <input type="email" placeholder="Adres e-mail"/>
            <Button text="ZAPISUJĘ SIĘ"/>
        </form>
    )
}
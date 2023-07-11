import Logo from "./Logo"
import Link from "next/link"

import "@/(styles)/Navbar.css"

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <Logo/>
                <div className="links">
                    <Link href="/auth">ZAPLANUJ POSIŁKI</Link>
                    <a href="/">DLACZEGO WARTO?</a>
                    <a href="/">O MNIE</a>
                    <a href="/">KONTAKT</a>
                </div>
            </div>
        </nav>
    )
}

import Logo from "./Logo"
import Link from "next/link"

import "@/(styles)/Navbar.css"
import HamburgerMenu from "./HamburgerMenu"

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <Logo/>
                <div className="links">
                    <Link href="/auth">ZAPLANUJ POSIŁKI</Link>
                    <a href="#benefits">DLACZEGO WARTO?</a>
                    <a href="#about">O MNIE</a>
                    <a href="#contact">KONTAKT</a>
                </div>
                <HamburgerMenu/>
            </div>
        </nav>
    )
}

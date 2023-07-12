"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "../(styles)/HamburgerMenu.css";

export default function HamburgerMenu() {
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <>
            <button className="hamburger-button" onClick={() => setMenuVisible(prev => !prev)}>
                <FontAwesomeIcon icon={faBars}/>
            </button>
            <AnimatePresence>
                {menuVisible && <Dropdown/>}
            </AnimatePresence>
        </>
    )
}

function Dropdown() {

    return (
        <motion.div 
            className="dropdown-menu"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.1}}
        >
            <a className="dropdown-element">ZAPLANUJ POSIŁKI</a>
            <a href="#benefits" className="dropdown-element">DLACZEGO WARTO?</a>
            <a href="#about"className="dropdown-element">O MNIE</a>
            <a href="#contact"className="dropdown-element">KONTAKT</a>
        </motion.div>
    )
}
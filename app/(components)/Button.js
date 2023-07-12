"use client"

import { useState } from "react";

import "../(styles)/Button.css";

export default function Button({ text }) {
    const [bg, setBg] = useState("rgb(255,165,0)");

    return (
        <button 
            style={{transitionDuration: "0.25s", backgroundColor: bg}}
            onMouseEnter={() => setBg("rgb(205, 125, 0)")}  
            onMouseLeave={() => setBg("rgb(255,165,0)")}  
        >
            {text}
        </button>
    )
}
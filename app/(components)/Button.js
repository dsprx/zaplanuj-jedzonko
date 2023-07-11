"use client"

import { useState } from "react";

export default function Button({ text, pSides, pTop, fontSize }) {
    const style = {
        padding: `${pTop}px ${pSides}px`,
        color: "white",
        border: "none",
        borderRadius: 5,
        fontSize,
        fontWeight: "bold",
        transitionDuration: "0.25s",
        cursor: "pointer"
    }

    const [bg, setBg] = useState("rgb(255,165,0)");

    return (
        <button 
            style={{...style, backgroundColor: bg}}
            onMouseEnter={() => setBg("rgb(205, 125, 0)")}  
            onMouseLeave={() => setBg("rgb(255,165,0)")}  
        >
            {text}
        </button>
    )
}
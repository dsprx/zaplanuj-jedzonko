"use client"

import "../(styles)/Slider.css";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Slider() {
    const [bg, setBg] = useState(0);
    const images = ["/images/food1.png", "/images/food2.png", "/images/food3.png"]
    const text = ["First", "Second", "Third"];

    const handleChangeImage = mode => {
        if(mode === "left") {
            setBg(prev => bg <= 0 ? images.length - 1 : prev - 1);
        } else {
            setBg(prev => bg >= images.length - 1 ? 0 : prev + 1);
        }
    }

    return (
        <div className="slider" style={{backgroundImage: `url(${images[bg]})`}}>
            <button onClick={() => handleChangeImage("left")}>
                <FontAwesomeIcon icon={faChevronLeft}/>
            </button>
            <div className="slider-text">
                <h1>{text[bg]} slide</h1>
                <p>Lorem ipsum dolor sit amet</p>
            </div>
            <button onClick={() => handleChangeImage("right")}>
                <FontAwesomeIcon icon={faChevronRight}/>
            </button>
        </div>
    )
}
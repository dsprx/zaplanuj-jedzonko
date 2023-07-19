import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle, faInfoCircle } from "@fortawesome/free-solid-svg-icons"

export default function InfoBlock({ type }) {
    const recipes = 1;
    let icon, text, bg;

    if(type === "info") {
        icon = faInfoCircle;
        text = "Liczba przepisów: " + recipes;
        bg = "#3498DB";
    } else {
        icon = faCheckCircle;
        text = "Świetnie że jesteś! Udanego planowania i smaczego!";
        bg = "#468966";
    }
    
    return (
        <div className="info-block" style={{backgroundColor: bg}}>
            <FontAwesomeIcon icon={icon}/>
            <p>{text}</p>
        </div>
    )
}
import AddButton from "./(components)/AddButton";
import Calendar from "./(components)/Calendar";
import InfoBlock from "./(components)/Info";

export default function App() {
    return (
        <>
            <div style={{display: "flex"}}>
                <div className="buttons">
                    <AddButton text="dodaj przepis"/>
                    <AddButton text="dodaj plan"/>
                </div>
                <div className="info">
                    <InfoBlock type="info"/>
                    <InfoBlock type="greeting"/>
                </div>
            </div>
            <div style={{padding: "0 15px"}}>
                <Calendar/>
            </div>
        </>
        
    )
}
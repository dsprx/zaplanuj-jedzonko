//TODO: wymyślić lepszą nazwę
import Button from "./Button";

import "@/(styles)/Something.css";

export default function Something() {

    return (
        <div className="something">
            <div className="container">
                <div className="something-text">
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p>consectetur adipisicing elit. Ab doloribus, odit. A aperiam ea fuga maxime quibusdam repellendus veritatis?</p>
                </div>
                <Button text="Lorem Ipsum"/>
            </div>
        </div>
    )
}
"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react"
import TableCard from "./TableCard";

import "../(styles)/Table.css";

export default function Table({ type }) {
    const [elements, setElements] = useState([{id: 1, name: "zupa", description: "to jest zupa", week: 1}, {id: 1, name: "zupa", description: "to jest zupa", week: 1}, {id: 1, name: "zupa", description: "to jest zupa", week: 1}, {id: 1, name: "zupa", description: "to jest zupa", week: 1}, {id: 1, name: "zupa", description: "to jest zupa", week: 1}, {id: 1, name: "zupa", description: "to jest zupa", week: 1}, {id: 1, name: "zupa", description: "to jest zupa", week: 1}, {id: 1, name: "zupa", description: "to jest zupa", week: 1}, {id: 1, name: "zupa", description: "to jest zupa", week: 1}, {id: 1, name: "zupa", description: "to jest zupa", week: 1}, {id: 1, name: "zupa", description: "to jest zupa", week: 1}]);

    return (
        <>
            <div className="header">
                <h1>LISTA PRZEPISÓW</h1>
                <FontAwesomeIcon icon={faPlusSquare} size="3x"/>
            </div>
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAZWA</th>
                            <th>OPIS</th>
                            {type === "plans" && <th>TYDZIEŃ</th>}
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {elements.map(el => <TableCard key={el.id} element={el} type={type}/>)}
                    </tbody>
                </table>
            </div>
        </>
    )
}
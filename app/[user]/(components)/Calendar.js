"use client"

import { useState } from "react"


export default function Calendar() {
    const [breakfasts, setBreakfasts] = useState([1, 2, 3, 4, 5, 6, 7]);

    return (
        <table className="calendar">
            <thead>
                <tr>
                    <th>PONIEDZIAŁEK</th>
                    <th>WTOREK</th>
                    <th>ŚRODA</th>
                    <th>CZWARTEK</th>
                    <th>PIĄTEK</th>
                    <th>SOBOTA</th>
                    <th>NIEDZIELA</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {breakfasts.map((meal, i) => <td key={i}>{meal}</td>)}
                </tr>
                <tr>
                    {breakfasts.map((meal, i) => <td key={i}>{meal}</td>)}
                </tr>
                <tr>
                    {breakfasts.map((meal, i) => <td key={i}>{meal}</td>)}
                </tr>
                <tr>
                    {breakfasts.map((meal, i) => <td key={i}>{meal}</td>)}
                </tr>
                <tr>
                    {breakfasts.map((meal, i) => <td key={i}>{meal}</td>)}
                </tr>
            </tbody>
        </table>
    )
}
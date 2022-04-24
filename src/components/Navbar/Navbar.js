import React from "react";
import {
    Link
} from "react-router-dom";

export default function Navbar() {
    return (
        <ul className="basis-1/5 bg-zinc-50">
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/">Today</Link>
            </li>
            <li>
                <Link to="/upcoming">Upcoming</Link>
            </li>
            <li>
                <Link to="/filtersandlabel">Filters And Label</Link>
            </li>
        </ul>        
    )
}
export function About(){
    return(
        <div>
            <h1>About</h1>
        </div>
    )
}
export function Today(){
    return(
        <div>
            <h1>Today</h1>
        </div>
    )
}
export function Upcoming(){
    return(
        <div>
            <h1>Upcoming</h1>
        </div>
    )
}
export function Filtersandlabel(){
    return(
        <div>
            <h1>Filters And Label</h1>
        </div>
    )
}

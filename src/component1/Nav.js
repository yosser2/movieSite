
import "./Nav.css"
import { Link } from "react-router-dom"
import React from 'react';


function Naav({movies}) {
    return (
        <>
    <div className="nav1">
    <h1>MOVIES</h1>

    <ul id="list">
    <Link id="home" to="/">HOME</Link>
    <Link id="about" to="/About">ABOUT</Link>
    <li> <input placeholder="Search..." type="text" onChange={(e)=>{movies(e.target.value)}}></input> </li>
    </ul>

    </div>

</>

    )
}

export default Naav

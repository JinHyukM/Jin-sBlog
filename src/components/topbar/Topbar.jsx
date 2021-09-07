
import React from 'react'
import { Link } from 'react-router-dom'
import "./topbar.css"


export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topLeft">
                <Link to="/">
                    <img src="/images/profileImg.jpg" alt="character img" className="characterImg"/>
                </Link>
            </div>
            <div className="topRight">
                <nav class="navbar navbar-expand-lg navbar-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto ">
                    <li class="nav-item">
                    <Link to="/project" style={{textDecoration:"none",color:"black"}}>
                        <span className="item">Projects</span>
                    </Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/experience" style={{textDecoration:"none",color:"black"}}>
                        <span className="item">Experience</span>
                    </Link>
                    </li>
                    <li class="nav-item">
                    <span className="item">Rate me</span>
                    </li>
                    </ul>
                </div>
                </nav>
            </div>
        </div>
    )
}

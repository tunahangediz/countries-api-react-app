import React from 'react'
import { Link, Router } from 'react-router-dom'


function Navbar() {
    return (




        <div className="navbar-collapse">


            <div className="navbar">
                <Link className="homeBtn" to="/"><h1>Where in the world?</h1></Link>
                <h4 style={{ display: "none" }}>Dark Mode</h4>

            </div>
        </div>

    )
}

export default Navbar

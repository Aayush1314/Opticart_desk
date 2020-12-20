import React from 'react'
import "../styles/navbar.css"
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
                <a className="navbar-brand" href="#">OPTICART</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="col-8" id="navbarTogglerDemo02">
                    <ul className=" nav-options navbar-nav mx-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Login</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Register</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
import React from 'react'
import CartWidget from './CartWidget'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="index.html">The Unnamed Art Gallery</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link" href="#">Collections</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link" href="#">Featured artists</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <CartWidget />
        </>

    )
}

export default Navbar
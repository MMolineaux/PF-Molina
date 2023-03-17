import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link to={'/'} className="navbar-brand">The Unnamed Art Gallery</Link>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav">
                            <li className="nav-item">

                                <Link to={'/'} className="nav-link nav-link active">Home </Link>

                            </li>
                            <li className="nav-item">

                                <Link to={'/ftArtists'} className="nav-link nav-link" >Featured Artists</Link>

                            </li>
                            <li class="nav-item dropdown">

                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </a>
                                
                                <ul className="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Sculptures</a></li>
                                    <li><a className="dropdown-item" href="#">Renaissance</a></li>
                                    <li><a className="dropdown-item" href="#">Portraits</a></li>
                                    <li><a className="dropdown-item" href="#">Oils</a></li>
                                    <li><a className="dropdown-item" href="#">Photography</a></li>
                                    <li><a className="dropdown-item" href="#">Surrealism</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <CartWidget />
                    
                </div>
            </nav>


        </>

    )
}

export default Navbar
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
                            <li className="nav-item dropdown">

                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </a>
                                
                                <ul className="dropdown-menu">
                                    <li><Link to ={'/category:Sculptures'} className="dropdown-item">Sculptures</Link></li>
                                    <li><Link to ={'/category:Renaissance'} className="dropdown-item">Renaissance</Link></li>
                                    <li><Link to ={'/category:Portaits'} className="dropdown-item">Portraits</Link></li>
                                    <li><Link to ={'/category:Oils'} className="dropdown-item">Oils</Link></li>
                                    <li><Link to ={'/category:Photography'} className="dropdown-item">Photography</Link></li>
                                    <li><Link to ={'/category:Surrealism'} className="dropdown-item">Surrealism</Link></li>
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
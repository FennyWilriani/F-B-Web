import React, { useState } from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Collapse from 'react-bootstrap/Collapse';


export default function Navbar() {
    const [open, setOpen] = useState(false);

  return (
    <div className="container d-flex flex-column flex-md-row">
        <nav className="navbar navbar-expand-md navbar-light d-flex flex-md-column">
            <a href="logo">
                <img src="../assets/logo.png" alt="logo" width="100" height="100" />
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle Navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <Collapse in={open}>
            <div className="collapse navbar-collapse w-100" id="navbarSupportedContent">
                <ul className="navbar-nav w-100 d-flex flex-md-column text-center text-md-end">
                    <li>
                        <a href="menu" className="nav-link" aria-current="page">MENU</a>
                    </li>
                    <li>
                        <a href="event" className="nav-link">EVENT</a>
                    </li>
                    <li>
                        <a href="gallery" className="nav-link">GALLERY</a>
                    </li>
                    <li>
                        <a href="contact" className="nav-link">CONTACT</a>
                    </li>
                </ul>
            </div>
            </Collapse>
            

        </nav>
        {/* <main className="ps-0 ps-md-5 flex-grow-1">
            <img src="../assets/hero-img.jpg" alt="logo" max-width="100%" height="100%"/>
        </main> */}
    </div>
  )
}

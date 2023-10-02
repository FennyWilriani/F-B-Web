import React, { useState } from 'react';
import '../Css/Navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';


export default function Navbar() {
    const [open, setOpen] = useState(false);

  return (
    <div className="container-fluid flex-column d-flex flex-md-row ">
        <nav className="navbar navbar-expand-md d-flex flex-md-column p-3">
            <a href="#logo">
                <img src="../assets/logo.png" alt="logo" width="120" height="auto" />
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
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav d-flex flex-md-column text-center">
                    <li>
                        <a href="#menu" className="nav-link fw-bold fs-5 mt-3 text-danger" aria-current="page">MENU</a>
                    </li>
                    <li>
                        <a href="#event" className="nav-link fw-bold fs-5 text-danger">EVENT</a>
                    </li>
                    <li>
                        <a href="#gallery" className="nav-link fw-bold fs-5 text-danger">GALLERY</a>
                    </li>
                    <li>
                        <a href="#contact" className="nav-link mb-3 fw-bold fs-5 text-danger">CONTACT</a>
                    </li>
                    <li>
                        <Button variant="warning" href="https://wa.me/6282219190684" className='btn-primary shadow m-5 fw-bold text-light'>ORDER ONLINE</Button>{' '}
                    </li>
                    <li>
                        <a href="https://www.instagram.com/pempeknayya50/">
                            <i className="bi bi-instagram heading h3"/>
                        </a>
                        <p className='text-danger'><br/>GARUT, JABAR 92154, INDONESIA<br/>(+62) 821 4492 5849</p>
                    </li>
                </ul>
            </div>
            </Collapse>
        </nav>
        <main className='ps-0 flex-grow-1'>
            <div
            className='masthead'>
            </div>
        </main>
    </div>
  )
}

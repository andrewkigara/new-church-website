import React from 'react';
import './Navbar.css';

export const Navbar = () => {

    return (
        <div class="mx-auto navvy">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/about" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            About Us
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="/about">Our Story</a>
                            <a class="dropdown-item" href="/about">Our Community</a>
                            <a class="dropdown-item" href="/about">Our Ministries</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/gallery">Gallery</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/events">Events</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contribute">Contribute</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

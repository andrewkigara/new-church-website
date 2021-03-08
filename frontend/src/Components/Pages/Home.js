import React from 'react';
import worshipHands from '../../assets/worshipHands.jpg';
import './Home.css';

export const Home = () => {
    return (
        <div className="">
            <div className="container jumbotron jumb0 jumbotron-fluid jumbotron-image rounded text-white shadow">
                <div className="container text-center">
                    <br/>
                    <br/>
                    <h1 class="display-1">Welcome Home</h1>
                    <p class="lead display-5">"My House shall be called a House of Worship for all nations"</p>
                    <br/>
                    <br/>
                </div>
            </div>

            <div class="card mb-3 container rounded shadow">
                <div class="row no-gutters">
                    <div class="col-md-4 my-2 ">
                        <img src={worshipHands} class="card-img rounded-2" alt="Worship"/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body text-center">
                        <h5 class="card-title h2">Join Our Services</h5>
                        <p class="card-text">Sunday Service | Every Sunday | 9:00AM EST</p>
                        <p class="card-text"><small class="text-muted"> href="/events" Learn more ...</small></p>
                        <hr/>
                        <p class="card-text">Join Our Upcoming Events</p>
                        <p class="card-text"><small class="text-muted">href="/events" Calendar</small></p>
                    </div>
                    </div>
                </div>
            </div>

            <div className="container jumbotron jumb2 jumbotron-fluid jumbotron-image rounded text-white shadow" >
                <div className="container text-center">
                    <br/>
                    <br/>
                    <h1 class="display-1">Our Mission</h1>
                    <p class="display-5">"My House shall be called a House of Worship for all nations"</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    )
}
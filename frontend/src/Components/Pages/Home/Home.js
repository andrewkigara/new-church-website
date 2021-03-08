import React from 'react';
import worshipHands from '../../../assets/worshipHands.jpg';
import './Home.css';
import ModalMission from './ModalMission';

export const Home = () => {
    return (
        <div className="mt-4">
            <div className="container jumbotron jumb0 jumbotron-fluid jumbotron-image text-white shadow">
                <div className="container text-center">
                    <br/>
                    <br/>
                    <h1 class="display-1">Welcome Home</h1>
                    <p class="lead display-5">"My House shall be called a House of Worship for all nations"</p>
                    <br/>
                    <br/>
                </div>
            </div>

            <div class="card card0 mb-3 container shadow">
                <div class="row no-gutters">
                    <div class="col-md-4 my-2 ">
                        <img src={worshipHands} class="card-img cardImg" alt="Worship"/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body text-center">
                        <h5 class="card-title h2">Join Our Services</h5>
                        <p class="card-text">Sunday Service | Every Sunday | 9:00AM EST</p>
                        <a href="/events"><p class="card-text"><small class="text-muted"> Learn more ...</small></p></a>
                        <hr/>
                        <p class="card-text">Join Our Upcoming Events</p>
                        <a href="/events"><p class="card-text"><small class="text-muted"> Calendar</small></p></a>
                    </div>
                    </div>
                </div>
            </div>

            
            <div className="container jumbotron jumb2 jumbotron-fluid jumbotron-image text-white shadow" >
                <div className="container text-center">
                    <br/>
                    <br/>
                    <h1 class="h1">Our Mission</h1>
                    <p class="display-5">"My House shall be called a House of Worship for all nations"</p>
                    <br />
                    <br />
                    <br />
                    <ModalMission />
                </div>
            </div>
        </div>
    )
}
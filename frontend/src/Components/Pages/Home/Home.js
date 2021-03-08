import React from 'react';
import worshipHands from '../../../assets/worshipHands.jpg';
import './Home.css';

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
                    <h1 class="display-1">Our Mission</h1>
                    <p class="display-5">"My House shall be called a House of Worship for all nations"</p>
                    <br />

                    <button type="button" class="btn btn-light" data-toggle="modal" data-target="#staticBackdrop">
                    View Mission
                    </button>

                    <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    
                    <div class="modal-dialog">
                        <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    </button>
                                </div>
                                <div class="modal-body container">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
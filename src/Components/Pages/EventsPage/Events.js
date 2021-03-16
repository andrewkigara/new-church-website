import React from 'react'
import './Events.css'
import congregation from '../../../assets/congregation.jpg';

export const Events = () => {
    return (
        <div className="container mx-auto mb-4">
            <div class="row evCard bg-light position-relative mt-4">
                <div class="col-md-6 mb-md-0 p-md-4">
                    <img src={congregation} class="w-100 evCard" alt="in-person congregation"/>
                </div>
                <div class="col-md-6 position-static p-4 pl-md-0">
                    <h3 class="mt-0 evTitle">Worship with us In-person &#38; Online</h3>
                    <p className="font-weight-lighter">Every Sunday at 11:00 AM</p>
                    <p>Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
                    <p>Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
                    <p>Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
                    <p>Join Us <a href="/" className="text-dark">here (map)</a></p>
                </div>
            </div>

            <div class="row evCard bg-light mt-4">
                <div class="col-6 my-4">
                    <h2 class="text-right evTitle">Join us for Bible Study</h2>
                    <p className="font-weight-lighter text-right">Every Sunday at 10:00 AM</p>
                    <p>Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
                    <p>Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
                    <p>Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
                    <p>Join Us <a href="/" className="text-dark">here (map)</a></p>
                </div>
                <div class="col-6">
                    <img src={congregation} class="w-100 my-4 evCard" alt="in-person congregation"/>
                </div>
            </div>

            {/* <div class="row evCard bg-light mt-4">

            </div> */}

        </div>
    )
}


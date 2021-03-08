import React from 'react';
import './Footer.css';
import { SiGmail,SiYoutube } from "react-icons/si";


export const Footer = () =>{
    return (
        <div className="foo footer container container-fluid">
            <div className="container text-center">
                <br/>
                <h3>Jesus Christ is The Answer Ministries</h3>
                <br/>
            </div>

            <div className="row container container-fluid">
                <div className="col ml-2">
                    <ul>
                        <a className="foolinks" href="/"><li>Home</li></a>
                        <a className="foolinks" href="/about"><li>About Us</li></a>
                    </ul>

                </div>
                <div className="col ml-2">
                    <ul>
                        <a className="foolinks" href="/events"><li>Events</li></a>
                        <a className="foolinks" href="/gallery"><li>Gallery</li></a>
                    </ul>

                </div>
                <div className="col ml-2">
                    <ul>
                        <a className="foolinks" href="/contact"><li>Contact Us</li></a>
                        <a className="foolinks" href="/contribute"><li>Contribute</li></a>
                    </ul>

                </div>
            </div>

            <hr />

            <div className="text-center justify-content-center">
                <a href="https://www.gmail.com/"><button type="button" className="btn btn-light"><SiGmail/></button></a>
                <a href="https://www.youtube.com/"><button type="button" className="btn btn-light"><SiYoutube/></button></a>

                <a className="addy" href="https://goo.gl/maps/7P9PzJHCkRun3u1D9"><p><small>7111 Liberty Road, Baltimore, MD, 21207</small></p></a>
            </div>

            <div className="font-monospace fs-6 text-center">
                <p><small>Copyright &#xA9; {(new Date().getFullYear())} Jesus Christ is the Answer Ministries - All Rights Reserved.</small></p>
            </div>
            <hr />
        </div>
    )
}
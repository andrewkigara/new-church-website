import React from 'react';
import './Footer.css';
import { SiGmail,SiYoutube } from "react-icons/si";


export const Footer = () =>{
    return (
        <div className="foo footer container container container-fluid mt-3">
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
                <a href="mailto:someone@yoursite.com?subject=Mail from JCA Ministries Website"><button type="button" className="btn btn-light"><SiGmail/></button></a>
                <a href="https://www.youtube.com/channel/UCRNl1ezd_Ew3IUQkwZ70zcw"><button type="button" className="btn btn-light"><SiYoutube/></button></a>

                <a className="addy" href="https://goo.gl/maps/18CJ9cEujVQrJibB6"><p><small>4512 Old Court Road, Pikesville, MD, 21208</small></p></a>
            </div>

            <div className="font-monospace fs-6 text-center">
                <p><small>Copyright &#xA9; {(new Date().getFullYear())} Jesus Christ is the Answer Ministries - All Rights Reserved.</small></p>
            </div>
            <hr />
        </div>
    )
}
import React from "react";
import './main.css';
import iphone15 from './iphone15.jpeg';
import gif from './giphy.gif';
import camera from './camea.jpg'
import { Link } from "react-router-dom";
export function Iphone() {
    
        
    
    return (
        <>
            <div className="header">
            <div class="container-fluid text-center">
                    <h1 class="m-3 p-3 text-warning">Welcome to I-Planet</h1>
                     <Link to={'/register'}><button className="btn btn-primary btn-block ms-3" id="reg" >Register</button></Link>
                    <Link to={'/login'}><button className="btn btn-secondary btn-block ms-3">Login</button></Link>
                    <Link to={'/adminlogin'}><button className="btn btn-secondary btn-block ms-3">Admin</button></Link>
        <div class="container text-white" >
            <div class="row justify-content-center align-items-center mb-3">
                <div class="col-lg-6">
                    <p><strong>iPhone 15 lineup is packed with subtle design changes</strong><br />The new Pro models' design also features contoured edges and a customizable Action button, which gives the ring/silence button additional controls, from starting a voice memo to writing a note</p>
                </div>
                <div class="col-lg-6">
                    <img src={iphone15} alt="sample iphone-15 image" class="img-fluid" />
                </div>
            </div>
            <div class="row justify-content-center align-items-center mb-3">
                <div class="col-lg-6">
                    <p>The phone comes with a 60 Hz refresh rate 6.10-inch touchscreen display offering a resolution of 1179x2556 pixels at a pixel density of 460 pixels per inch (ppi). Apple iPhone 15 is powered by a hexa-core Apple A16 Bionic processor. It comes with 8GB of RAM.</p>
                </div>
                <div class="col-lg-6">
                    <img src={gif} alt="sample video" class="img-fluid" />
                </div>
            </div>
            <div class="row justify-content-center align-items-center mb-3">
                <div class="col-lg-6">
                    <p>As far as the cameras are concerned, the Apple iPhone 15 on the rear packs a dual camera setup featuring a 48-megapixel (f/1.6) primary camera, and a 12-megapixel (f/2.4) camera. It has a single front camera setup for selfies, featuring a 12-megapixel sensor with an f/1.9 aperture.</p>
                </div>
                <div class="col-lg-6">
                    <img src={camera} alt="sample video" class="img-fluid" />
                </div>
            </div>
        </div>
                </div>
                </div>
        </>
    );
}

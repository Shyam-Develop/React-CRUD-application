import React from "react";
import red from './download.jpeg';
import './details.css';
import { Link } from "react-router-dom";

export function Blue() {
    return (
        <>
            <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={red} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title text-white">IPHONE 15</h5>
        <p class="card-text text-white"><strong>Bluetooth, Wi-Fi, NFC, GPS, and Ultra Wideband</strong>
<br/>The new Ultra Wideband chip provides improved spatial awareness, allowing iPhone 15 models to more precisely locate other Apple devices with an Ultra Wideband chip. The chip allows two iPhones to connect to each other at three times the range as before.</p>
        <h3 className="text-white">Camera</h3>
        <p class="card-text text-white">The 5x (120mm equivalent) telephoto camera found only on the iPhone 15 Pro Max has a 12MP sensor that outputs 12MP images. You won't be surprised to learn that if you want the most resolution with the highest image quality, the iPhone 15 Pro and iPhone 15 Pro Max are the models to choose.</p>
        <h3 className="text-white">RAM</h3>  
        <p className="text-white">Meanwhile, the files reveal that the iPhone 15 and iPhone 15 Plus models feature 6GB of RAM. This means that the iPhone 15 Pro and iPhone 15 Pro Max are equipped with an additional 2GB of memory compared to their predecessors.</p>
         <table class="table">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Ram</th>
      <th scope="col">Storage</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>6GB</td>
      <td>64GB</td>
      <td>$1,10,000</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>8GB</td>
      <td>128GB</td>
      <td>$1,25,000</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>12GB</td>
      <td>258GB</td>
      <td>$1,35,000</td>
    </tr>
  </tbody>
</table>                   
    </div>
    </div>
          </div>
          <Link to={'/book'}><button className="btn btn-primary">Book Now</button></Link>
        </div>
        
        </>
    );
} 
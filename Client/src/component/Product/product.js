import React from "react";
import red from './red.jpg';
import white from './white.jpeg';
import green from './green.jpg';
import blue from './download.jpeg';
import black from './blacked.jpeg';
import './product.css';
import { Link } from "react-router-dom";

export function Product() {
    return(
        <>
            <div className="product">
            <div className="container m-3 p-3">
             
  <div class="row p-3">
    <div class="col-lg-4">
                        <img src={red } class="img-fluid rounded-start" alt="red color iphone"/>
    </div>
    <div class="col-lg-4">
      <div class="card-body">
        <h5 class="card-title">IPHONE 15</h5>
        <p class="card-text">Newphoria. Dynamic Island. 48MP Main camera with 2x Telephoto. Buy now. Designed to make a difference. Get to know iPhone 15. A16 Bionic chip. USB-C. New 48MP camera. 2x Telephoto. iOS 17. All-day battery life. </p>
        <Link to={'/detail1'}><button className="btn m-5 btn-dark">View Details</button></Link>
        
      </div>
    </div>
  </div>
            </div>
              <div class="row p-3 ">
    <div class="col-lg-4">
                        <img src={green } class="img-fluid rounded-start" alt="red color iphone"/>
    </div>
    <div class="col-lg-4">
      <div class="card-body">
        <h5 class="card-title">IPHONE 15</h5>
        <p class="card-text">Newphoria. Dynamic Island. 48MP Main camera with 2x Telephoto. Buy now. Designed to make a difference. Get to know iPhone 15. A16 Bionic chip. USB-C. New 48MP camera. 2x Telephoto. iOS 17. All-day battery life.</p>
        <Link to={'/detail2'}><button className="btn m-5 btn-dark">View Details</button></Link>
        
      </div>
    </div>
  </div>

  <div class="row p-3">
    <div class="col-lg-4">
                        <img src={black } class="img-fluid rounded-start" alt="red color iphone"/>
    </div>
    <div class="col-lg-4">
      <div class="card-body">
        <h5 class="card-title">IPHONE 15</h5>
        <p class="card-text">Newphoria. Dynamic Island. 48MP Main camera with 2x Telephoto. Buy now. Designed to make a difference. Get to know iPhone 15. A16 Bionic chip. USB-C. New 48MP camera. 2x Telephoto. iOS 17. All-day battery life.</p>
        <Link to={'/detail4'}><button className="btn m-5 btn-dark">View Details</button></Link>
        
      </div>
    </div>
  </div>

  <div class="row p-3">
    <div class="col-lg-4">
                        <img src={blue } class="img-fluid rounded-start" alt="red color iphone"/>
    </div>
    <div class="col-lg-4">
      <div class="card-body">
        <h5 class="card-title">IPHONE 15</h5>
        <p class="card-text">Newphoria. Dynamic Island. 48MP Main camera with 2x Telephoto. Buy now. Designed to make a difference. Get to know iPhone 15. A16 Bionic chip. USB-C. New 48MP camera. 2x Telephoto. iOS 17. All-day battery life.</p>
       <Link to={'/detail3'}><button className="btn m-5 btn-dark">View Details</button></Link>
        
      </div>
    </div>
            </div>
              <div class="row p-3">
    <div class="col-lg-4">
                        <img src={white } class="img-fluid rounded-start" alt="red color iphone"/>
    </div>
    <div class="col-lg-4">
      <div class="card-body">
        <h5 class="card-title">IPHONE 15</h5>
        <p class="card-text">Newphoria. Dynamic Island. 48MP Main camera with 2x Telephoto. Buy now. Designed to make a difference. Get to know iPhone 15. A16 Bionic chip. USB-C. New 48MP camera. 2x Telephoto. iOS 17. All-day battery life.</p>
        <Link to={'/detail5'}><button className="btn  btn-dark m-5">View Details</button></Link>
        
      </div>
    </div>
                </div>
               
</div>

        </>
    );
}
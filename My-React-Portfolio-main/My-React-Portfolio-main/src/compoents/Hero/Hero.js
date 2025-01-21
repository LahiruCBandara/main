import React from 'react';
import MeImage from '../../img/Me.png';

export default function Hero() {
  return (
    <div id='home'>
    <div className="bg-dark text-white"> 
      <div className="container px-5">
        <div className="row gx-5 align-items-center justify-content-center">
          <div className="col-lg-8 col-xl-7 col-xxl-6">
            <div className="my-5 text-center text-xl-start">
              <h1 className="display-5 fw-bolder mb-2">Welcome to My Portfolio</h1>
              <p className="lead fw-normal mb-4">Hi I am are Full stack developer  </p>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                <a className="btn btn-primary btn-lg px-4 me-sm-3" href="https://wa.me/+94756946586?text=Hi%20Lahiru,%20I%20am%20interested%20in%20your%20portfolio!" id='cm' >Contact me</a>
                <a className="btn btn-outline-light btn-lg px-4" href="#!">Learn More</a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-xl-5 col-xxl-6 text-center">
          <img className="img-fluid thumbnail  my-5 w-0" src={MeImage} alt="Profile of Lahiru Bandara" />

          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

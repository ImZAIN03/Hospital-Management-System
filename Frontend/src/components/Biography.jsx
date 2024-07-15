import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <h1>Biography</h1>
          <h2>Who We Are</h2>
          <p>
          HMS Medical Institute provides exceptional medical services, cutting-edge
          research, and comprehensive education. With skilled professionals and 
          state-of-the-art facilities, it aims to advance medical knowledge and improve
          patient outcomes through innovative treatments and compassionate care.
          </p>
          <h6>Started In 2023 ...</h6>
          <h4>We are keen on providing the best services to our patients.</h4>
          <p>
          HMS Medical Institute trains future healthcare professionals through residency,
          fellowship, and continuing education, integrating research, education, and
          patient care to meet community needs and set new medical standards.
          </p>
          <p>Dedicated to advancing medical knowledge 
          through innovative treatments and compassionate care.</p>
          <h6>Your Health, Our Priority!</h6>
        </div>
      </div>
    </>
  );
};

export default Biography;
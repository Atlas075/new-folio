import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p id='about-text'>
        Hi Donnie here. <br></br>
        Over the past 6 months I have found myself starting to blossom into a competent  full stack web developer. 
        I'm no stranger to hard work and dedication. I enjoy a more personalized touch when it comes to business.
        </p>
      </div>
    </section>
  );
}

export default About;

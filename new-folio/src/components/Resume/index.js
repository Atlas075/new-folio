import React, { Component } from 'react';

function Resume() {
  return (
    <section className="my-5">
      <h1 id="resume">My Resume</h1>
      <div className="my-2">
        <a href='Donovans Resume.pdf' 
        download={'Donovans Resume.pdf'}>
          <button>Download Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Resume;

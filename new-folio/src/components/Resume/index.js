import React, { Component } from 'react';

function Resume() {
  return (
    <section className="my-5">
      <h1 id="resume">My Resume</h1>
      <div className="my-2">
        <a href='Donnies Resume.pdf' 
        download={'Donnies Resume.pdf'}>
          <button>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Resume;

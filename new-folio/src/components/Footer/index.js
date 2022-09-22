import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Footer(props) {

    return (
      <footer className="flex-row px-1">
        <h2>
          <a data-testid="link" href="/">
            <span role="img" aria-label="camera">Valhalla</span>
          </a>
        </h2>
        <section>
            <a href="https://github.com/Atlas075">GitHub</a>
            <span></span>

        </section>
        <section>
        
            <span></span>
            <a href="https://www.linkedin.com/in/donnie-massenburg-387156198/">linkedin</a>
        </section>
        <section>
        
            <span></span>
            <a href="https://stackoverflow.com/users/18508286/atlas075">stackoverflow</a>
        </section>
      </footer>
    );
  }
  
  export default Footer;
  
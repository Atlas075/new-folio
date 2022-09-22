import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    // works = [],
    // setCurrentCategory,
    // contactSelected,
    currentCategory,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"></span>Valhalla
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="work" href="#work" onClick={() => setContactSelected(false)}>
              Work
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="resume" href="#resume" onClick={() => setContactSelected(false)}>
              Resume
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="contact-form" href="#contact-form" onClick={() => setContactSelected(false)}>
              Contact
            </a>
          </li>
       
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

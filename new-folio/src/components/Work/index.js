import React from "react";
import WorkList from "../WorkList";
import pregame from '../../assets/small/pregame.png'
import insomnia from '../../assets/small/insomnia.png'
import runBudddy from '../../assets/small/RunBuddy.png'
import funQuiz from '../../assets/small/funQuiz.png'
import weatherApp from '../../assets/small/weatherApp.png'
import notesGalor from '../../assets/small/notesGalor.png'
import { capitalizeFirstLetter } from "../../utils/helpers";

function Work(props) {
  const { currentCategory } = props;
  return (
    <section >

      <h1 id="work">My Work</h1>

      <section id="work-section">

       <div className="works"> 
        <section>
          <img src={pregame}/>
        </section>
        <section>
          <h3>PreGame</h3>
        <a href="https://github.com/gilinamcbride/pregame">GitHib</a>
        <a href="https://gilinamcbride.github.io/pregame/">Deployed Site</a>
        </section>
      </div>
      
      <div className="works"> 
        <section>
          <img src={insomnia} />
        </section>
        <section>
         <h3>Insomnia</h3>
        </section>
        <section>
        <a href="https://github.com/olivelliott/project-2-band-site">GitHib</a>
        <a href="https://band-site-22.herokuapp.com/">Deployed Site</a>
        </section>
      </div>

      <div className="works"> 
        <section>
          <img src={runBudddy} />
        </section>
        <section>
         <h3>Run Buddy</h3>
        </section>
        <section>
        <a href="https://github.com/Atlas075/run-buddy">GitHib</a>
        <a href="https://atlas075.github.io/run-buddy/">Deployed Site</a>
        </section>
      </div>

      <div className="works"> 
        <section>
          <img src={notesGalor} />
        </section>
        <section>
         <h3>Notes Galor</h3>
        </section>
        <section>
        <a href="https://github.com/Atlas075/-notes-galor">GitHib</a>
        <a href="https://serene-brook-58627.herokuapp.com/notes.html">Deployed Site</a>
        </section>
      </div>

      <div className="works"> 
        <section>
          <img src={funQuiz} />
        </section>
        <section>
         <h3>Fun Quiz</h3>
        </section>
        <section>
        <a href="https://github.com/Atlas075/fun-quiz">GitHib</a>
        <a href="https://atlas075.github.io/fun-quiz/">Deployed Site</a>
        </section>
      </div>

      <div className="works"> 
        <section>
          <img src={weatherApp} />
        </section>
        <section>
         <h3>Weather App</h3>
        </section>
        <section>
        <a href="https://github.com/Atlas075/Weather-App">GitHib</a>
        <a href="https://atlas075.github.io/Weather-App/">Deployed Site</a>
        </section>
      </div>

      <div className="works"> 
        <section>
          <img src="" />
        </section>
        <section>
         <h3>CartrdgeStop</h3>
        </section>
        <section>
        <a href="https://rocky-hollows-57857.herokuapp.com/">GitHib</a>
        <a href="">Deployed Site</a>
        </section>
      </div>

      </section>
     

    </section>
  );
}
export default Work;

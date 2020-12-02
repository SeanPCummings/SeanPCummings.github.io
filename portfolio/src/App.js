import logo from './logo.svg';
import './style.css';
import Profile from './assets/SeanCummingsLinkIn.jpg';
import git from './assets/github.png';
import but from './assets/buttonClick.png';
import fish from './assets/fishCatcher.png';
import kit from './assets/kitInvade.png';
import rain from './assets/OpenWeatherPic.png';
import toDo from './assets/dayPlanner.jpeg';
import favorite from './assets/DinnerDiceLogo.png';
import pump from './assets/pixelPatchScShot.png';

function App() {
  return (
    <div className="App">
      <nav>
        <header>
        <h1>
            Sean Cummings
        </h1>
        </header>
            <aside>
              <ul>
                  <li class="nav-item">
                      <a href="index.html">Home</a>
                  </li>
                  <li class="nav-item">
                      <a href="portfolio.html">Portfolio</a>
                  </li>
                  <li class="nav-item">
                      <a href="contact.html">Contact</a>
                  </li>
              </ul>
            </aside>
    </nav>
    
  <main>
    <section class="row">
        <div class ="column">
            <img src={Profile} class="photo"/>
        </div>
        <div class ="column">
        <article class="block">
          <h2 class="block-header">About Me</h2>
          <hr />
          <p>I was born in Newburgh, New York, and have recently moved down to Chapel Hill, North Carolina. 
              I graduated from SUNY Brockport in May of 2020 and started the UNC Coding Bootcamp in June of 2020. 
              I believe programming is one of the unique skills that can be applied to almost anything and can be learned by anyone.
          </p>
          <br />       
        </article>
      </div>
    </section>
  </main>
  <main class="container">
   
      
        <article class="block">
          <h2 class="block-header">Portfolio</h2>
          <hr/>

          <div class="card" id = "leftCard">
            <img src={git} class="card-img-top" alt="LinkedIn"/>
            <div class="card-body">
              <h5 class="card-title">GitHub</h5>
              <p class="card-text">My Github account called SeanPCummings </p>
              <a href="https://github.com/SeanPCummings" class="btn btn-primary">Check it out!</a>
            </div>
          </div>

          <div class="card" id = "rightCard">
            <img src={but} class="card-img-top" alt="Galatic Bell Clicker"/>
            <div class="card-body">
              <h5 class="card-title">Button Clicker</h5>
              <p class="card-text">My first game made on Scratch. A simple clicker game to change the value of a counter. </p>
              <a href="https://scratch.mit.edu/projects/405345083/" class="btn btn-primary">Check it out!</a>
            </div>
          </div>
        
          
          <div class="card" id ="leftCard">
            <img src={fish} class="card-img-top" alt="Hungry Fuzzy"/>
            <div class="card-body">
              <h5 class="card-title">Get the Fish</h5>
              <p class="card-text">My second game made on Scratch. Chase the different fish and fill up Fuzzy the cat's tummy! </p>
              <a href="https://scratch.mit.edu/projects/405354174/" class="btn btn-primary">Check it out!</a>
            </div>
          </div>
          <div class="card" id ="rightCard">
            <img src={kit} class="card-img-top" alt="Not a rip off"/>
            <div class="card-body">
              <h5 class="card-title">Kitty Invader</h5>
              <p class="card-text">A work in progess but its such a good game that you can't lose! </p>
              <a href="https://scratch.mit.edu/projects/405373993/" class="btn btn-primary">Check it out!</a>
            </div>
          </div>

          <div class="card" id ="leftCard">
            <img src={rain} class="card-img-top" alt="OpenWeatherAPI"/>
            <div class="card-body">
              <h5 class="card-title">WeatherApp</h5>
              <p class="card-text"> A weather app made possible through OpenWeatherAPI, can search for cities and display complex weather data </p>
              <a href="https://seanpcummings.github.io/WeatherApp/index.html" class="btn btn-primary">Check it out!</a>
            </div>
          </div>
          <div class="card" id ="rightCard">
            <img src={toDo} class="card-img-top" alt="Day Planner"/>
            <div class="card-body">
              <h5 class="card-title">Day Planner</h5>
              <p class="card-text"> 9am to 5pm Planner. Input your expected activites and they will still be saved after refresh or close. </p>
              <a href="https://seanpcummings.github.io/DayPlanner/index.html" class="btn btn-primary">Check it out!</a>
            </div>
          </div>

          <div class="card" id ="leftCard">
            <img src={favorite} class="card-img-top" alt="Day Planner"/>
            <div class="card-body">
              <h5 class="card-title"> Dinner Dice App</h5>
              <p class="card-text"> My first Team Project at UNC. A meal and cocktail randomizer using APIs, I wrote most of the JavaScript. </p>
              <a href="https://victoriagfield.github.io/Dinner_Dice/index.html" class="btn btn-primary">Check it out!</a>
            </div>
          </div>

          <div class="card" id ="rightCard">
            <img src={pump} class="card-img-top" alt="Pumpkin Patch"/>
            <div class="card-body">
              <h5 class="card-title"> Pixel Patch</h5>
              <p class="card-text"> My Second Team Project with UNC. A halloween treat used to create stencils to crave pumpkins with. We were able to maintain a log in system and save the pumpkin designs to the user logged in. </p>
              <a href="https://project-2-team6.herokuapp.com/" class="btn btn-primary">Check it out!</a>
            </div>
          </div>

        </article>
  </main>
 

  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
</div>
  );
}

export default App;

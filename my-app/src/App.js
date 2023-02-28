import "./App.css";
import ironHackLogo from "./images/ironhackLogo.png";
import menuIcon from "./images/menuIcon.png";

import codeFileIcon from "./images/codeFile.png";
import editIcon from "./images/edit.png";
import settingIcon from "./images/setttings.png";
import settingIcon2 from "./images/settign2.png";

function App() {
  return (
    <div className="App">
      <header id="header">
        <nav id="nav">
          <div className="img-container">
            <img src={ironHackLogo} alt="" />
          </div>
          <div className="img-container">
            <img src={menuIcon} alt="" />
          </div>
        </nav>

        <section id="introduction">
          <h1>Say hello to ReactJS</h1>
          <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
          <button>Awesone!</button>
        </section>
      </header>

      <section className="card-container">
        <div className="card">
          <div>
            <img className="img-container" src={settingIcon} alt="" />
          </div>
          <h3>Declarative</h3>
          <p>React makes it paintless to create interactive UIs</p>
        </div>
        <div className="card">
          <div className="img-container">
            <img src={editIcon} alt="" />
          </div>
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state</p>
        </div>
        <div className="card">
          <div className="img-container">
            <img src={settingIcon2} alt="" />
          </div>
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's</p>
        </div>
        <div className="card">
          <div className="img-container">
            <img src={codeFileIcon} alt="" />
          </div>
          <h3>JSX</h3>
          <p>Statically-typed designed to run on modern browsers.</p>
        </div>
      </section>
    </div>
  );
}

export default App;

import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "Samah SAIDI",
        bio: "Ingénieure logicielle spécialisée en React, passionnée par la résolution de problèmes complexes.",
        imgSrc: "https://randomuser.me/api/portraits/women/65.jpg", // photo pro
        profession: "Développeuse Software",
      },
      shows: false,
      elapsedSeconds: 0,
    };

    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        elapsedSeconds: prevState.elapsedSeconds + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { Person, shows, elapsedSeconds } = this.state;

    return (
      <div className="App">
        <button className="toggle-button" onClick={this.toggleShow}>
          {shows ? "Cacher le profil" : "Afficher le profil"}
        </button>

        {shows && (
          <div className="profile-card">
            <img src={Person.imgSrc} alt="Profil" />
            <h2>{Person.fullName}</h2>
            <p><b>Bio :</b> {Person.bio}</p>
            <p><b>Profession :</b> {Person.profession}</p>
          </div>
        )}

        <div className="timer">
          Temps écoulé depuis le montage : {elapsedSeconds} secondes
        </div>
      </div>
    );
  }
}

export default App;

import React from "react";
import NavBar from "./components/Navigation";
import PlayerCard from "./components/PlayerCard";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    players: []
  };

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(player => {
        this.setState({
          players: [player.data]
        });
        console.log(player.data);
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <PlayerCard />
      </div>
    );
  }
}

export default App;

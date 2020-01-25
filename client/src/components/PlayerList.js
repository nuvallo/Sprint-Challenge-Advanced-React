import React from "react";
import PlayerCard from "./PlayerCard";

function PlayerList({ players }) {
  return (
    <div>
      {players.map(player => (
        <PlayerCard name={player.name} />
      ))}
    </div>
  );
}

export default PlayerList;

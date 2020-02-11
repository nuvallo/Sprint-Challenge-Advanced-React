import React from "react";
import { Card, CardTitle } from "reactstrap";

function PlayerCard({ name }) {
  return (
    <div>
      <Card className="card">
        <CardTitle>
          <h1>Name: {name}</h1>
        </CardTitle>
      </Card>
    </div>
  );
}

export default PlayerCard;

import React from "react";
import { Card, CardTitle } from "reactstrap";

class PlayerCard extends React.Component {
  render() {
    return (
      <div>
        <Card className="card">
          <CardTitle>
            <strong>Player</strong>
          </CardTitle>
        </Card>
      </div>
    );
  }
}

export default PlayerCard;

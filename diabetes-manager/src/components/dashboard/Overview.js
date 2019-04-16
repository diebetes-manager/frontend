import React from "react";
import { Line, Pie } from "react-chartjs-2";

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: ["Diet", "Exercise", "Blood sugar management"],
        datasets: [
          {
            label: "Blood Sugar Levels",
            data: [33, 33, 33],
            fill: true, // Don't fill area under the line
            borderColor: "#2592F2" // Line color
          }
        ]
      }
    };
  }
  render() {
    return (
      <div>
        <h1>overview</h1>
        <Pie height={300} data={this.state.data} options={{}} />
      </div>
    );
  }
}
export default Overview;

import React, { Component } from "react";
import { Line, Pie } from "react-chartjs-2";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: [
          "10/04/2018",
          "10/05/2018",
          "10/06/2018",
          "10/07/2018",
          "10/08/2018",
          "10/09/2018",
          "10/10/2018",
          "10/11/2018",
          "10/12/2018",
          "10/13/2018",
          "10/14/2018",
          "10/15/2018"
        ],
        datasets: [
          {
            label: "Temperature",
            data: [22, 19, 27, 23, 22, 24, 17, 25, 23, 24, 20, 19],
            fill: false, // Don't fill area under the line
            borderColor: "red" // Line color
          }
        ]
      }
    };
  }
  render() {
    return (
      <div>
        <div className="App">
          <h1>Dashboard</h1>
          <Line
            data={this.state.data}
            options={{
              title: {
                display: true,
                text: "bar graph",
                fontSize: 25
              },
              legend: {
                display: true,
                position: "right"
              }
            }}
          />
          <Pie data={this.state.data} options={{}} />
        </div>
      </div>
    );
  }
}

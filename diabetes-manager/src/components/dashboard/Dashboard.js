import React, { Component } from "react";
import Media from "react-media";
import { Line, Pie } from "react-chartjs-2";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: [
          "7:30 AM",
          "8:00 AM",
          "8:30 AM",
          "9:00 AM",
          "9:30 AM",
          "10:00 AM",
          "10:30 AM",
          "11:00 AM",
          "11:30 AM",
          "12:00 PM",
          "12:30 PM",
          "1:00 PM"
        ],
        datasets: [
          {
            label: "Blood Sugar Levels",
            data: [98, 104, 95, 130, 116, 108, 110, 87, 98, 101, 92, 89],
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
        <h1>Dashboard</h1>
        <div className="App desktop">
          <Media query="(max-width: 599px)">
            {matches =>
              matches ? (
                <Line height={300} data={this.state.data} options={{}} />
              ) : (
                <Line
                  width={500}
                  height={300}
                  data={this.state.data}
                  options={{}}
                />
              )
            }
          </Media>

          <div>
            <h2>Messages</h2>
            <div className="box">
              <li>eat</li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

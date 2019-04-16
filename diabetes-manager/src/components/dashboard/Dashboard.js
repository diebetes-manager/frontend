import React, { Component } from "react";
import { connect } from "react-redux";
import Media from "react-media";
import { Line, Pie } from "react-chartjs-2";

import { getData } from "../../actions";

class Dashboard extends Component {
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
          },
          {
            label: "Something else",
            data: [7, 4, 7, 7, 54, 87, 46, 87, 7, 7, 7, 9],
            fill: false, // Don't fill area under the line
            borderColor: "#2592F2" // Line color
          }
        ]
      }
    };
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    console.log(this.props.data);
    return (
      <div>
        <h1 className="header">Dashboard</h1>
        <div className="App desktop">
          <Media query="(max-width: 599px)">
            {matches =>
              matches ? (
                <Line
                  height={300}
                  data={this.state.data}
                  options={{ maintainAspectRatio: true }}
                />
              ) : (
                <Line
                  width={500}
                  height={300}
                  data={this.state.data}
                  options={{ maintainAspectRatio: false }}
                />
              )
            }
          </Media>

          <div className="side-panel">
            <h2>Current Status</h2>
            <div className="box">
              <p>data goes here</p>
            </div>

            <div className="box">
              <h2>Messages</h2>
              <li>eat</li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.dashboardReducers.sugarLevels
});

export default connect(
  mapStateToProps,
  { getData }
)(Dashboard);

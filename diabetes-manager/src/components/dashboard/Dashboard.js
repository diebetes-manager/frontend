import React, { Component } from "react";
import { connect } from "react-redux";
import Media from "react-media";
import { Line } from "react-chartjs-2";
import { getData } from "../../actions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getData();
  }

  constructor(props) {
    super(props);

    this.state = {
      data: {
        labels: this.props.times,
        datasets: [
          {
            label: "Blood Sugar Levels",
            data: this.props.data,
            fill: true, // Don't fill area under the line
            borderColor: "#2592F2" // Line color
          }
        ]
      }
    };
  }

  render() {
    console.log(this.props.data);
    console.log(this.props.times);
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
                >
                  <p>prediction</p>
                </Line>
              ) : (
                <Line
                  width={500}
                  height={300}
                  data={this.state.data}
                  options={{ maintainAspectRatio: false }}
                >
                  <p>prediction</p>
                </Line>
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
  data: state.dashboardReducers.bloodSugarLevels,
  times: state.dashboardReducers.times,
  overallSugarLevels: state.dashboardReducers.overallSugarLevels
});

export default connect(
  mapStateToProps,
  { getData }
)(Dashboard);

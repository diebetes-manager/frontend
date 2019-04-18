import React, { Component } from "react";
import { connect } from "react-redux";
import Media from "react-media";
import { Line } from "react-chartjs-2";
import { getData } from "../../actions";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        labels: [],
        datasets: [
          {
            label: "Blood Sugar Levels",
            data: this.props.data,
            fill: true, // Don't fill area under the line
            borderColor: "#2592F2", // Line color
            backgroundColor: "#2592F2"
          }
        ]
      }
    };
  }

  componentDidMount() {
    const { id } = this.props.user;
    this.props.getData(id);

    this.sortedDate();
    const dataLength = this.state.data.datasets[0].data.length;
    const data = this.state.data.datasets[0].data.slice(
      dataLength - 8,
      dataLength
    );

    this.setState({
      data: {
        labels: data.map(data => data.timestamp),
        datasets: [
          {
            data: data.map(data => data.value)
          }
        ]
      }
    });
  }

  sortedDate = () => {
    this.state.data.datasets[0].data.sort(function(a, b) {
      const unxTimeStampA = Date.parse(a.timestamp);
      const unxTimeStampB = Date.parse(b.timestamp);

      if (unxTimeStampA < unxTimeStampB) {
        return -1;
      }
      if (unxTimeStampA > unxTimeStampB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
  };

  render() {
    const { prediction } = this.props.prediction;

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
                  options={{
                    maintainAspectRatio: true,
                    borderColor: "#2592F2"
                  }}
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
              <p>Prediction: {prediction}</p>
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
  data: state.dashboardReducers.allData,
  bloodSugarLevels: state.dashboardReducers.bloodSugarLevels,
  times: state.dashboardReducers.times,
  overallSugarLevels: state.dashboardReducers.overallSugarLevels,
  user: state.dashboardReducers.userInfo,
  prediction: state.dashboardReducers.prediction
});

export default connect(
  mapStateToProps,
  { getData }
)(Dashboard);

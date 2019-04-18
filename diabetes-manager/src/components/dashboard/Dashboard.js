import React, { Component } from "react";
import { connect } from "react-redux";
import Media from "react-media";
import { Line } from "react-chartjs-2";
import { getData } from "../../actions";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      OKToRender: false,
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
    // console.log(this.props);
    const { id } = this.props.user;
    this.props.getData(id);

    // console.log(this.props);
  }

  componentDidUpdate(prevProps) {
    if (this.props.fetchingData !== prevProps.fetchingData) {
      if (!this.props.fetchingData) {
        // this.sortedDate();

        const dataLength = this.props.data.length;
        const sortedData = this.sortedDate(this.props.data);
        const data = sortedData.slice(dataLength - 8, dataLength);
        //this.state.data.datasets[0].data
        this.setState({
          OKToRender: true,
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
    }
  }

  sortedDate = dataToBeSorted => {
    dataToBeSorted.sort(function(a, b) {
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

    return dataToBeSorted;
  };

  render() {
    console.log(this.props);
    const { prediction } = this.props.prediction;
    if (!this.state.OKToRender) return <h1> Loading...</h1>;
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
  fetchingData: state.dashboardReducers.fetchingData,
  data: state.dashboardReducers.allData,
  times: state.dashboardReducers.times,
  user: state.dashboardReducers.userInfo,
  prediction: state.dashboardReducers.prediction
});

export default connect(
  mapStateToProps,
  { getData }
)(Dashboard);

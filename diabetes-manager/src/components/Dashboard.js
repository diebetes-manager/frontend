import React, { Component } from "react";
import { connect } from "react-redux";
import Media from "react-media";
import { Line } from "react-chartjs-2";
import { getData } from "../state/actions/index.js";



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
            borderColor: "#71CB2E", // Line color
            backgroundColor: "#2592F2"
          }
        ]
      }
    };
  }

  componentDidMount() {
    const { id } = this.props.user;
    this.props.getData(id);
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
      return 0;
    });

    return dataToBeSorted;
  };

  render() {
    if (!this.state.OKToRender) return <h1> Loading...</h1>;
    return (
      <>
        <section className="App desktop">
        <h1 className="header">Dashboard</h1>
          <div className='chart-container'> 
            <Media query="(max-width: 599px)">
              {matches =>
                matches ? (
                  <Line
                    // height={100}
                    data={this.state.data}
                    options={{
                      maintainAspectRatio: true,
                      responsive:true,
                      borderColor: "#2592F2"
                    }}
                  >
                  </Line>
                ) : (
                  <Line
                    width={500}
                    height={300}
                    data={this.state.data}
                    options={{ 
                      maintainAspectRatio: true,
                      responsive:true,
                    }}
                  >
                  </Line>
                )
              }
            </Media>
          </div>
          <section className="side-panel">
            
            <h4>Current Status</h4>
            <div className="box"></div>
            
            <h4>Messages</h4>
            <div className="box"></div>

          </section>
        </section>
      </>
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


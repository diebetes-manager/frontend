import React, { PureComponent } from "react";
import { connect } from "react-redux";
// import Media from "react-media";
// import { Line } from "react-chartjs-2";
import { getData } from "../state/actions/index.js";
import Loader from 'react-loader-spinner'; 
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import moment from 'moment';


class Dashboard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      OKToRender: false,
      // data: {
      //   labels: [],
      //   datasets: [
      //     {
      //       label: "Blood Sugar Levels",
      //       data: this.props.allData,
      //       fill: true, // Don't fill area under the line
      //       borderColor: "#53616F", // Line color
      //       backgroundColor: "#53616F"
      //     }
      //   ]
      // },
      sugarLevels: []
    };
  }

  componentDidMount() {
    const { id } = this.props.user;
    this.props.getData(id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.fetchingData !== prevProps.fetchingData) {
      if (!this.props.fetchingData) {

        const dataLength = this.props.allData.length;
        const sortedData = this.sortedByDate(this.props.allData);
        let recentData = sortedData.slice(dataLength - 8, dataLength);
        const friendlyTimeArr = recentData.map(dataPoint => {
          return {
            ...dataPoint,
            BSG_Value: dataPoint.value,
            timestamp: moment(dataPoint.timestamp, 'YYYY-MM-DDTHH:mm:ss').format('LT'),
            date: moment(dataPoint.timestamp, 'YYYY-MM-DDTHH:mm:ss').format('LL')
          }
        })

        this.setState({
          ...this.state,
          OKToRender: true,
          sugarLevels: friendlyTimeArr
        });
        console.log(friendlyTimeArr)
      }
    }
  }

  sortedByDate = dataToBeSorted => {
    dataToBeSorted.sort((a, b) => {
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
    if (!this.state.OKToRender) {
      return (
        <div className='loader-container'>
          <Loader type="Bars" color="#53616F" height={80} width={80} />
        </div>
      )
    };
    return (
      <>
        <section className="App desktop">
          <h1 className="cgray header">Dashboard</h1>



          <AreaChart
            width={700}
            height={600}
            data={this.state.sugarLevels}
            cursor={'crosshair'}
            margin={{
              top: 10, right: 30, left: 0, bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey='timestamp' />
            <YAxis />
            <Tooltip />
            {/* <Legend 
              width={100} 
              wrapperStyle={{ top: 0, right: 0, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} 
            /> */}
            <Area type="monotone" dataKey="BSG_Value" stackId="3" stroke="#2592F2" fill="#64B2F6" fillOpacity='1' />
            <Area type="monotone" dataKey="date" stackId="1" stroke="#7b8ea1" fill="#7b8ea1" fillOpacity='0' />
            <Area type="monotone" dataKey="prediction" stackId="1" stroke="#FCFCFC" fill="#7b8ea1" fillOpacity='0.7' />
          </AreaChart>







          {/* <div className='chart-container'> 
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
          </div> */}
          
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
  allData: state.dashboardReducers.allData,
  times: state.dashboardReducers.times,
  user: state.dashboardReducers.userInfo,
  prediction: state.dashboardReducers.prediction
});

export default connect(
  mapStateToProps,
  { getData }
)(Dashboard);


import React from "react";
import { connect } from "react-redux";
import { getData } from "../state/actions";
import { 
  // Pie 
} from "react-chartjs-2";



class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: ["Blood sugar management"],
        datasets: [
          {
            label: "Blood Sugar Levels",
            data: this.props.overallSugarLevels,
            fill: true, // Don't fill area under the line
            borderColor: "#2592F2" // Line color
          }
        ]
      }
    };
  }
  render() {
    return (
      <>
        <h1 className='cgray'>Overview</h1>
      </>
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
)(Overview);

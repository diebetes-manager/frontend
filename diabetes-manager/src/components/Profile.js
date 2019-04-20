import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Profile extends Component {

  render() {
    const { name, age, height, weight, id } = this.props.user;

    return (
      <>
        <h1 className='cgray'>Profile</h1>
        <section className='profile'>
        
          <div className='profile-card user'>
            <div className='profile-user'>
              <h5 className='bold'>{name}</h5>
              <h5>{age} years old</h5>
              <h5>{weight}.</h5>
              <h5>{height} tall</h5>
            </div>
            
            <div className='profile-btns'>
              <button className='btn-green'>
                <Link to={`profile/${id}`}>Edit</Link>
              </button>
              <button className='btn-gray'>Sign Out</button>
            </div>

          </div>
          
          
          
        

          <div className='profile-card'>

            <h5>Upload your device information</h5>
            <br />
            <p>
              Compatible with these devices:
            </p>
            <ul>
              <li>Device one</li>
              <li>Device two</li>
              <li>Device three</li>
            </ul>
            <br />
            <p>Steps to uploading data:</p>
            <ul className='profile-steps'>
              <li>Goto settings</li>
              <li>Download the '.ibf' file from your device</li>
              <li>Upload the '.ibf' here to see your charts</li>
              <li>Wait a moment to receive your updated charts, projections, and more</li>
            </ul>

            <button className='btn-gray'>Upload IBF from your computer</button>
            
            <hr />
            
            <h5>Upload your readings directly</h5>
            <p>
              If you would rather manually input your readings, you can do so here
            </p>
            
            <title>BSL</title>
            <input className='' placeholder='enter BSL' />
            <br />
            <title>Insulin</title>
            <input className='' placeholder='enter Insulin levels' />
            
            <br />
            
            <button className='btn-gray'>CSV</button>

          </div>

        </section>
      </>
    );
  }
}
const mapStateToProps = state => ({
  user: state.dashboardReducers.userInfo
});

export default connect(
  mapStateToProps,
  {}
)(Profile);

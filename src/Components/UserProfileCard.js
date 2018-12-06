import React, { Component } from 'react';

class UserProfileCard extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-3 card w-25 home-page-user mx-auto">
          <img className="avatar-image mt-3" src="https://source.unsplash.com/1600x900/?people" alt="placeholder"></img>
          <h5 className="card-title text-center mt-3">John Doe</h5>
          <hr></hr>
          <div className="row text-center">
            <div className="col pl-5">
              <p>Following</p>
              <p>25</p>
            </div>
            <div className="col pr-5">
              <p>Followers</p>
              <p>21</p>
            </div>
          </div>
          <small className="text-center">Date Joined</small>
        </div>
      </div>
    )
  }
}

export default UserProfileCard;
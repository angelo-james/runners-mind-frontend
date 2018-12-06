import React, { Component } from 'react';

class FollowersCard extends Component {
  render() {
    return (
      <div className="container mt-3">
        <div className="card">
          <div className="card-header text-center">
            Followers
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">luigi</li>
            <li className="list-group-item">toad</li>
            <li className="list-group-item">yoshi</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default FollowersCard;
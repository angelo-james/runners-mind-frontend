import React, { Component } from 'react';

class FollowingCard extends Component {
  render() {
    return (
      <div className="container mt-3">
        <div className="card">
          <div className="card-header text-center">
            Following
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">luigi</li>
            <li className="list-group-item">yoshi</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default FollowingCard;
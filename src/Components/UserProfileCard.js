import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserProfileCard extends Component {
  render() {
    return (
      <div className="container">
        <div className="card home-page-user mx-auto">
          <img className="avatar-image mt-3" src="https://source.unsplash.com/1600x900/?people" alt="placeholder"></img>
          <h5 className="card-title text-center mt-3">{this.props.user.user.username.toUpperCase()}</h5>
          <hr></hr>
          <div className="row text-center">
            <div className="col pl-5">
              <p>Following</p>
              <p>{this.props.user.user.following.length}</p>
            </div>
            <div className="col pr-5">
              <p>Followers</p>
              <p>{this.props.user.user.followers.length}</p>
            </div>
          </div>
          <small className="text-center">{this.props.user.user.date}</small>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state.user
  }
}

export default connect(mapStateToProps, null)(UserProfileCard);
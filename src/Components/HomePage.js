import React, { Component } from 'react'
import { connect } from 'react-redux';
import UserProfileCard from './UserProfileCard';
import UserProfilePostCard from './UserProfilePostCard';
import FollowersCard from './FollowersCard';
import FollowingCard from './FollowingCard';

class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <UserProfileCard className="position-sticky"

            />
            <FollowersCard />
            <FollowingCard />
          </div>
          <div className="col">
            <UserProfilePostCard />
          </div>
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

export default connect(mapStateToProps, null)(HomePage);
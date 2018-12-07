import React, { Component } from 'react'
import { connect } from 'react-redux';
import UserProfileCard from './UserProfileCard';
import UserProfilePostCard from './UserProfilePostCard';
import FollowersCard from './FollowersCard';
import FollowingCard from './FollowingCard';

class HomePage extends Component {
  render() {
    let post = this.props.user.user.post;

    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <UserProfileCard className="position-sticky"/>
            <FollowersCard />
            <FollowingCard />
          </div>
          <div className="col">
          {post
            .map(
              post => (<UserProfilePostCard
                  title={ post.title }
                  post={ post.post }
                />
              )
            )
          }
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
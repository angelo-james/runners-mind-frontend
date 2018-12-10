import React, { Component } from 'react';

class FollowingCard extends Component {
  render() {
    return (
      <li id={this.props.key} className="list-group-item">{this.props.username}</li>
    )
  }
}

export default FollowingCard;
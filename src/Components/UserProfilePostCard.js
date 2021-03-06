import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserProfilePostCard extends Component {
  render() {
      return(
        <div className="row home-page-body mx-auto">
          <div className="card-body">
            <h5 className="card-title">{ this.props.title }</h5>
            <p className="card-text">{ this.props.post }</p>
            <small>{Date()}</small>
            <br></br>
            <input type="text"></input>
            <a href="/login" className="btn btn-primary">Button</a>
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

export default connect(mapStateToProps, null)(UserProfilePostCard);
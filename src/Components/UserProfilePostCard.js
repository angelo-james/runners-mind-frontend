import React, { Component } from 'react';

class UserProfilePostCard extends Component {
  render() {
    return (
      <div className="container">
        <div class="row home-page-body mx-auto">
          <div class="card-body">
            <img className="avatar-image mt-3" src="https://source.unsplash.com/1600x900/?people" alt="placeholder"></img>
            <p>mario</p>
            <h5 class="card-title">wheres peach</h5>
            <p class="card-text">im looking for peach</p>
            <small>{Date()}</small>
            <br></br>
            <input type="text"></input>
            <a href="/login" class="btn btn-primary">Button</a>
          </div>
        </div>

        <div class="row home-page-body mx-auto">
          <div class="card-body">
            <img className="avatar-image mt-3" src="https://source.unsplash.com/1600x900/?people" alt="placeholder"></img>
            <p>mario</p>
            <h5 class="card-title">whats a bowser</h5>
            <p class="card-text">aint got time for that</p>
            <small>{Date()}</small>
            <br></br>
            <input type="text"></input>
            <a href="/login" class="btn btn-primary">Button</a>
          </div>
        </div>
      </div>
    )
  }
}

export default UserProfilePostCard;
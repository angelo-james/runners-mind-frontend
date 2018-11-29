import React, { Component } from 'react'

class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
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

          <div className="border col-8 home-page-info mx-auto">
            <img className="post-image" src="https://via.placeholder.com/500x250.png" alt="placeholder"></img>
          </div>
        </div>

        <div className="row home-page-body mx-auto">
          <div className="col-3 border mx-auto">
            <img className="avatar-image mt-3" src="https://source.unsplash.com/1600x900/?people" alt="placeholder"></img>
            <p>John Doe</p>
            <small>{Date()}</small>
            <br></br>
            <input type="text"></input>
          </div>
          <div className="col-5">
            <img src="https://via.placeholder.com/500.png" alt="placeholder"></img>
          </div>
        </div>

      </div>
    )
  }
}

export default HomePage;
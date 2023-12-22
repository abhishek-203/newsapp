import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    return (
      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
        <div className="card">
          <img src={this.props.pic} height={"200px"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.title.slice(0, 90)+"..."}</h5>
            <hr />
            <hr />
            <p className="card-text">{this.props.description.slice(0,200) + "..."}
            </p>
            <a href={this.props.url} className="btn btn-primary" target="_blank" rel="noreferrer">
              Read more...
            </a>
          </div>
        </div>
      </div>
    );
  }
}
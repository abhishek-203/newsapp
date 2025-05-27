import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    return (
      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
        <div className="card">
          <img
            src={this.props.pic ? this.props.pic : "/images/noimage.png"}
            height={"200px"}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            {/* <h5 className="card-title">{this.props.title.slice(0, 90)+"..."}</h5>
            <hr />
            <p className="card-text">{this.props.description.slice(0, 200)+"..."}
            </p> */}
            <h5 className="card-title">
              {this.props.title
                ? this.props.title.length > 90
                  ? this.props.title.slice(0, 90) + "..."
                  : this.props.title
                : ""}
            </h5>

            <p className="card-text">
              {this.props.description
                ? this.props.description.length > 200
                  ? this.props.description.slice(0, 200) + "..."
                  : this.props.description
                : ""}
            </p>

            <a
              href={this.props.url}
              className="btn btn-primary w-100"
              target="_blank"
              rel="noreferrer"
            >
              Read more...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

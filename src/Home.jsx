import React, { Component } from "react";
import NewsItems from "./NewsItems";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      totalResults: 0,
    };
  }
  getAPIData = async()=>{
    let response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&language=hi&sortBy=publishedAt&apiKey=e4336a0cea4d49149177333158b05fa3`)
    response = await response.json()
    this.setState({
      articles: response.articles,
      totalResults : response.totalResults
    })
  }
  componentDidMount(){
    this.getAPIData()
  }
  componentDidUpdate(old){
    if(this.props.q != old.q)
    this.getAPIData()

  }
  render() {
    return (
      <div className="container-fluid">
        <h5 className="background p-2 text-light text-center my-2">{this.props.q} News Articles</h5>
        <div className="row">
          {
            this.state.articles.map((item, index) => {
                return <NewsItems
                 key={index}
                 pic = {item.urlToImage}
                 title = {item.title}
                 description = {item.description}
                 url = {item.url}
                 />
            })
          }
        </div>
      </div>
    )
  }
}

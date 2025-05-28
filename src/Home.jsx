import React, { Component } from "react";
import NewsItems from "./NewsItems";
import InfiniteScroll from "react-infinite-scroll-component";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      totalResults: 0,
      page: 1,
    };
  }
  getAPIData = async (query = "All") => {
    try {
      // let response = await fetch(`https://newsapi.org/v2/everything?q=${query}&language=${this.props.language}&page=1&pageSize=12&sortBy=publishedAt&apiKey=e4336a0cea4d49149177333158b05fa3`)
      let response = await fetch(
        // `http://localhost:5000/api/news?q=${this.props.q}&language=${this.props.language}&page=1&pageSize=12`
        `https://newsapp-iota-one.vercel.app/news?q=${this.props.q}&language=${this.props.language}&page=1&pageSize=12`
      );

      if (!response.ok) {
        console.error("Error fetching news:", response.statusText);
        return;
      }
      response = await response.json();
      this.setState({
        articles: response.articles.filter(
          (item) => item.title !== "[Removed]"
        ),
        totalResults: response.totalResults,
      });
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  componentDidMount() {
    this.getAPIData();
  }
  fetchData = async () => {
    this.setState({ page: this.state.page + 1 });
    try {
      // let response = await fetch(
      //   `https://newsapi.org/v2/everything?q=${this.props.q}&language=${this.props.language}&page=${this.state.page}&pageSize=12&sortBy=publishedAt&apiKey=e4336a0cea4d49149177333158b05fa3`
      // );
      let response = await fetch(
        // `http://localhost:5000/api/news?q=${this.props.q}&language=${this.props.language}&page=1&pageSize=12`
        `https://newsapp-iota-one.vercel.app/news?q=${this.props.q}&language=${this.props.language}&page=1&pageSize=12`
      );

      if (!response.ok) {
        console.error("Error fetching news:", response.statusText);
        return;
      }
      response = await response.json();
      this.setState({
        articles: this.state.articles.concat(
          response.articles.filter((item) => item.title !== "[Removed]")
        ),
      });
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  componentDidUpdate(old) {
    if (this.props !== old) {
      if (this.props.search === "" || this.props.search === old.search)
        this.getAPIData(this.props.q);
      else this.getAPIData(this.props.search);
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <h5 className="background p-2 text-light text-center my-2">
          {this.props.q} News Articles
        </h5>
        <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={
            <div className="w-100 text-center p-5">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
        >
          <div className="row">
            {this.state.articles.map((item, index) => {
              return (
                <NewsItems
                  key={index}
                  pic={item.urlToImage}
                  title={item.title}
                  description={item.description}
                  url={item.url}
                />
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

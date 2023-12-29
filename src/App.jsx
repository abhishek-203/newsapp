import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'

export default class App extends Component {
  constructor() {   
    super()
    this.state ={
      language:"hi",
      search:""
    }
  }
  changeLanguage = (data) => {
    this.setState({ language:data })
  }
  changeSearch = (data)=>{
    this.setState({search:data})
  }
  render() {
    return (
      <BrowserRouter>
        <Navbar changeLanguage={this.changeLanguage} changeSearch={this.changeSearch}/>
        <Routes>
          <Route path='/' element={<Home search={this.state.search} language={this.state.language} q="All" />}></Route>
          <Route path='/All' element={<Home search={this.state.search} language={this.state.language} q="All" />}></Route>
          <Route path='/Politics' element={<Home search={this.state.search} language={this.state.language} q="Politics" />}></Route>
          <Route path='/Education' element={<Home search={this.state.search} language={this.state.language} q="Education" />}></Route>
          <Route path='/Crime' element={<Home search={this.state.search} language={this.state.language} q="Crime" />}></Route>
          <Route path='/Science' element={<Home search={this.state.search} language={this.state.language} q="Science" />}></Route>
          <Route path='/Sports' element={<Home search={this.state.search} language={this.state.language} q="Sports" />}></Route>
          <Route path='/Jokes' element={<Home search={this.state.search} language={this.state.language} q="Jokes" />}></Route>
          <Route path='/Technology' element={<Home search={this.state.search} language={this.state.language} q="Technology" />}></Route>
          <Route path='/Cricket' element={<Home search={this.state.search} language={this.state.language} q="Cricket" />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    )
  }
}
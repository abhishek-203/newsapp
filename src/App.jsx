import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home q="All"/>}></Route>
            <Route path='/All' element={<Home q="All"/>}></Route>
            <Route path='/Politics' element={<Home q="Politics"/>}></Route>
            <Route path='/Education' element={<Home q="Education"/>}></Route>
            <Route path='/Crime' element={<Home q="Crime"/>}></Route>
            <Route path='/Science' element={<Home q="Science"/>}></Route>
            <Route path='/Sports' element={<Home q="Sports"/>}></Route>
            <Route path='/Jokes' element={<Home q="Jokes"/>}></Route>
            <Route path='/Technology' element={<Home q="Technology"/>}></Route>
            <Route path='/Cricket' element={<Home q="Cricket"/>}></Route>
        </Routes>
        <Footer/> 
      </BrowserRouter>
    )
  }
}

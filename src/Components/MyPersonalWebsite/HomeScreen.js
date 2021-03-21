import React, { Component } from 'react'
import Footer from './HomeScreen/Footer'
import Logo from './HomeScreen/Logo'
import Navbar from './HomeScreen/Navbar'
import Welcome from './HomeScreen/Welcome'

export default class HomeScreen extends Component {
    render() {
        return (
            <div className="container">
                <Logo></Logo>
                <Navbar></Navbar>
                <Welcome></Welcome>
                <Footer></Footer>
            </div>
        )
    }
}

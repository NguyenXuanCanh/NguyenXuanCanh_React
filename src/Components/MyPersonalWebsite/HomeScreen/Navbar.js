import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div className="nav__bar">
                <ul>
                    <li className="nav__item">
                        <a href="#">
                            About
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#">
                            Document
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#">
                            Writting
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#">
                            Hobbit
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#">
                            CV
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

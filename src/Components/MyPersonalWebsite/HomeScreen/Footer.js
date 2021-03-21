import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer mb-5 mt-5">
                <ul>
                    <li>
                        <div className="footer__icon">
                            <a href="#">
                                <i class="fab fa-facebook-f"></i>

                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="footer__icon">
                            <a href="#">
                                <i class="fab fa-twitter"></i>

                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="footer__icon">
                            <a href="#">
                                <i class="fab fa-google-plus-g"></i>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="footer__icon">
                            <a href="#">
                                <i class="fab fa-github"></i>

                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="footer__icon">
                            <a href="#">
                                <i class="fab fa-youtube"></i>

                            </a>
                        </div>
                    </li>
                </ul>
                <h5>
                    - 081.7979.112 -
                </h5>
                <h5>
                    Please call me :(
                </h5>
            </div>
        )
    }
}

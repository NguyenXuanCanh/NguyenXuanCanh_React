import React, { Component } from 'react'

export default class Welcome extends Component {
    render() {
        return (
            <div className="welcome container mb-4">
                <h3>
                    Hi, I'm Xuan Canh!
                </h3>
                <h3>
                    I'd like to meeting people and traveling.
                </h3>
                <div className="welcome__img">
                    <img src="./personalIMG/myTrip.jpg" alt="" className="w-100"></img>
                </div>
            </div>
        )
    }
}

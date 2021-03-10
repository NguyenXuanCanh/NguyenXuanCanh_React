import React, { Component } from 'react';

export default class HandleEvent extends Component {

    //callback funtion la ham dung lam tham so de truyen vao ham khac
    handleClick = () => {
        alert('asdasd');
    }
    showMess = (message) => {
        alert(message);
    }
    render() {
        return (
            <div>
                <button id="btnClick" onClick={this.handleClick}>
                    Click this
                </button>
                {/* hoac */}
                <button onClick={() => {
                    alert('asd');
                }}>
                    Click this
                </button>
                <br />
                <button className="btn btn-success" onClick={() => {
                    this.showMess('asd');
                }}>
                    click this btn
                </button>
            </div>
        )
    }
}

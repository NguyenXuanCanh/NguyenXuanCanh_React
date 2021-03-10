import React, { Component } from 'react'

export default class BTChonXe extends Component {
    state = {
        src: "./img/car/products/black-car.jpg",
    }
    //nên dùng 1 hàm riêng để thay đổi hình, tham số truyền vào là newColor
    render() {
        return (
            <div>
                <h1>Chọn xe</h1>
                <div class="row">
                    <div class="col-6">
                        <img src={this.state.src} className="w-100"></img>
                    </div>
                    <div class="col-2">
                        <button className="btn btn-danger" onClick={() => {
                            this.setState({
                                src: "./img/car/products/red-car.jpg",
                            })
                        }}>Màu đỏ</button>
                    </div>
                    <div class="col-2">
                        <button className="btn btn-warning" onClick={() => {
                            this.setState({
                                src: "./img/car/products/silver-car.jpg",
                            })
                        }}>Màu silver</button>
                    </div>
                    <div class="col-2">
                        <button className="btn btn-success" onClick={() => {
                            this.setState({
                                src: "./img/car/products/steel-car.jpg",
                            })
                        }}>Màu steel</button>
                    </div>
                </div>
            </div>
        )
    }
}

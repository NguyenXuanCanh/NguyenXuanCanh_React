import React, { Component } from 'react'

export default class StateDemo extends Component {

    //state là thuộc tính có sẵn của component chứa các giá trị làm thay đổi giao diện khi người dùng thao tác
    state = {
        isLogin: false,

    }
    // isLogin = false;
    userName = "asd";
    renderUILogin = () => {
        if (this.state.isLogin) {
            return <a href="#" className="nav-link" onClick={() => {
                // this.state.isLogin = true; //khong duoc lam the nay
                let newState = {
                    isLogin: false,
                }
                this.setState(newState);
            }}>{this.userName}</a>
        }
        return <a href="#" className="nav-link" onClick={() => {
            // this.state.isLogin = true; //khong duoc lam the nay
            //setState là phương thức có sẵn của component, dùng để gắn lại giá trị của state đồng thời chạy lại làm render, tạo lại giao diện
            //setState là phương thức bất đồng bộ
            // let newState = {
            //     isLogin: true,
            // }
            // this.setState(newState);

            // hoặc cũng có thể viết
            this.setState({
                isLogin: true,
            }, () => {
                console.log(this.state.isLogin);
            });
        }}>Đăng nhập</a>
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                    <a className="navbar-brand" href="#">Hello World</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                {this.renderUILogin()}
                            </li>

                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>

            </div>
        )
    }
}

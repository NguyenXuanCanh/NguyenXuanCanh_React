import React, { Component } from 'react'

export default class SanPhamProps extends Component {
    // this.props dùng để nhận giá trị từ component cha truyền vào
    // this.props không gán lại giá trị được, nếu cố tình gán giá trị sẽ báo lỗi
    render() {
        let { sp } = this.props;
        return (
            <div>
                <div className="card text-left">
                    <img className="card-img-top" src={sp.img} alt />
                    <div className="card-body">
                        <h4 className="card-title">{sp.name}</h4>
                        <p className="card-text">{sp.price}</p>
                    </div>
                </div>
            </div>

        )
    }
}

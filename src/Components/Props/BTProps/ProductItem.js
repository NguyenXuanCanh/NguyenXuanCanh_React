import React, { Component } from 'react'

export default class ProductItem extends Component {

    render() {
        let { item, viewDetail, addToCart } = this.props;
        return <div>
            <div className="card text-left">
                <img className="card-img-top" src={item.hinhAnh} alt='' />
                <div className="card-body">
                    <h4 className="card-title">{item.tenSP}</h4>
                    <button className="btn btn-success" onClick={() => {
                        viewDetail(item);
                    }}>Xem chi tiết</button>
                    <button className="btn btn-danger" onClick={() => {
                        addToCart(item);
                    }}>Mua</button>
                </div>
            </div>
        </div>
    }
}

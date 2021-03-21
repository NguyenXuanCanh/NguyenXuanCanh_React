import React, { Component } from 'react'
import SanPhamProps from './SanPhamProps'

export default class DanhSachSanPhamProps extends Component {
    productList = [
        { id: 1, name: "x", price: 1000, img: 'http://picsum.photos/200/200' },
        { id: 2, name: "xr", price: 1200, img: 'http://picsum.photos/200/200' },
        { id: 3, name: "xs", price: 1300, img: 'http://picsum.photos/200/200' },
    ]
    renderSanPham = () => {
        return this.productList.map((item, index) => {
            return <div className="col-4" key={index}>
                <SanPhamProps sp={item} ></SanPhamProps>
            </div>
        })
    }
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    {this.renderSanPham()}
                </div>
            </div>
        )
    }
}

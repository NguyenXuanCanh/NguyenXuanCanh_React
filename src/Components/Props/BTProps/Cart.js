import React, { Component } from 'react'

export default class Cart extends Component {
    renderGioHang = () => {
        let { gioHang, deleteItem, tangGiamBtn } = this.props;
        return gioHang.map((item, index) => {
            return <tr key={index}>
                <td>{item.maSP}</td>
                <td>{item.tenSP}</td>
                <td>
                    <img src={item.hinhAnh} width="50px"></img>
                </td>
                {/* toLocaleString make number beutiful */}
                <td>{item.giaBan.toLocaleString()}</td>
                <td>
                    <button className="btn" onClick={() => {
                        tangGiamBtn(item, "tru");
                    }}>
                        -
                       </button>
                    {item.soLuong}
                    <button className="btn" onClick={() => {
                        tangGiamBtn(item, "cong");
                    }}>
                        +
                    </button></td>
                <td>
                    {(item.giaBan * item.soLuong).toLocaleString()}
                </td>
                <td>
                    <button className="btn btn-danger" onClick={() => {
                        deleteItem(item);
                    }}>Xóa</button>
                </td>
            </tr >
        })
    }
    render() {
        return (
            <div className="container">
                <h3>Giỏ hàng</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã</th>
                            <th>Tên</th>
                            <th>Hình ảnh</th>
                            <th>Đơn giá</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                </table>
            </div>
        )
    }
}

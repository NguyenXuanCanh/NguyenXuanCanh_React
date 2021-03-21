import React, { Component } from 'react'
//kết nối component với store từ redux
import { connect } from 'react-redux'

class GioHangRedux extends Component {
    renderGioHang = () => {
        //spGioHang
        return this.props.gioHang.map((spGioHang, index) => {
            return <tr key={index}>
                <td>{spGioHang.maSP}</td>
                <td>{spGioHang.tenSP}</td>
                <td>
                    <img src={spGioHang.hinhAnh} width="50px"></img>
                </td>
                {/* toLocaleString make number beutiful */}
                <td>{spGioHang.giaBan.toLocaleString()}</td>
                <td>
                    <button className="btn" onClick={() => {
                        // tangGiamBtn(spGioHang, "tru");
                    }}>
                        -
                </button>
                    {spGioHang.soLuong}
                    <button className="btn" onClick={() => {
                        // tangGiamBtn(spGioHang, "cong");
                    }}>
                        +
                </button></td>
                <td>
                    {(spGioHang.giaBan * spGioHang.soLuong).toLocaleString()}
                </td>
                <td>
                    <button className="btn btn-danger" onClick={() => {
                        // deleteItem(spGioHang);
                    }}>Xóa</button>
                </td>
            </tr >
        })
    }
    render() {
        console.log(this.props);
        return (
            <div className="container">
                {/* <h3>Giỏ hàng</h3> */}
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

const mapStateToProps = (state) => {
    console.log(state);
    //ghi chú state chính là rootReducer(state tổng của ứng dụng)
    //hàm tạo props từ state của redux
    return {
        gioHang: state.gioHangReducer.gioHang
    }
}

export default connect(mapStateToProps)(GioHangRedux);
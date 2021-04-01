import React, { Component } from 'react'
//kết nối component với store từ redux
import { connect } from 'react-redux'

class GioHangRedux extends Component {
    renderGioHang = () => {
        //spGioHang
        return this.props.gioHang.map((spGioHang, index) => {
            // console.log(index);
            return <tr key={index}>
                <td>{spGioHang.maSP}</td>
                <td>{spGioHang.tenSP}</td>
                <td>
                    <img src={spGioHang.hinhAnh} width="50px"></img>
                </td>
                {/* toLocaleString make number beutiful */}
                <td>{spGioHang.gia.toLocaleString()}</td>
                <td>
                    <button className="btn" onClick={() => {
                        this.props.tangGiamSoLuong(index, "tru");
                    }}>
                        -
                </button>
                    {spGioHang.soLuong}
                    <button className="btn" onClick={() => {
                        this.props.tangGiamSoLuong(index, "cong");
                    }}>
                        +
                </button></td>
                <td>
                    {(spGioHang.gia * spGioHang.soLuong).toLocaleString()}
                </td>
                <td>
                    <button className="btn btn-danger" onClick={() => {
                        { this.props.xoaGioHang(index) }
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

const mapDispathToProps = (dispatch) => {
    return {
        xoaGioHang: (index) => {
            // console.log(spGioHang);
            // có thể dùng key index để lấy thẳng giá trị index cần xóa, không cần findIndex ở reducer
            const action = {
                type: 'XOA_GIO_HANG', //đây là thuộc tính bắt buộc để ruducer nhận biến giá trị xử lý
                index, //đây là dữ liệu gửi đi
            }
            // //gửi action lên reuducer, action này bao gồm method (push get...) và 1 cái spGioHang để xử lý.
            dispatch(action);
            // console.log(maSP);
        },
        tangGiamSoLuong: (index, math) => {
            // console.log(spGioHang);
            // console.log(spGioHang);
            const action = {
                type: 'TANG_GIAM_SO_LUONG', //đây là thuộc tính bắt buộc để ruducer nhận biến giá trị xử lý
                // spGioHang: spGioHang, //đây là dữ liệu gửi đi
                index,
                math,
            }
            // //gửi action lên reuducer, action này bao gồm method (push get...) và 1 cái spGioHang để xử lý.
            dispatch(action);
            // console.log(maSP);


            //hoặc có thể viết
            // return (action = {
            //     type: ''
            //     ...
            // })


        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(GioHangRedux);
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import ProductItem from '../Components/Props/BTProps/ProductItem';

class SanPhamRedux extends Component {
    render() {
        let item = this.props.item;
        console.log(this.props);
        return (
            <div>
                <div className="card text-left">
                    <img className="card-img-top" src={item.hinhAnh} alt='' />
                    <div className="card-body">
                        <h4 className="card-title">{item.tenSP}</h4>
                        <button className="btn btn-success" onClick={() => {
                            // viewDetail(item);
                        }}>Xem chi tiết</button>
                        <button className="btn btn-danger" onClick={() => {
                            { this.props.themGioHag(item) }
                        }}>Mua</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        themGioHag: (spClick) => {
            // console.log(spClick);
            // tu spClick tao ra sp gio hang
            const spGioHang = {
                maSP: spClick.maSP,
                tenSP: spClick.tenSP,
                gia: spClick.gia,
                soLuong: 1,
                hinhAnh: spClick.hinhAnh,
            }
            // console.log(spGioHang);
            const action = {
                type: 'THEM_GIO_HANG', //đây là thuộc tính bắt buộc để ruducer nhận biến giá trị xử lý
                spGioHang: spGioHang, //đây là dữ liệu gửi đi
            }
            //gửi action lên reuducer, action này bao gồm method (push get...) và 1 cái spGioHang để xử lý.
            dispatch(action);
        },
    }
} //dispatch giong nhu setState trong react class component
//mapdispatchtoprops de dua du lieu len reducers
//mapstatetoprops de lay du lieu tu reducer


//ket noi component voi state cua redux
export default connect(null, mapDispatchToProps)(SanPhamRedux);
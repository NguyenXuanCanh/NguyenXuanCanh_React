import React, { Component } from 'react'
import { connect } from 'react-redux'
import dataGhe from '../../assets/danhSachGhe.json'
// import { baiTapDatVeReducer } from '../Reducers/BaiTapDatVeReducer'
class DanhSachGhe extends Component {

    renderHangGhe = () => {
        return dataGhe.map((hangGhe, index) => {
            return <div key={index}>
                <span className="rowNumber">{hangGhe.hang}</span>
                {/* load ra a1 a2 a3 ... hangGhe.danhSachGhe */}
                {this.renderDanhSachGhe(hangGhe.danhSachGhe, hangGhe.hang)}
            </div>
        })
    }

    renderDanhSachGhe = (danhSachGhe, hangGhe) => {
        return danhSachGhe.map((ghe, index) => {
            let classGheDaDuocChon = ghe.daDat ? 'gheDuocChon' : '';
            let classGheDangDat = "";
            // kiem tra xem ghe co o trong mang ghe dang dat
            let indexGhe = this.props.danhSachGheDangDat.findIndex(gheDD => gheDD.soGhe == ghe.soGhe);
            if (indexGhe != -1) {
                classGheDangDat = 'gheDangChon';
            }
            if (hangGhe !== "") {
                return <button onClick={() => {
                    this.props.chonGhe(ghe);
                }} className={`ghe ${ghe.daDat ? 'gheDuocChon' : ''} ${classGheDangDat}`} key={index}>
                    {ghe.soGhe}
                </ button>
            } else {
                return <span className="rowNumber ml-5" key={index} >
                    {ghe.soGhe}
                </span>
            }
        })
    }

    render() {
        return (
            <div className="container mt-5 text-white">
                <h3 className="text-center">Đặt vé xem phim </h3>
                <div className="text-center">
                    Màn hình
                </div>
                <div className="screen">
                </div>
                {this.renderHangGhe()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat: state.baiTapDatVeReducer.danhSachGheDangDat,
        tongTien: state.baiTapDatVeReducer.tongTien,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        chonGhe: (ghe) => {
            let action = {
                type: 'CHON_GHE',
                ghe,
            }
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DanhSachGhe)
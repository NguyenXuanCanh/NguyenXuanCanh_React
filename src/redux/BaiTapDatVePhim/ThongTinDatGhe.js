import React, { Component } from 'react'
import { connect } from 'react-redux'
class ThongTinDatGhe extends Component {
    render() {
        // let { dispatch } = this.props;
        return (
            <div className="text-white" style={{ marginTop: "100px" }}>
                <h1 className="text-center display-5 mt-5">Danh sách ghế đang chọn</h1>
                <div>
                    <button className="gheDangChon mr-3">

                    </button>
                    Ghế đang chọn
                </div>
                <div>
                    <button className="ghe mr-3" style={{ margin: "0" }}>

                    </button>
                    Ghế chưa chọn
                </div>
                <div>
                    <button className="gheDuocChon mr-3"></button>
                    Ghế đã chọn
                </div>
                <table className="table mt-5 text-white">
                    <thead>
                        <tr>
                            <th>Số ghế</th>
                            <th>Giá</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                            return <tr key={index}>
                                <td>{gheDangDat.soGhe}</td>
                                <td>{gheDangDat.gia}</td>
                                <button onClick={() => {
                                    this.props.deleteGhe(gheDangDat);
                                }}>X</button>
                            </tr>
                        })}

                        <div>Tổng tiền: {this.props.tongTien}</div>
                        <div className="mt-5">
                            <button className="btn btn-success" onClick={() => {
                                this.props.datVe();
                            }}>Đặt vé
                            </button>
                        </div>
                    </tbody>
                </table>
            </div >
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
        deleteGhe: (ghe) => {
            let action = {
                type: "XOA_GHE",
                ghe,
            }
            dispatch(action);
        },
        datVe: () => {
            let action = {
                type: 'DAT_VE',
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatGhe);
import React, { Component } from 'react'
import { connect } from 'react-redux'
class TableSV extends Component {

    renderTableSinhVien = () => {
        // console.log(this.props);
        return this.props.mangSinhVien.map((sinhVien, index) => {
            return <tr key={index}>
                {console.log(sinhVien)}
                <td>{sinhVien.maSinhVien}</td>
                <td>{sinhVien.tenSinhVien}</td>
                <td>{sinhVien.soDienThoai}</td>
                <td>{sinhVien.email}</td>
                <td type="button" onClick={(event) => {
                    event.preventDefault();
                    this.props.dispatch({
                        type: 'XOA_SINH_VIEN',
                        maSinhVien: sinhVien.maSinhVien,
                    })
                }}><button className="btn p-3">Xóa</button></td>
                <td type="button" onClick={(event) => {
                    event.preventDefault();
                    this.props.dispatch({
                        type: 'SUA_SINH_VIEN',
                        sinhVienSua: sinhVien,
                    })
                }}><button className="btn p-3">Sửa</button></td>
            </tr>
        })
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Mã SV</th>
                        <th>Tên SV</th>
                        <th>Email</th>
                        <th>SĐT</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableSinhVien()}
                </tbody>
            </table>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        mangSinhVien: state.QLSVReducer.mangSinhVien,
    }
}
export default connect(mapStateToProps)(TableSV);
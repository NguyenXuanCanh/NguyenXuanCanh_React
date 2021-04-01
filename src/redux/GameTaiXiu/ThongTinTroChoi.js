import React, { Component } from 'react'
import { connect } from 'react-redux'
class ThongTinTroChoi extends Component {
    renderThongTinTroChoi = () => {
        let stringTaiXiu = '';
        if (this.props.taiXiu === true) {
            stringTaiXiu = 'Tài';
        }
        else {
            stringTaiXiu = 'Xỉu';
        }
        return <div>
            <h1 className='display-4'>Bàn Thắng: <span>{this.props.soBanThang}</span></h1>
            <h1 className='display-4'>Bạn Chọn: <span>{stringTaiXiu}</span></h1>
            <h1 className='display-4'>Tổng số bàn chơi: <span>{this.props.soBanDaChoi}</span></h1>
        </div>
    }
    render() {
        return (
            <div>
                {this.renderThongTinTroChoi()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        soBanThang: state.BTGameXucXacReducer.soBanThang,
        soBanDaChoi: state.BTGameXucXacReducer.soBanDaChoi,
        taiXiu: state.BTGameXucXacReducer.taiXiu,
    }
}

export default connect(mapStateToProps)(ThongTinTroChoi);
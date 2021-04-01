import React, { Component } from 'react'
import DanhSachGhe from './DanhSachGhe'
import ThongTinDatGhe from './ThongTinDatGhe'
import '../../assets/BaiTapBookingTicket.css';

export default class BaiTapDatVe extends Component {



    render() {
        return (
            <div className="bookingMovie">
                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '100%', height: '100%' }}>
                    <div className="row">
                        <div className="col-md-8">
                            <DanhSachGhe></DanhSachGhe>
                        </div>
                        <div className="col-md-4">
                            <ThongTinDatGhe></ThongTinDatGhe>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

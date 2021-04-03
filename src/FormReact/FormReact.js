import React, { Component } from 'react'
import TableSV from './TableSV'
import { connect } from 'react-redux'
class FormReact extends Component {

    state = {
        values: {
            maSinhVien: '',
            tenSinhVien: '',
            soDienThoai: '',
            email: '',
        },
        errors: {
            maSinhVien: '',
            tenSinhVien: '',
            soDienThoai: '',
            email: '',
        }
    }

    handleChangeInput = (event) => {
        const { name, value } = event.target;
        let newValues = { ...this.state.values };
        let newErrors = { ...this.state.errors };

        newValues[name] = value;
        if (newValues[name] === '') {
            newErrors[name] = 'Không được bỏ trống';
        } else {
            newErrors[name] = '';
        }
        let typeProps = event.target.getAttribute('typeProps');

        if (typeProps === 'email') {
            let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regexEmail.test(value)) {
                newErrors[name] = 'Email không hợp lệ';
            }
        }

        //lay typeProps cua the de xac dinh email hay bat cu thu gi

        this.setState({
            values: newValues,
            errors: newErrors,
        })
    }

    handleSubmit = (event) => {
        let isValid = true;
        let { values, errors } = this.state;
        for (let key in values) {
            if (!values[key]) {
                isValid = false;
            }
        }
        for (let key in errors) {
            if (errors[key]) {
                isValid = false;
            }
        }
        if (isValid) {
            event.preventDefault();
            // console.log(this.state.values);
            this.props.dispatch({
                type: 'THEM_SINH_VIEN',
                sinhVien: this.state.values,
            })
        } else {
            event.preventDefault();
        }
    }

    render() {
        let { maSinhVien, tenSinhVien, email, soDienThoai } = this.props.sinhVienSua;
        return (
            <form className="container">
                <div className="card text-white bg-dark">
                    <div className="card-header">
                        <h1 className="card-title">Thông tin sinh viên</h1>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Mã sinh viên</label>
                                    <input type="text" name="maSinhVien" id="maSinhVien" value={maSinhVien} className="form-control" placeholder aria-describedby="maSinhVien"
                                        onChange={this.handleChangeInput} />
                                    <p className="text text-danger">{this.state.errors.maSinhVien}</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Số điện thoại</label>
                                    <input type="text" name="soDienThoai" id="soDienThoai" value={tenSinhVien} className="form-control" placeholder aria-describedby="soDienThoai" onChange={this.handleChangeInput} />
                                    <p className="text text-danger">{this.state.errors.soDienThoai}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Họ tên</label>
                                    <input type="text" name="tenSinhVien" id="tenSinhVien" value={email} className="form-control" placeholder aria-describedby="name" onChange={this.handleChangeInput} />
                                    <p className="text text-danger">{this.state.errors.tenSinhVien}</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input typeProps="email" type="email" name="email" id="email" value={soDienThoai} className="form-control" placeholder aria-describedby="email" onChange={this.handleChangeInput} />
                                    <p className="text text-danger">{this.state.errors.email}</p>
                                </div>
                            </div>
                        </div>
                        <button type="submit" name="" id="" className="btn btn-primary" style={{ padding: "10px", }} onClick={this.handleSubmit}>thêm sinh viên</button>
                    </div>
                </div>
                <div className="mt-5">
                    <TableSV></TableSV>
                </div>
            </form >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sinhVienSua: state.QLSVReducer.sinhVienSua,
    }
}

export default connect(mapStateToProps)(FormReact);
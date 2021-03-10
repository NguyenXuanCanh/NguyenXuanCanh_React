import React, { Component } from 'react'

export default class DataBinding extends Component {
    //SinhVien la thuoc tinh cua DataBinding giong nhu ten la thuoc tinh cua SinhVien
    SinhVien = {
        ma: 1,
        ten: "Nguyen Van A",
    }
    //renderSinhVien la phuong thuc cua DataBinding
    renderSinhVien() {
        alert("asd");
    }

    render() {
        let name = 'Hello World';
        let product = {
            name: 'ipx',
            price: '1000',
            img: 'https://picsum.photos/1920/1080',
        }
        let renderProduct = () => {
            return <div>
                <p>asd</p>
            </div>
        }
        return (
            <div>
                <p id='title'>{name}</p>
                <br />
                <div className="card text-left">
                    <img className="card-img-top w-100" src={product.img} alt={product.img} />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{this.SinhVien.ten}</p>
                    </div>
                </div>
                { renderProduct()}
                {/* {this.renderSinhVien()} */}
            </div>
        )
    }
}

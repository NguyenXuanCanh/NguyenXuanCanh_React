import React, { Component } from 'react'
import Cart from './Cart';
import ProductItem from './ProductItem';

export default class Products extends Component {
    state = {
        productDetail: {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2\", Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        },
        gioHang: [
            {
                maSP: 1,
                tenSP: "VinSmart Live",

                giaBan: 5700000,
                hinhAnh: "./img/vsphone.jpg",
                soLuong: 1,
            },
        ]
    }
    //state đặt ở nơi chứa giao diện(trực tiếp hoặc gián tiếp)(để binding dữ liệu) và tại nơi chứa nút thực thi thay đổi state(event)
    arrProduct = [
        {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2\", Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        },

        {
            "maSP": 2,
            "tenSP": "Meizu 16Xs",
            "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
            "heDieuHanh": "Android 9.0 (Pie); Flyme",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 7600000,
            "hinhAnh": "./img/meizuphone.jpg"
        },

        {
            "maSP": 3,
            "tenSP": "Iphone XS Max",
            "manHinh": "OLED, 6.5\", 1242 x 2688 Pixels",
            "heDieuHanh": "iOS 12",
            "cameraSau": "Chính 12 MP & Phụ 12 MP",
            "cameraTruoc": "7 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 27000000,
            "hinhAnh": "./img/applephone.jpg"
        }
    ];
    renderProduct = () => {
        return this.arrProduct.map((item, index) => {
            return <div className="col-4" key={index}>
                <ProductItem item={item} viewDetail={this.viewDetail} addToCart={this.addToCart} />
            </div>
        })
    }
    viewDetail = (item) => {
        this.setState({
            productDetail: item,
        })
    }
    addToCart = (item) => {
        // this.setState({
        //     gioHang: [...this.state.gioHang, item]
        // })

        //tao sp gio hang tu sp click
        let spGioHang = {
            maSP: item.maSP,
            tenSP: item.tenSP,
            giaBan: item.giaBan,
            soLuong: 1,
            hinhAnh: item.hinhAnh,
        }
        //xu ly them gio hang
        let gioHangCapNhat = [...this.state.gioHang];
        let index = gioHangCapNhat.findIndex(item => item.maSP == spGioHang.maSP);
        if (index !== -1) {
            gioHangCapNhat[index].soLuong += 1;
        }
        else {
            gioHangCapNhat = [...this.state.gioHang, spGioHang];
        }
        this.setState({
            gioHang: gioHangCapNhat,
        })
    }
    deleteItem = (item) => {
        let spGioHang = {
            maSP: item.maSP,
            tenSP: item.tenSP,
            giaBan: item.giaBan,
            soLuong: 1,
            hinhAnh: item.hinhAnh,
        }
        let gioHangCapNhat = [...this.state.gioHang];
        let index = gioHangCapNhat.findIndex(item => item.maSP == spGioHang.maSP);
        if (index !== -1) {
            gioHangCapNhat.splice(index, 1);
            this.setState({ gioHang: gioHangCapNhat, });
        }
    }
    tangGiamBtn = (item, phepTinh) => {

        //có thể viết
        //phepTinh truyền vào -1 hoặc 1
        //cho item.soLuong+=phepTinh

        let spGioHang = {
            maSP: item.maSP,
            tenSP: item.tenSP,
            giaBan: item.giaBan,
            soLuong: 1,
            hinhAnh: item.hinhAnh,
        }
        let gioHangCapNhat = [...this.state.gioHang];
        let index = gioHangCapNhat.findIndex(item => item.maSP == spGioHang.maSP);
        if (phepTinh === "cong") {
            if (index !== -1) {
                item.soLuong++;
                this.setState({ gioHang: gioHangCapNhat, });
            }
        } else {
            if (index !== -1) {
                item.soLuong--;
                if (item.soLuong === 0) {
                    gioHangCapNhat.splice(index, 1);
                }
                this.setState({ gioHang: gioHangCapNhat, });
            }
        }
    }
    render() {
        let { tenSP, hinhAnh, ram, rom, manHinh, cameraSau, cameraTruoc, giaBan, maSP, heDieuHanh } = this.state.productDetail;
        return (
            <div className="container">
                <Cart gioHang={this.state.gioHang} deleteItem={this.deleteItem} tangGiamBtn={this.tangGiamBtn}></Cart>

                <h3 className="text-center display-4">DSSP</h3>
                <div className="row">
                    {this.renderProduct()}
                </div>
                <div className="row">
                    <div className="col-6">
                        <h3 className="text-center">{tenSP}</h3>
                        <img src={hinhAnh} height="500px" alt=""></img>
                    </div>
                    <div className="col-6">
                        <h3 className="text-center">Thông số kỹ thuật</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Màn hình</th>
                                    <th>{manHinh}</th>
                                </tr>
                                <tr>
                                    <th>Hệ điều hành</th>
                                    <th>{heDieuHanh}</th>
                                </tr>
                                <tr>
                                    <th>Cam trước</th>
                                    <th>{cameraTruoc}</th>
                                </tr>
                                <tr>
                                    <th>Cam sau</th>
                                    <th>{cameraSau}</th>
                                </tr>
                                <tr>
                                    <th>Ram</th>
                                    <th>{ram}</th>
                                </tr>
                                <tr>
                                    <th>Rom</th>
                                    <th>{rom}</th>
                                </tr>
                                <tr>
                                    <th>Giá bán</th>
                                    <th>{giaBan}</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

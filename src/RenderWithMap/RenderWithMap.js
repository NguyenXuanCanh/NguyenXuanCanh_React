import React, { Component } from 'react'

export default class RenderWithMap extends Component {
    productList = [
        { id: 1, name: "x", price: 1000, img: 'http://picsum.photos/200/200' },
        { id: 2, name: "xr", price: 1200, img: 'http://picsum.photos/200/200' },
        { id: 3, name: "xs", price: 1300, img: 'http://picsum.photos/200/200' },
    ]
    renderProduct = () => {
        // const arrDivProduct = [];
        // for (let i in this.productList) {
        //     let singleProduct = this.productList[i];
        //     const jsxDivProduct =
        //         <div className="col-4">
        //             <div className="card text-left">
        //                 <img className="card-img-top" src={singleProduct.img} alt="" />
        //                 <div className="card-body">
        //                     <h4 className="card-title">{singleProduct.name}</h4>
        //                     <p className="card-text">{singleProduct.price}</p>
        //                 </div>
        //             </div>
        //         </div>
        //     arrDivProduct.push(jsxDivProduct);
        // }
        // return arrDivProduct;
        return this.productList.map((product, index) => {
            return <div key={index} className="col-4">
                <div className="card text-left">
                    <img className="card-img-top" src={product.img} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.price}</p>
                    </div>
                </div>
            </div>;
        })
    }
    renderTableProduct = () => {
        return this.productList.map((product, index) => {
            return <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td><img className="card-img-top" style={{ width: "50px", height: "50px" }} src={product.img} alt="" /></td>
                <td>{product.price}</td>
            </tr>
        })
    }
    render() {
        return (
            <div className="container">
                <h1 className="text-center display-4">
                    Danh sách sản phẩm
                </h1>
                <div className="row">
                    {this.renderProduct()}
                </div>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>img</th>
                                <th>price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTableProduct()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

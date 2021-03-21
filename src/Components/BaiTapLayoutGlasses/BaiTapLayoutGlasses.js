import React, { Component } from 'react'
import Glasses from './Glasses';

export default class BaiTapLayoutGlasses extends Component {
    arrProduct = [
        { id: 1, price: 30, name: 'GUCCI G8850U', url: './img/glassesImage/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 2, price: 50, name: 'GUCCI G8759H', url: './img/glassesImage/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './img/glassesImage/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 4, price: 30, name: 'DIOR D6005U', url: './img/glassesImage/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 5, price: 30, name: 'PRADA P8750', url: './img/glassesImage/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 6, price: 30, name: 'PRADA P9700', url: './img/glassesImage/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 7, price: 30, name: 'FENDI F8750', url: './img/glassesImage/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 8, price: 30, name: 'FENDI F8500', url: './img/glassesImage/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 9, price: 30, name: 'FENDI F4300', url: './img/glassesImage/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    ];
    state = {
        id: 1, price: 30, name: 'GUCCI G8850U', url: './img/glassesImage/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
    }
    renderGlasses = () => {
        return this.arrProduct.map((item, index) => {
            return < div className="col-md-2" key={index}>
                <Glasses item={item} changeGlasses={this.changeGlasses}></Glasses>
            </div >
        })
    }
    renderModel = () => {
        return <div className="row">
            <div className="col-md-6">
                <h2 className="text-center">Before</h2>
                <img src="./img/glassesImage/model.jpg"></img>
            </div>
            <div className="col-md-6 position-relative">
                <h2 className="text-center">After</h2>
                <img src="./img/glassesImage/model.jpg"></img>
                <img src={this.state.url} style={{ opacity: '0.9', top: '178px', left: '110px', width: '50%' }} className="position-absolute "></img>
            </div>
        </div>
    }
    changeGlasses = (item) => {
        this.setState(item);
    }
    render() {

        return (
            <div style={{
                backgroundImage: `url("./img/glassesImage/background.jpg")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                padding: '60px',
            }
            }>
                <div className="container" >
                    <h1 className="text-center text-uppercase">
                        Try glasses app online
                </h1>
                    <div className="model">
                        {this.renderModel()}
                    </div>
                    <div className="row " style={{
                        backgroundColor: 'white',
                        border: '1px solid black',
                        padding: '20px',
                    }
                    }>
                        {this.renderGlasses()}

                    </div>
                </div>
            </div >
        )
    }
}

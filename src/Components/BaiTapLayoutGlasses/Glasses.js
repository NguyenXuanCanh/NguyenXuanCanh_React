import React, { Component } from 'react'

export default class Glasses extends Component {
    render() {
        let { item, changeGlasses } = this.props;
        return (
            <div>
                <img src={item.url} className="w-100 d-inline" onClick={() => {
                    changeGlasses(item);
                }}></img>
            </div>
        )
    }
}

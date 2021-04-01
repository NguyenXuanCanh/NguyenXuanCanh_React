import React, { Component } from 'react'
import { connect } from 'react-redux'
class XucXac extends Component {
    renderXucXac = () => {
        return this.props.mangXucXac.map((xucXac, index) => {
            console.log(xucXac.hinhAnh);
            // return <img key={index} src="https://picsum.photos/200/300" style={{ width: '35px' }} alt={xucXac.hinhAnh} />
            return <img key={index} src={xucXac.hinhAnh} style={{ width: '35px' }} alt={xucXac.hinhAnh} />
        })
    }
    render() {
        return (
            <div>
                {this.renderXucXac()}
                {/* <img src="./img/imgGame/1.png"></img> */}
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        mangXucXac: state.BTGameXucXacReducer.mangXucXac,
    }
}
export default connect(mapStateToProps)(XucXac);
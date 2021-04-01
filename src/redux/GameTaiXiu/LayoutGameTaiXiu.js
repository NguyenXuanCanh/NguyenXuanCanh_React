import React, { Component } from 'react'
import './BTXucXac.css'
import ThongTinTroChoi from './ThongTinTroChoi'
import XucXac from './XucXac'
import { connect } from 'react-redux'
class LayoutGameTaiXiu extends Component {
    render() {
        return (
            <div className="game">
                <h1 className="display-4 text-center mt-5">
                    Bài Tập Game Xúc Xắc
                </h1>
                <div className="row text-center">
                    <div className="col-4">
                        <button className="btn btn-success" onClick={() => {
                            this.props.datCuoc(true);
                        }}>Tài</button>
                    </div>
                    <div className="col-4">
                        <XucXac></XucXac>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-success" onClick={() => {
                            this.props.datCuoc(false);
                        }}>Xỉu</button>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-12">
                        <ThongTinTroChoi></ThongTinTroChoi>
                        <button className="btn btn-success" onClick={() => {
                            this.props.playGame()
                        }}>play</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDisPatchToProps = (dispatch) => {
    return {
        datCuoc: (taiXiu) => {
            let action = {
                type: 'DAT_CUOC',
                taiXiu,
            }
            dispatch(action)
        },
        playGame: () => {
            let action = {
                type: 'PLAY_GAME',
            }
            dispatch(action)
        }
    }
}

export default connect(null, mapDisPatchToProps)(LayoutGameTaiXiu)
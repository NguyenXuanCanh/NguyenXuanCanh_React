import React, { Component } from 'react'
//Cách 1 import file.css từ fle component
import './styles.css';

//Cách 2 import file.css tại component
import styles from './styles.module.css';
export default class Styles extends Component {
    render() {
        return (
            <div className='container'>
                <div className='text-red'>
                    123
                </div>
                <div className={styles.textViolet}>
                    123
                </div>
                <div className={`$style['text-red]`}>

                </div>
                {/* hoặc */}
                <div style={{
                    backgroundColor: 'blue',
                    color: 'violet',
                }}>
                    asd
                </div>
            </div>
        )
    }
}

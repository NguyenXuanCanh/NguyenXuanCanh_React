// rcc react class component

import React, { Component } from 'react'

export default class DemoClass extends Component {

    //phương thức render sẽ tự kích hoạt khi sử dụng thẻ component
    render() {
        return (
            <div>
                <div className="container bg-dark p-5">
                    <p className="pt-2 text-light">
                        sgjfshdfgjkdhsfg
                    </p>
                    <p>
                        content
                    </p>
                </div>
            </div>
        )
    }
}

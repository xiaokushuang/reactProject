import React, {Component} from 'react';
import Son from './Son'
class Father extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            fatherFlag:'父组件的flag'
        };
    }
    render() {
        return (
            <div>
               父组件
               <Son showFlag={this.state.fatherFlag} showEvet={(data)=>{console.log('子传父的事件',data)}}></Son>
            </div>
        );
    }
}

export default Father;
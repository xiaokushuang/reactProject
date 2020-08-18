import React, {Component} from 'react';
class Son extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            fatherFlag:'子组件的flag'
        };
    }
    render() {
        return (
            <div>
               子组件[父传子]-----{this.props.showFlag}
               <button onClick={this.buttonClick.bind(this)}>子组件的按钮</button>
            </div>
        );
    }
    buttonClick(){
        console.log('点击子组件按钮')
        this.props.showEvet(this.state.fatherFlag)
    }
}

export default Son;
import React, {Component} from 'react';

class Question1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            input_value:''
        }
    }
    render() {
        return (
            <div>
                <p>第一题</p>
                <input type="text" onChange={(e)=>this.inputChange(e)} />
            </div>
        );
    }
    inputChange(e){
        this.setState({
            input_value:e.target.value
        })
        console.log(this.state.input_value)
    }
}

export default Question1;
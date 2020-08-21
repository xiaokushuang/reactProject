import React, {Component} from 'react';
import './question.scss'
class Question1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            input_value:'',
            showSelect:false,
            selectList:[
                {
                    id:'1',
                    name:'abc'
                },
                {
                    id:'2',
                    name:'abcd'
                },
                {
                    id:'3',
                    name:'abcde'
                },
                {
                    id:'4',
                    name:'abcdef'
                },
                {
                    id:'5',
                    name:'abcdefg'
                },
            ],
        }
    }
    render() {
        return (
            <div className="firstQuestion">
                <input type="text" value = {this.state.input_value} onInput={(e)=>this.inputChange(e)} />
                {
                    this.state.showSelect?
                    <div>
                        <ul>
                                {
                                    this.state.selectList.map((item,index)=>{
                                        return <li onClick={this.selectItemClick.bind(this,index,item)}  key={item.id}>{item.name}</li>
                                    })
                                }
                        </ul>
                    </div>
                    :null
                }
            </div>
        );
    }
    selectItemClick(index,item){
        console.log(item.name)
        this.setState({
            input_value:this.state.input_value + item.name
        })
        this.setState({
            showSelect:false
        })
    }
    inputChange(e){
        console.log(e.target.value)
        this.setState({
            input_value:e.target.value
        })
        if(e.target.value.substr(e.target.value.length-1,1)=='@'){
            this.setState({
                showSelect:true
            },function(){
                console.log('输入了@',this.state.showSelect)
            })
        }else{
            this.setState({
                showSelect:false
            },function(){
                console.log('输入了其他',this.state.showSelect)
            })
        }
    }
}

export default Question1;
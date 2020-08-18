import React, {Component} from 'react';
import './cookbook.css'
class HotSort extends Component {
    state = {
        current:'',
        sortList:[
            {
                id:'14',
                name:'汤'
            },
            {
                id:'15',
                name:'川菜'
            },
            {
                id:'16',
                name:'粤菜'
            },
            {
                id:'17',
                name:'早餐'
            },
            {
                id:'1',
                name:'家常菜'
            },
            {
                id:'2',
                name:'素菜'
            },
            {
                id:'3',
                name:'粥'
            },
            {
                id:'4',
                name:'汤'
            },
            {
                id:'5',
                name:'川菜'
            },
            {
                id:'6',
                name:'粤菜'
            },
            {
                id:'7',
                name:'早餐'
            },
            {
                id:'8',
                name:'凉菜'
            },
        ],
    }
    sortItemClick(index,item){
        this.setState({
                    current:index
                })
    }
    render() {
        return (
            <div className='hotSortClass'>
                <div className="title">热门分类</div>
                <div className='sortListClass'>
                    {
                        this.state.sortList.map((item,index)=>{
                            return <div onClick={this.sortItemClick.bind(this,index,item)} className={index===this.state.current?'sortItemActiveClass':'sortItemClass'} key={item.id}>{item.name}</div>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default HotSort;
import React, { Component } from 'react'
import {Card, Col, Icon} from 'antd'
import css from'./DuaContainer.css'

export default class DuaWrapper extends Component {
    state = {
        duas: [
            {
                // id:undefined,
                title: 'Nermin',
                body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, iusto!",
                favourite: true
                // category: undefined,
                // source: undefined,
                // chain: undefined
            },
            {
                // id:undefined,
                title: 'Eso Ibada',
                body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, iusto!",
                favourite: false
                // category: undefined,
                // source: undefined,
                // chain: undefined
            },
            {
                // id:undefined,
                title: 'Shalilalalaj',
                body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, iusto!",
                favourite: false
                // category: undefined,
                // source: undefined,
                // chain: undefined
            },
            {
                // id:undefined,
                title: 'Sumeja',
                body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, iusto!",
                favourite: false
                // category: undefined,
                // source: undefined,
                // chain: undefined
            }
        ]
    }

    onHandleChange(e) {
        const value = e.target.value;
        const duas = this.state.duas;
        const results = duas.filter(dua => {
            const regex = new RegExp(value, 'gi')
            return dua.title.match(regex) || dua.body.match(regex)
        })
    }

    render() {
        const duas = this.state.duas;
        const novo = duas.map((item,index)=>{
            return (
                <Duas key={index} title={item.title} content={item.body} favourite={item.favourite}/>
            )
        })
        return (
            <React.Fragment>
                {novo}
            </React.Fragment>
        )
    }
}
const FormComponent = (props) => {
    return (
        <form >
            <input type="text" name="title" onChange={props.change}/>
            <button>Submit Dua</button>
        </form>
    );
};

// const Duas = props => {
//     return (
//         <Col lg={{ span: 5}} className={css.test}>
//             <Card title={props.title} style={{ width: 300 }} extra={<a href="#"><Icon type="star-o" /></a>} >
//                 <p>{props.content}</p>
//             </Card>
//         </Col>    
//     );
// };

class Duas extends Component {
    render() {
        const {title, content, favourite} = this.props;
        const proba = favourite ? <Icon type="star" /> : <Icon type="star-o" />;
        return (
            <Col lg={{ span: 5}} className={css.test}>
                <Card title={title} style={{ width: 300 }} extra={<a href="#">{favourite ? <Icon type="star" /> : <Icon type="star-o" />}</a>} >
                    <p>{content}</p>
                </Card>
            </Col>  
        )
    }
}






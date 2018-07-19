import React, { Component } from 'react'
import { Card, Col, Row, Icon, Modal } from 'antd'
// import css from'./DuaContainer.css'
import './DuaContainer.css';
import SearchComponent from '../Forms/SearchComponent';

export default class DuaWrapper extends Component {
    constructor(props){
        super(props);
        this.state = {
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
                    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, iusto! Test",
                    favourite: false
                    // category: undefined,
                    // source: undefined,
                    // chain: undefined
                }
            ],
            results: []
        }
        this.changeFav = this.changeFav.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    changeFav(item){
        const duas =  this.state.duas;
        // console.log(duas)
        const changed = duas.map(element => {
            if(element.title === item.title){
                element.favourite = !element.favourite;
            }
            return element;
        })
        this.setState({
            duas: changed
        })
    }

    handleChange(value) {
        // const value = e.target.value;
        const duas = this.state.duas;
        const results = duas.filter(dua => {
            const regex = new RegExp(value, 'gi')
            return dua.title.match(regex) || dua.body.match(regex)
        })

        if(value){
            this.setState({
                results: results
            })
        }else{
            this.setState({
                results: []
            })
        }
    }

    render() {
        const results = this.state.results;
        const duas = this.state.duas;
        const test = (results === undefined || results.length == 0)? duas : results;
        const novo = test.map((item,index)=>{
            return (
                <Duas key={index} title={item.title} content={item.body} favourite={item.favourite} changeFav={this.changeFav}/>
            )
        })
        return (
            <React.Fragment>
                <SearchComponent handleChange={this.handleChange}/>
                <Row type="flex" justify="space-between">
                    {novo}
                </Row>
            </React.Fragment>
        )
    }
}

class Duas extends Component {
    constructor(props){
        super(props);
        this.favHandler = this.favHandler.bind(this);
        this.state = {
            modalVisible: false,
          }
    }
    render() {
        const { title, content, favourite } = this.props;
        const proba = favourite ? <Icon type="star" /> : <Icon type="star-o" />;
        return (
            <div>
                <Col lg={{ span: 6}} className="gutter-row" onClick={() => this.setVisible(true)} >
                    <Card title={title} style={{ width: 300 }} extra={<a href="#" onClick={this.favHandler}> {favourite ? <Icon type="star" /> : <Icon type="star-o" />}</a>} >
                        <p className='proba'>{content}</p>
                    </Card>
                </Col>
                <Modal
                    title={title}
                    wrapClassName="vertical-center-modal"
                    visible={this.state.modalVisible}
                    onOk={() => this.setVisible(false)}
                    onCancel={() => this.setVisible(false)}
                    >
                    <p>{content}</p>
                </Modal>  
            </div>
        )
    }

    favHandler(e){
        e.preventDefault();
        const { changeFav } = this.props;
        changeFav(this.props)
        // console.log(this)
    }

    setVisible(modalVisible) {
        this.setState({ modalVisible });
      }
}






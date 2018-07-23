import React, { Component } from 'react'
import { Row } from 'antd'
// import css from'./DuaContainer.css'
import './DuaContainer.css';
import SearchComponent from '../Forms/SearchComponent';
import Duas from '../Duas/Duas'
import HijriCalendar from '../HijriCalendar/HijriCalendar';

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
        const { duas, results } = this.state;
        const test = (results === undefined || results.length == 0)? duas : results;
        const novo = test.map((item,index)=>{
            return (
                <Duas key={index} title={item.title} content={item.body} favourite={item.favourite} changeFav={this.changeFav}/>
            )
        })
        return (
            <React.Fragment>
                <HijriCalendar/>
                <SearchComponent handleChange={this.handleChange}/>
                <Row type="flex" justify="space-between">
                    {novo}
                </Row>
            </React.Fragment>
        )
    }
}


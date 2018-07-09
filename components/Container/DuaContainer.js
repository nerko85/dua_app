import React, { Component } from 'react'

export default class DuaWrapper extends Component {
    state = {
        duas: [
            {
                // id:undefined,
                title: 'Nermin',
                body: "nesto"
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
        return (
            <div>
                <FormComponent change={this.onHandleChange.bind(this)} />
            </div>
        )
    }
}

const FormComponent = (props) => {
    return (
        <form >
            <input type="text" name="title" onChange={props.change}/>
        </form>
    );
};



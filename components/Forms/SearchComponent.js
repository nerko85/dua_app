import React, { Component } from 'react';
import { Input } from 'antd';

const Search = Input.Search;
class SearchComponent extends Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    render(){
        return(
            <Search
                placeholder="input search text"
                enterButton="Search"
                size="large"
                onSearch={value => this.onSearch(value)}
                onChange={this.onChange}
            />
        )
    }

    onSearch(value){
        console.log(value);

    }

    onChange(e){
        const { handleChange } = this.props;
        e.preventDefault();
        const value = e.target.value;
        // handleChange(value);
        console.log(handleChange)
        // console.log(e.target.value)
    }
}

export default SearchComponent;
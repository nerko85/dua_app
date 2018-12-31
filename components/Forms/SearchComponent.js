import React, { Component } from 'react';
import { Input } from 'antd';

const { Search } = Input;
export default class SearchComponent extends Component {
  onSearch = value => {
    console.log(value);
  };

  onChange = e => {
    const { handleChange } = this.props;
    e.preventDefault();
    const value = e.target.value;
    handleChange(value);
    // console.log(e.target.value)
  };

  render() {
    return (
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        onSearch={value => this.onSearch(value)}
        onChange={this.onChange}
      />
    );
  }
}

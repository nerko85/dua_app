import React, { Component } from 'react';
import { Input  } from 'antd';
import Master from '../components/Layout/Master';
import DuaWrapper from '../components/Container/DuaContainer'

export default class Index extends Component {
  render() {
    return (
      <Master>
        <DuaWrapper />
      </Master>
    );
  }
}

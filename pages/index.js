import React, {Component} from 'react';
import Master from '../components/Layout/Master';
import DuaWrapper from '../components/Container/DuaContainer'
import { Input  } from 'antd';

export default class Index extends Component {
    render(){
        
    return  <Master>
                <DuaWrapper/>
            </Master>
    }
}
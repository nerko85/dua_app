import React, {Component} from 'react';
import Layout from '../components/Layout';
import DuaWrapper from '../components/Container/DuaContainer'
import { Input  } from 'antd';

export default class Index extends Component {
    render(){
        
    return  <Layout>
                <DuaWrapper/>
            </Layout>
    }
}
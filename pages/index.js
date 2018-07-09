import React, {Component} from 'react';
import Layout from '../components/Layout';
import DuaWrapper from '../components/Container/DuaContainer'

export default class Index extends Component {
    render(){
    return  <Layout>
                <h1>Testiranje</h1>
                <DuaWrapper/>
            </Layout>
    }
}
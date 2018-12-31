import React, { Component } from 'react';
import Layout from '../components/Layout';
import LoginForm from '../components/Login/Login';
// import 'antd/dist/antd.less';
// // import Button from 'antd/lib/button'
// // import 'antd/lib/button/style/css'
// // import 'antd/lib/button/style'

export default class Login extends Component {
  render() {
    return (
      <Layout>
        <LoginForm />
      </Layout>
    );
  }
}

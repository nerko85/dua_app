import Head from 'next/head'
import Navigation from './Header/Navigation'
import Sidebar from './Sidebar/Sidebar';
// import Footer from './Footer/Footer'
import './Master.css';

import { Layout } from 'antd';
import { Row, Col, Input } from 'antd';
const { Header, Content, Footer } = Layout;

const Master = props => (
    <div>
        <Head>
            <title>Dua application</title>
            <link rel="stylesheet" href="/_next/static/style.css" />
            <link rel="stylesheet" href="../node_modules/antd/dist/antd.css"/>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/antd/3.7.0/antd.css'/>
        </Head>
        
        <Layout style={{ height: "100vh" }} >
            <Sidebar />
            <Layout>
                <Navigation/>
                <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                    {props.children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2016 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    </div>
)

export default Master;
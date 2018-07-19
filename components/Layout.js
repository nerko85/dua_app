// import Navigation from './Header/Navigation'
import Head from 'next/head'
import Navigation from './Layout/Header/Navigation'
// import Footer from './Layout/Footer/Footer'
import './Layout.css';
import SearchComponent from '../components/Forms/SearchComponent';
import { Row, Col, Input } from 'antd';


const Layout = (props) => ( 
    <div>
        <Head>
            <title>Dua application</title>
            <link rel="stylesheet" href="/_next/static/style.css" />
            <link rel="stylesheet" href="../node_modules/antd/dist/antd.css"/>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/antd/3.7.0/antd.css'/>
        </Head>
        <Navigation/>
        <br/><br/>
        <Row>
            <Col span={18} offset={3}>
                <SearchComponent />
            </Col>
        </Row>
        <Row gutter={16} type="flex" justify="center">
            {props.children}
        </Row>
    </div>
)

export default Layout;
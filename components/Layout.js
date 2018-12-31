import Head from 'next/head';
import Navigation from './Layout/Header/Navigation';
import './Layout.css';
import SearchComponent from './Forms/SearchComponent';
import { Row, Col } from 'antd';

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Dua application</title>
      <link rel="stylesheet" href="/_next/static/style.css" />
      <link rel="stylesheet" href="../node_modules/antd/dist/antd.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.7.0/antd.css"
      />
    </Head>
    <Navigation />

    <Row>
      <Col span={18} offset={3}>
        <SearchComponent />
      </Col>
    </Row>
    <Row gutter={16} type="flex" justify="center">
      {children}
    </Row>
  </div>
);

export default Layout;

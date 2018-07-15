// import Navigation from './Header/Navigation'
import Head from 'next/head'
import Navigation from './Header/Navigation'
import Footer from './Footer/Footer'
import './Layout.css';

const Layout = (props) => ( 
    <div>
        <Head>
            <title>Dua application</title>
            <link rel="stylesheet" href="/_next/static/style.css" />
            <link rel="stylesheet" href="../node_modules/antd/dist/antd.css"/>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/antd/3.7.0/antd.css'/>
        </Head>
        <Navigation/>
        {props.children}
        <Footer/>
    </div>
)

export default Layout;
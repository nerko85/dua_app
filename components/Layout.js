// import Navigation from './Header/Navigation'
import Head from 'next/head'
import Navigation from './Header/Navigation'
import Footer from './Footer/Footer'
import '.Layout.css';

const Layout = (props) => ( 
    <div>
        <Head>
            <title>Dua application</title>
        </Head>
        <Navigation/>
        {props.children}
        <Footer/>
    </div>
)

export default Layout;
import React from 'react';
import Link from 'next/link';
// import css from './Navigation.css';

const Navigation = (props) => {
    return (
        <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
            <li><Link href="/services"><a>Services</a></Link></li>
            <li><Link href="/contact"><a>Contact</a></Link></li>
        </ul>
    );
};

export default Navigation;
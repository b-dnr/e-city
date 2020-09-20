import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Layout.css'

function Layout(props) {
    return (
        <div>
            <Header />
            <div className='page-wrapper bg-light'>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout

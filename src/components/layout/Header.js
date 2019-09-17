import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList </h1><h6>(React App - Gustavo)</h6>
            <Link style={linkStyle} to="/">Index</Link> | <Link to="/about" style={linkStyle}>About this App</Link>
        </header>
    )
}

const headerStyle = {
    background: 'blue',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;
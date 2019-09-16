import React from 'react'

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList </h1><h6>(React App - Gustavo)</h6>
        </header>
    )
}

const headerStyle = {
    background: 'blue',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default Header;
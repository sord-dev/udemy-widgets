import React from 'react'

function Navbar() {
  return (
    <div className='ui secondary pointing menu' style={{marginBottom: '10px'}}>
    
    <a href="/" className="item">Wikidepia</a>
    <a href="/color" className="item">Color Dropdown</a>
    <a href="/translate" className="item">Translate</a>

    </div>
  )
}

export default Navbar
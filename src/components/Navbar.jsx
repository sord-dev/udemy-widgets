import React from 'react'
import Link from './Link'

function Navbar() {
  return (
    <div className='ui secondary pointing menu' style={{marginBottom: '10px'}}>
    
    <Link href="/" className="item">Wikidepia</Link>
    <Link href="/color" className="item">Color Dropdown</Link>
    <Link href="/translate" className="item">Translate</Link>

    </div>
  )
}

export default Navbar
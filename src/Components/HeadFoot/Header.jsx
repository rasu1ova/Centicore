import React from 'react'

function Header() {
  return (
    <header className='container'>
        <nav className='row'>
            <div className="logo">
                <h2>Logo_nomi</h2>
            </div>
            <ul className='row ul'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Pages</a></li>
                <li><a href="#">Address</a></li>
                <button className='btn'><a href="#">Send me</a></button>
            </ul>
        </nav>
    </header>
  )
}

export default Header
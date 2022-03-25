import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from "react-router-dom";
export default function Navbar(props) {
  return (
   
    <nav className={`navbar navbar-expand-lg navbar-${props.colors} bg-${props.colors}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/" style={{color:(props.colors==='light')?'black':'white'}}>{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/" style={{color:(props.colors==='light')?'black':'white'}}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about" style={{color:(props.colors==='light')?'black':'white'}}>{props.aboutText}</Link>
          </li>
        </ul>
            <div>
              <button className='btn btn-light'  onClick={()=>props.setTheme('light')}>
                     Light
              </button>
              <button className='btn btn-danger' onClick={()=>props.setTheme('red')}>
                     Red
              </button>
              <button className='btn btn-success' onClick={()=>props.setTheme('green')}>
                     green
              </button>
              <button className='btn btn-primary' onClick={()=>props.setTheme('blue')}>
                     blue
              </button>
            </div>
      </div>
    </div>
  </nav>

  )
}
Navbar.propTypes = {
    title:PropTypes.string.isRequired,
    aboutText:PropTypes.string.isRequired
}


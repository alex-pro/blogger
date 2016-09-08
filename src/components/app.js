import React, { Component } from 'react'
import { Link } from 'react-router'

class App extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-default'>
          <div className='container'>
            <div className='navbar-header'>
              <div className='navbar-brand'>Blogger</div>
            </div>
            <div id='navbar'>
              <ul className='nav navbar-nav navbar-right'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/articles'>Articles</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='container'>{this.props.children}</div>
      </div>
    )
  }
}

export default App

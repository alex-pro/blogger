import React, { Component } from 'react'
import ArticleList from './articles/list'
import ArticleForm from './articles/form'

class Articles extends Component {
  render() {
    return (
      <div id='articles' className='row'>
        <div className='col-md-6'>
          <ArticleForm/>
        </div>
        <div className='col-md-6'>
          <ArticleList/>
        </div>
      </div>
    )
  }
}

export default Articles

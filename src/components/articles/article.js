import React, { Component } from 'react'

class Article extends Component {

  render() {
    let article = this.props.article

    return (
      <div key={article.id} className='list-group'>
        <div className='list-group-item list-group-item-body'>
          <div className='row'>
            <div className='col-md-6'>
              <h4 className='list-group-item-heading'>Title</h4>
              <p className='list-group-item-text'>{article.title}</p>
            </div>
            <div className='col-md-6'>
              <h4 className='list-group-item-heading'>Body</h4>
              <p className='list-group-item-text'>{article.body}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Article

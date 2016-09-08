import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toastr } from 'react-redux-toastr'
import { ApiActions } from '../../actions/api'

class Article extends Component {
  delete(id) {
    this.props.dispatch(ApiActions.deleteArticle({id: id})).then((response)=> {
      if(response.status == 'resolved') {
        toastr.success('Successfully deleted')
      }
    })
  }

  render() {
    let article = this.props.article

    return (
      <div key={article.id} className='list-group'>
        <div className='list-group-item list-group-item-body'>
          <div className='row'>
            <div className='col-md-12'>
              <p className='pull-left list-group-item-text'>{article.title}</p>
              <span onClick={() => this.delete(article.id)} className='glyphicon glyphicon-trash pull-right red'></span>
            </div>
            <div className='col-md-12'>
              <p className='list-group-item-text'>{article.body}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Article)

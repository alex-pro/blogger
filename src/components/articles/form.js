import React, { Component } from 'react'
import { reduxForm, reset } from 'redux-form'
import { toastr } from 'react-redux-toastr'
import { ApiActions } from '../../actions/api'

const validate = (values) => {
  const errors = {}
  if (!values.title) {
    errors.title = 'Required'
  } else if (values.title.length < 5) {
    errors.title = 'Sorry, title is too short'
  } else if (values.title.length > 50) {
    errors.title = 'Sorry, title is too long'
  }
  if (!values.body) {
    errors.body = 'Required'
  } else if (values.body.length < 10) {
    errors.body = 'Sorry, body is too short'
  } else if (values.body.length > 1000) {
    errors.body = 'Sorry, body is too long'
  }
  return errors
}

class ArticleForm extends Component {
  create(articleParams) {
    this.props.dispatch(
      ApiActions.createArticle(
        { article: articleParams }
      )
    ).then((response)=> {
      if(response.status == 'resolved') {
        this.props.dispatch(reset('article'));
        toastr.success('Successfully created')
      }
    })
  }

  render() {
    const {fields: {title, body}, handleSubmit} = this.props

    return (
      <form onSubmit={handleSubmit(data => {this.create(data)})}>
        <h1 className='text-center'>Create a new article</h1>
        <div className='form-group'>
          <input type='text' className='form-control' placeholder='Title' {...title} />
          {title.error && <div className='help-block'>{title.error}</div>}
        </div>
        <div className='form-group'>
          <textarea rows='4' className='form-control' placeholder='Body' {...body} />
          {body.error && <div className='help-block'>{body.error}</div>}
        </div>
        <div className='row'>
          <div className='col-md-offset-5 col-md-7'>
            <button className='btn btn-success' type='submit'>
              Create
            </button>
          </div>
        </div>
      </form>
    )
  }
}

ArticleForm = reduxForm({
  form: 'article',
  fields: ['title', 'body'],
  validate
})(ArticleForm);

export default ArticleForm

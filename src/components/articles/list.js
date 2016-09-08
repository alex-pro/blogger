import React, { Component } from 'react'
import { connect } from 'react-redux'
import Article from './article'
import { ApiActions } from '../../actions/api'

class ArticleList extends Component {
  componentDidMount() {
    this.props.dispatch(ApiActions.fetchArticles())
  }

  render() {
    let articles = this.props.articles

    return (
      <div>
        <h1 className='text-center'>Articles</h1>
        {articles.map(article => <Article key={article.id} article={article}/>)}
      </div>
    )
  }
}

function select(state) {
  return {
    articles: state.article.items
  }
}

export default connect(select)(ArticleList)

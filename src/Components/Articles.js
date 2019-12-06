import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions/articleActions';

class Articles extends Component {

  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    const { error, loading, articles } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <ul>
        {articles.map(article => {
          return (
            <li key={article.article_id}>{article.title}</li>
          )
        })}
      </ul>
    );
  }
}

function mapState(state) {
  return {
    articles: state.articles.articles,
    loading: state.articles.loading,
    error: state.articles.error
  }  
}

const mapDispatch = {
  fetchArticles
}

export default connect(mapState, mapDispatch)(Articles);
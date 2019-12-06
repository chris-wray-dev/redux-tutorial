import axios from 'axios';
const request = axios.create({ baseURL: 'https://chris-nc-news.herokuapp.com/api'})

export const fetchArticles = () => {
  return dispatch => {
    dispatch(fetchArticlesBegin());
    return request.get('/articles', { params: {limit: 50} })
      .then(({ data: { articles } }) => {
        dispatch(fetchArticlesSuccess(articles));
        return articles;
      })
      .catch(error => {
        dispatch(fetchArticlesFailure(error));
      })
  }
}

export const FETCH_ARTICLES_BEGIN = 'FETCH_ARTICLES_BEGIN';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE';

export const fetchArticlesBegin = () => ({
  type: FETCH_ARTICLES_BEGIN
});

export const fetchArticlesSuccess = (articles) => ({
  type: FETCH_ARTICLES_SUCCESS,
  payload: { articles }
});

export const fetchArticlesFailure = (error) => ({
  type: FETCH_ARTICLES_FAILURE,
  payload: { error }
});
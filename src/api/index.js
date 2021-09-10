import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nc-news-sql-dentednerd.herokuapp.com/api',
});

export const fetchArticles = async (topic, page, sortBy) => {
  const url = `/articles`;
  const { data } = await api.get(url, {
    params: {
      topic,
      p: page,
      sort_by: sortBy
    }
  });
  return data.articles;
};

export const fetchArticleById = async (id) => {
  const url = `/articles/${id}`;
  const { data } = await api.get(url);
  return data.article;
};

export const fetchUserByUsername = async (username) => {
  const url = `/users/${username}`;
  const { data } = await api.get(url);
  return data.user;
};

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

export const fetchArticlesByUser = async (username) => {
  const url = `/articles/by/${username}`;
  const { data } = await api.get(url);
  return data.articles;
}

export const fetchArticleById = async (id) => {
  const url = `/articles/${id}`;
  const { data } = await api.get(url);
  return data.article;
};

export const fetchUsers = async () => {
  const url = '/users';
  const { data } = await api.get(url);
  return data.users;
};

export const fetchUserByUsername = async (username) => {
  const url = `/users/${username}`;
  const { data } = await api.get(url);
  return data.user;
};

export const fetchCommentsByArticleId = async (id) => {
  const url = `/articles/${id}/comments`;
  const { data } = await api.get(url);
  return data.comments;
};

export const fetchCommentsByUser = async (username) => {
  const url = `/comments/by/${username}`;
  const { data } = await api.get(url);
  return data.comments;
};

export const deleteComment = async (commentId) => {
  const url = `/comments/${commentId}`;
  const response = await api.delete(url);
  return response;
}

export const fetchTopics = async () => {
  const url = '/topics';
  const { data } = await api.get(url);
  return data.topics;
};

export const voteOnComment = async (commentId, vote) => {
  const url = `/comments/${commentId}`;
  const { data } = await api.patch(url, {
    inc_votes: vote
  });
  return data.comment;
}

export const voteOnArticle = async (articleId, vote) => {
  const url = `/articles/${articleId}`;
  const { data } = await api.patch(url, {
    inc_votes: vote
  });
  return data;
}

export const postComment = async (articleId, username, comment) => {
  const newComment = {
    username: username,
    body: comment
  };
  const { data } = await api.post(
    `/articles/${articleId}/comments`,
    newComment
  );
  return data.comment;
};

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchArticleById } from '../../api';

export default function ArticleLink({ articleId }) {
  const [error, setError] = useState(false);
  const [article, setArticle] = useState({});

  useEffect(() => {
    let isMounted = true;
    fetchArticleById(articleId)
      .then((article) => { if (isMounted) setArticle(article) })
      .catch((err) => { if (err) setError(true); });
    return () => { isMounted = false };
  });

  if (error) return null;

  return (
    <Link to={`/articles/${article.article_id}`}>
      {article.title}
    </Link>
  );
}

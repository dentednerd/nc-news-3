import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams,  } from 'react-router-dom';
import { fetchArticleById } from '../api';

export default function Article() {
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [article, setArticle] = useState({});
  // const [comments, setComments] = useState([]);

  useEffect(() => {
    let isMounted = true;
    fetchArticleById(id)
      .then((article) => { if (isMounted) setArticle(article) })
      .then(() => setIsLoading(false))
      .catch((err) => { if (err) setError(true); });
    return () => { isMounted = false };
  }, [id]);

  if (error || isLoading) return null;

  return (
    <section className="content">
      <article>
        <h2>{article.title}</h2>
        <Link to={`/users/${article.author}`}>{article.author}</Link>
        <p>{article.body}</p>
        <p>{article.created_at}</p>
      </article>
    </section>
  );
}

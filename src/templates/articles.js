import { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { fetchArticles } from '../api';
import usePrevious from '../hooks/usePrevious';
import Card from '../molecules/card';

export default function Articles() {
  let { topic } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState('created_at');
  const prevTopic = usePrevious(topic);

  useEffect(() => {
    let isMounted = true;
    fetchArticles(topic, page, sortBy)
      .then((articles) => { if (isMounted) setArticles(articles); })
      .then(() => setIsLoading(false))
      .catch((err) => { if (err) setError(true) });
    return () => isMounted = false;
  }, [topic, page, sortBy]);

  useEffect(() => {
    if (topic !== prevTopic) {
      setPage(1);
    }
  }, [topic, prevTopic]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (error) return <Redirect to="/404" />;
  if (isLoading) return "Loading...";

  return (
    <section className="content">
      {articles.map((article) => (
        <Card key={article.article_id} article={article} />
      ))}
    </section>
  )
}

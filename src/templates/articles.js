import { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { fetchArticles } from '../api';
import usePrevious from '../hooks/usePrevious';
import { styled } from '../stitches.config';
import LoadingSpinner from '../atoms/loading-spinner';
import Card from '../molecules/card';
import HomeHeader from '../molecules/home-header';
import TopicHeader from '../molecules/topic-header';
import Pagination from '../molecules/pagination';

export default function Articles() {
  let { topic } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const prevTopic = usePrevious(topic);

  useEffect(() => {
    let isMounted = true;
    fetchArticles(topic, page, 'created_at')
      .then((articles) => { if (isMounted) setArticles(articles); })
      .then(() => setIsLoading(false))
      .catch((err) => { if (err) setError(true) });
    return () => isMounted = false;
  }, [topic, page]);

  useEffect(() => {
    if (topic !== prevTopic) {
      setPage(1);
    }
  }, [topic, prevTopic]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (error) return <Redirect to="/404" />;
  if (isLoading) return <LoadingSpinner />;

  const ArticlesGrid = styled('section', {
    display: 'grid',
    gap: '$default',
    overflow: 'hidden',
    paddingBottom: '$default',

    '@bp1': {
      gridTemplateColumns: 'repeat(2, 1fr)',

      '*:nth-child(3n + 1)': {
        gridColumn: '1 / 3'
      }
    }
  });

  return (
    <section className="content">
      {topic ? <TopicHeader /> : <HomeHeader />}
      <ArticlesGrid>
        {articles.map((article) => (
          <Card key={article.article_id} article={article} />
        ))}
      </ArticlesGrid>
      <Pagination page={page} setPage={setPage} pageLength={articles.length} />
    </section>
  )
}

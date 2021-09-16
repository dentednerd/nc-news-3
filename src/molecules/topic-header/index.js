import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTopics } from '../../api';
import { formatTitle } from '../../utils';
import PageHeading from '../../atoms/page-heading';

export default function TopicHeader() {
  const { topic } = useParams();
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics()
      .then((topics) => setTopics(topics));
    return;
  }, []);

  const currentTopic = topics.filter((cat) => cat.slug === topic)[0];

  if (!currentTopic) return null;

  return (
    <PageHeading>
      <h2>{formatTitle(currentTopic.slug)}</h2>
      <p>{currentTopic.description}</p>
    </PageHeading>
  );
}

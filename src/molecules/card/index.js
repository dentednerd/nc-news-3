import { Link } from 'react-router-dom';
import { styled } from '../../stitches.config';

export default function Card({ article }) {
  const StyledCard = styled(Link, {
    display: 'block',
    backgroundColor: 'white',
    padding: '$default',
    marginBottom: '$default',
    border: 'solid 1px $colors$darkBlue'
  });

  return (
    <StyledCard to={`/articles/${article.article_id}`}>
      <h2>{article.title}</h2>
      <div className="content">
        {article.author}
        {article.topic}
      </div>
    </StyledCard>
  );
}

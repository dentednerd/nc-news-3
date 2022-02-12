import { useHistory } from 'react-router-dom';
import { styled } from '../../stitches.config';
import images from '../../assets';
import User from '../../atoms/user';

export default function Card({ article, hideUser }) {
  const history = useHistory();

  if (!article) return null;

  const { topic, article_id } = article;
  const image = images[topic][article_id % 3]

  const StyledCard = styled('section', {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: 'solid 1px $colors$blue',
    borderBottom: 'solid 1px $colors$blue',
    cursor: 'pointer',
    maxWidth: '100%',

    '@supports(aspect-ratio: 16 / 9)': {
      aspectRatio: '16 / 9',
    },

    'div.text': {
      color: 'white',
      background: `-webkit-linear-gradient(top, $colors$blue 0%, $colors$darkBlue 100%),
      -webkit-radial-gradient(center bottom, $colors$blue 0%, black 70%)`,
      padding: '$default',
      width: '100%',
      textShadow: '$default',
    }
  });

  return (
    <StyledCard onClick={() => history.push(`/articles/${article.article_id}`)}>
      <div className="text">
        <h3>{article.title}</h3>
        {!hideUser && <User username={article.author} noLink />}
      </div>
    </StyledCard>
  );
}

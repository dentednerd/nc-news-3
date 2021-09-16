import { useHistory } from 'react-router-dom';
import { styled } from '../../stitches.config';
import User from '../../atoms/user';

export default function Card({ article, hideUser }) {
  const history = useHistory();

  const images = {
    football: "https://ugc.futurelearn.com/uploads/images/90/2d/902d0c48-095e-4919-81aa-4b8f4d3f198c.jpg",
    cooking: "https://www.yesmagazine.org/wp-content/uploads/imports/36a0edc6dcbf4466ae71d0548f94ff43.jpg",
    coding: "https://miro.medium.com/max/3200/0*QUqE4WGF8_cC9bIl.jpg"
  }

  const StyledCard = styled('section', {
    backgroundImage: `url(${images[article.topic]})`,
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

import { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import {
  fetchArticleById,
  fetchCommentsByArticleId
} from '../api';
import { styled } from '../stitches.config';
import LoadingSpinner from '../atoms/loading-spinner';
import Time from '../atoms/time';
import User from '../atoms/user';
import Comment from '../molecules/comment';
import AddComment from '../molecules/add-comment';
import Voter from '../molecules/voter';

export default function Article() {
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let isMounted = true;
    fetchArticleById(id)
      .then((article) => { if (isMounted) setArticle(article) })
      .catch((err) => { if (err) setError(true); });
    return () => { isMounted = false };
  }, [id, error]);

  useEffect(() => {
    if (error) return;
    fetchCommentsByArticleId(id)
      .then((comments) => setComments(comments))
      .then(() => setIsLoading(false));
  }, [id, error]);

  if (error) return <Redirect to="/404" />;
  if (isLoading) return <LoadingSpinner />;

  const images = {
    football: "https://ugc.futurelearn.com/uploads/images/90/2d/902d0c48-095e-4919-81aa-4b8f4d3f198c.jpg",
    cooking: "https://www.yesmagazine.org/wp-content/uploads/imports/36a0edc6dcbf4466ae71d0548f94ff43.jpg",
    coding: "https://miro.medium.com/max/3200/0*QUqE4WGF8_cC9bIl.jpg"
  }

  const StyledArticle = styled('article', {
    header: {
      width: '100%',
      backgroundImage: `url(${images[article.topic]})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'center',
      alignItems: 'center',

      '@supports(aspect-ratio: 16 / 9)': {
        aspectRatio: '16 / 9'
      },

      h2: {
        color: 'white',
        backgroundColor: '$darkBlue',
        padding: '$default',
        maxWidth: '800px'
      },
    },

    'section.content': {
      backgroundColor: '$lightBlue',
      borderTop: 'solid 1px $colors$blue',
      borderBottom: 'solid 1px $colors$blue',
      margin: '$default auto',

      'div.byline': {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '$default'
      }
    },

    'section.comments': {
      display: 'grid',
      gap: '$default',
      paddingBottom: '$default'
    }
  });

  return (
    <StyledArticle>
      <header>
        <h2>{article.title}</h2>
      </header>
      <section className="content">
        <div className="byline">
          <User username={article.author} />
          <Time timestamp={article.created_at} long />
          <Voter
            articleId={article.article_id}
            initialVotes={article.votes}
          />
        </div>
        <p>{article.body}</p>
      </section>
      <AddComment
        articleId={article.article_id}
        comments={comments}
        setComments={setComments}
      />
      <section className="comments">
        {comments.map((comment) => (
          <Comment
            key={comment.comment_id}
            comment={comment}
            comments={comments}
            setComments={setComments}
          />
        ))}
      </section>
    </StyledArticle>
  );
}

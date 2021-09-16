import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  fetchUserByUsername,
  fetchArticlesByUser,
  fetchCommentsByUser
} from '../api';
import { styled } from '../stitches.config';
import ArticleTitle from '../atoms/article-title';
import PageHeading from '../atoms/page-heading';
import Card from '../molecules/card';
import Comment from '../molecules/comment';

export default function UserProfile() {
  const { username } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useState({});
  const [articles, setArticles] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let isMounted = true;

    fetchUserByUsername(username)
      .then((user) => { if (isMounted) setUser(user) })
      .then(() => setIsLoading(false))
      .catch((err) => { if (err) setError(true); });

      return () => isMounted = false;
  }, [username]);

  useEffect(() => {
    let isMounted = true;

    fetchArticlesByUser(username)
      .then((articles) => { if (isMounted) setArticles(articles) })
      .catch((err) => { if (err) setError(true); });

    return () => isMounted = false;
  }, [username]);

  useEffect(() => {
    let isMounted = true;

    fetchCommentsByUser(username)
      .then((comments) => { if (isMounted) setComments(comments) })
      .then(() => setIsLoading(false))
      .catch((err) => { if (err) setError(true); });

    return () => isMounted = false
  }, [username])

  if (error || isLoading) return null;

  const ProfileGrid = styled('section', {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '$default',
    margin: '1rem 0',

    'div.comment-on': {
      backgroundColor: '$blue',
      color: 'white',
      height: 'auto',

      'p.article-link': {
        padding: '$default $default 0'
      }
    },

    variants: {
      blue: {
        true: {
          backgroundColor: '$lightBlue',
          borderTop: 'solid 1px $colors$blue',
          borderBottom: 'solid 1px $colors$blue',
          padding: '$default'
        }
      }
    }
  });

  return (
    <section className="content">
      <PageHeading>
        <h2>{user.name}</h2>
      </PageHeading>
      {articles && (
        <ProfileGrid>
          {articles.map((article) => (
            <Card
              key={article.article_id}
              article={article}
              hideUser
            />
          ))}
        </ProfileGrid>
      )}
      {comments && (
        <ProfileGrid blue>
          {comments.map((comment) => (
            <div
              key={comment.comment_id}
              className="comment-on"
            >
              <p className="article-link">
                on&nbsp;
                <ArticleTitle articleId={comment.article_id} />
                ...
              </p>
              <Comment
                comment={comment}
                comments={comments}
                setComments={setComments}
                hideUser
              />
            </div>
          ))}
        </ProfileGrid>
      )}
    </section>
  )
}

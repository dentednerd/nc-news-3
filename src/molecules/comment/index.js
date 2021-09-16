import { deleteComment } from '../../api';
import { styled } from '../../stitches.config';
import { GetUser } from '../../hooks/UserContext';
import Time from '../../atoms/time';
import User from '../../atoms/user';
import Voter from '../../molecules/voter';

export default function Comment({
  comment,
  comments,
  setComments,
  hideUser
}) {
  const { username } = GetUser();
  if (!comment) return null;

  const StyledComment = styled('section', {
    backgroundColor: '$blue',
    color: 'white',
    padding: '$default',
    width: 'calc(100% - 2rem)',
    maxWidth: '800px',
    margin: '0 auto',

    'p.body': {
      marginBottom: '$default'
    },

    'div.comment-byline': {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: '$default'
    },

    img: {
      height: '1.5rem',
      width: '1.5rem',
      cursor: 'pointer'
    },
  });

  const handleDelete = () => {
    deleteComment(comment.comment_id).then(() => {
      const updatedComments = comments.filter((otherComment) => otherComment.comment_id !== comment.comment_id);
      setComments(updatedComments);
    });
  }

  return (
    <StyledComment>
      <p className="body">{comment.body}</p>
      <div className="comment-byline">
        {!hideUser && <User username={comment.author} />}
        <Time timestamp={comment.created_at} />
        <Voter
          commentId={comment.comment_id}
          initialVotes={comment.votes}
        />
        {username === comment.author && (
          <img
            src="https://img.icons8.com/ios/50/000000/trash--v1.png" alt="Delete this comment"
            onClick={handleDelete}
          />
        )}
      </div>
    </StyledComment>
  );
}







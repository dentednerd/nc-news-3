import { useState } from 'react';
import { styled } from '../../stitches.config';
import { voteOnComment, voteOnArticle } from '../../api';

export default function Voter({ articleId, commentId, initialVotes }) {
  const [votes, setVotes] = useState(initialVotes);
  const [hasVoted, setHasVoted] = useState(false);

  const vote = (vote) => {
    if (hasVoted) return;
    if (commentId) voteOnComment(commentId, vote).then(() => {
      setVotes(votes + vote);
      setHasVoted(true);
    });
    if (articleId) voteOnArticle(articleId, vote).then(() => {
      setVotes(votes + vote);
      setHasVoted(true);
    });
  }

  const StyledVoter = styled('section', {
    height: '2rem',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',

    img: {
      height: '1.5rem',
      width: '1.5rem',
      cursor: 'pointer'
    },

    span: {
      margin: '0 0.25rem',
      fontSize: '$0',
      lineHeight: '$0'
    }
  });

  return (
    <StyledVoter>
      <img src="https://img.icons8.com/ios/50/000000/thumb-up--v1.png" onClick={() => vote(1)} alt="upvote" />
      <span>{votes}</span>
      <img src="https://img.icons8.com/ios/50/000000/thumbs-down.png" onClick={() => vote(-1)} alt="downvote" />
    </StyledVoter>
  );
}

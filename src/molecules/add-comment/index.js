import React, { useState, useRef } from 'react';
import { GetUser } from '../../hooks/UserContext';
import { styled } from '../../stitches.config';
import { postComment } from '../../api';
import Button from '../../atoms/button';

export default function AddComment({
  articleId,
  comments,
  setComments
}) {
  const { username } = GetUser();
  const inputRef = useRef(null);
  const [newComment, setNewComment] = useState('');

  const handleChange = () => {
    setNewComment(inputRef.current.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(articleId, username, newComment)
      .then((addedComment) => setComments([...comments, addedComment]))
      .then(() => setNewComment(''))
      .catch((err) => console.log(err));
  };

  const StyledForm = styled('form', {
    backgroundColor: '$grey',
    borderTop: 'solid 1px $colors$blue',
    borderBottom: 'solid 1px $colors$blue',
    padding: '$default',
    margin: '0 auto $default',
    display: 'grid',
    gridTemplateRows: 'repeat(2, auto)',
    gridTemplateColumns: '1fr',
    gap: '$default',
    justifyItems: 'center',
    alignItems: 'center',
    maxWidth: '800px',

    '@bp1': {
      gridTemplateRows: '1fr',
      gridTemplateColumns: '2fr 1fr',
    },

    input: {
      border: 'solid 1px $colors$blue',
      padding: '0.5rem',
      fontFamily: '$body',
      fontSize: '$1',
      color: '$darkBlue',
      width: '100%',
      margin: '0 $space$default',
    }
  });

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        autoFocus
        ref={inputRef}
        type="text"
        placeholder="Add your comment..."
        value={newComment}
        onChange={handleChange}
      />
      <Button type="submit" text="Comment" allRound />
    </StyledForm>
  );
}

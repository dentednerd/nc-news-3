import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserByUsername } from '../api';

export default function UserProfile() {
  const { username } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    let isMounted = true;

    fetchUserByUsername(username)
      .then((user) => { if (isMounted) setUser(user) })
      .then(() => setIsLoading(false))
      .catch((err) => { if (err) setError(true); });

    return () => isMounted = false;
  });

  if (error || isLoading) return null;

  return (
    <section className="content">
      {user.name}
      {user.username}
    </section>
  )
}

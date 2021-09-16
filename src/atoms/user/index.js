import { useEffect, useState  } from "react";
import { Link } from 'react-router-dom';
import { fetchUserByUsername } from '../../api';

export default function User({ username, noLink }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    let isMounted = true;
    fetchUserByUsername(username)
      .then((user) => { if (isMounted) setUser(user) });
    return () => isMounted = false;
  }, [username]);

  if (!user) return null;

  const Element = noLink ? 'span' : Link;

  return (
    <Element to={`/users/${user.username}`}>
      {user.name}
    </Element>
  );
};

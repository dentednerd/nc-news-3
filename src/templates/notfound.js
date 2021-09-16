import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <section className="content">
      <h2>Oops.</h2>
      <p>That there's broken, chief.</p>
      <p>
        <Link to="/">Head on home.</Link>
      </p>
    </section>
  );
}

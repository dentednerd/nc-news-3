import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <section className="content">
      <h2>What's this then?</h2>
      <p>Northcoders News is a social news aggregation, web content rating, and discussion website, featuring stories arranged by topic. Each story can be up- or down-voted, and users can comment and vote upon each story. This project is created from a sprint on the <a href="https://www.northcoders.com">Northcoders</a> bootcamp.</p>

      <h3>How did you build the back end?</h3>
      <p>The API is an <a href="https://expressjs.com/">Express</a> server on top of a <a href="https://www.postgresql.org/">PostgreSQL</a> database, hosted on <a href="https://www.heroku.com">Heroku</a>.</p>
      <p><a href="https://github.com/dentednerd/nc-news-sql-dentednerd">Take a look at the back end repo on Github.</a></p>

      <h3>How did you build the front end?</h3>
      <p>The website is built in <a href="https://reactjs.org/">React</a>, as always, with an <a href="https://bradfrost.com/blog/post/atomic-web-design/">Atomic Design</a> approach to component creation. I used <a href="https://stitches.dev/">Stitches</a> for CSS-in-JS. The "login" implementation uses a combination of <a href="https://reactjs.org/docs/context.html">React Context</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">localStorage</a>.</p>
      <p><a href="https://github.com/dentednerd/nc-news-3">Take a look at the front end repo on Github.</a></p>

      <h3>What's the v3 about? Is this the third version of this website?</h3>
      <p>Yes! Now that I'm a Northcoders tutor, I picked the latest version of the NC News sprint in order to get some practice with SQL on the back end, and hooks on the front end, so that I can be better informed when helping students with this sprint. <a href="https://www.joeyimlay.dev/posts/northcoders-news-revisited/">The earliest versions of this project</a> were built with a MongoDB database, and Redux on the front end, because hooks weren't a thing in React yet. It may shock you to learn that I prefer hooks.</p>
    </section>
  );
}

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {
  Articles,
  Article,
  UserProfile
} from './templates';
import {
  Header,
  Footer
} from './organisms';
import globalStyles from './globalStyles';

function App() {
  globalStyles();

  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Articles />
          </Route>
          <Route path="/articles/:id">
            <Article />
          </Route>
          <Route path="/users/:username">
            <UserProfile />
          </Route>
          <Redirect to="/404" />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

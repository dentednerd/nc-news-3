import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {
  About,
  Articles,
  Article,
  NotFound,
  Users,
  UserProfile
} from './templates';
import {
  Header,
  Footer
} from './organisms';
import globalStyles from './globalStyles';
import UserProvider from './hooks/UserContext';

function App() {
  globalStyles();

  return (
    <UserProvider>
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <Articles />
            </Route>
            <Route path="/topic/:topic">
              <Articles />
            </Route>
            <Route path="/articles/:id">
              <Article />
            </Route>
            <Route exact path="/users">
              <Users />
            </Route>
            <Route path="/users/:username">
              <UserProfile />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/404">
              <NotFound />
            </Route>
            <Redirect to="/404" />
          </Switch>
        </main>
        <Footer />
      </Router>
    </UserProvider>
  );
}

export default App;

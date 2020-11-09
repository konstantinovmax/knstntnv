import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Footer from './Footer';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <>
      <div className="root">
        <div className="root__content">
          <Header />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/about-me">
              <AboutMe />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

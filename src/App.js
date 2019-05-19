import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { Profile } from './components/pages/Profile';
import { Portofolio } from './components/pages/Portofolio';
import { Contact } from './components/pages/Contact';
import { NoMatch } from './NoMatch';
import { NavigationBar } from './components/NavigationBar';
import { Layout } from './components/Layout';
import { Jumbotron } from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Jumbotron/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Layout>
              <Route path="/profile" component={Profile} />
              <Route path="/portofolio" component={Portofolio} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
              </Layout>
            </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;

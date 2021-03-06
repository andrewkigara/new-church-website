// ---- Functional Tools ---- //
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// ---- Components ---- //
import { Layout } from './Components/Layout';
import { Navbar } from './Components/Navbar';

// ---- Pages ---- //
import { Home } from './Components/Pages/Home';
import { About } from './Components/Pages/About';
import { Gallery } from './Components/Pages/Gallery';
import { Events } from './Components/Pages/Events';
import { Contribute } from './Components/Pages/Contribute';
import { Contact } from './Components/Pages/Contact';
import { NoMatch } from './Components/Pages/NoMatch';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Layout> */}
        <Navbar />
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/events" component={Events} />
              <Route path="/contribute" component={Contribute} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        {/* </Layout> */}
      </React.Fragment>
    )
  }
}

export default App;
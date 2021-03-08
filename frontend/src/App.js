// ---- Functional Tools ---- //
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// ---- Components ---- //
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';

// ---- Pages ---- //
import { Home } from './Components/Pages/Home/Home';
import { About } from './Components/Pages/About/About';
import { Gallery } from './Components/Pages/Gallery/Gallery';
import { Events } from './Components/Pages/EventsPage/Events';
import { Contribute } from './Components/Pages/Contribute/Contribute';
import { Contact } from './Components/Pages/Contact/Contact';
import { NoMatch } from './Components/Pages/NoMatch';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Navbar */}
        <Navbar />

        {/* Pages */}
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

        {/* Footer */}
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Displays from './Displays';

function App() {
  
    return (
      <Router>
        <Header />
        <div className="content">
          <Route path="/" exact component={Home} />
          <Route
            path="/series/"
            render={routeProps => (
              <Displays
                {...routeProps}
                programType="series"
                bannerTitle="Popular Series"
              />
            )}
          />
          <Route
            path="/movies/"
            render={routeProps => (
              <Displays
                {...routeProps}
                programType="movie"
                bannerTitle="Popular Movies"
              />
            )}
          />
        </div>
        <Footer />
      </Router>
    );
  
}

export default App

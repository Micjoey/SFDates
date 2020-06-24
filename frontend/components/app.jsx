import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal'
import SplashContainer from './splash/splash_container';
import NavBarContainer from './navbar/navbar_container';
import Footer from './footer/footer';
import { RenderDates } from './date_types/show_dates_based_on_type';

// import DateNumberContainer from './filterbar/date_number_filter';


const App = () => (
  <div className="app">
      <Modal/>
    <div className="header">
      <NavBarContainer />
    </div>
    <div className="content">
      <Switch>
        <AuthRoute exact path="/home" component={SplashContainer} /> 
        <AuthRoute exact path="/datesuggestions/" component={RenderDates} />
        <AuthRoute exact path="/datesuggestions/date_type_:date_type" component={RenderDates} />
        <AuthRoute exact path="/datesuggestions/date_cost_:cost" component={RenderDates} />
        <AuthRoute exact path="/datesuggestions/date_number_:date_number" component={RenderDates} />
        <AuthRoute exact path="/datesuggestions/location_:location" component={RenderDates} />

        <Redirect to="/home" />
      </Switch>
      {/* <footer className="footer"> */}
        <Route path='/' component={Footer}/>
      {/* </footer> */}
    </div>
  </div>
);

export default App;














{/* <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} /> */}
{/* <Route path="/benches/:benchId" component={BenchShowContainer} /> */}
{/* <Route exact path="/" component={SearchContainer} /> */}
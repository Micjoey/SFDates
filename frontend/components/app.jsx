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
// import Modal from './modal/modal'
import Splash from './splash/splash';
// import NavBarContainer from './navbar/navbar_container';
// import IndexDateContainer from './book/index_books_container'
// import ShowDateContainer from './book/show_book_container';
// import IndexShelvesContainer from './shelf/index_shelves_container';
// import Footer from './footer/footer';

const App = () => (
  <div className="app">
      {/* <Modal /> */}
    <header className="header">
      {/* <NavBarContainer /> */}
    </header>
    <div className="content">
      <Switch>
        <AuthRoute path="/" component={Splash} /> 
        {/* <ProtectedRoute exact path="/home" component={IndexDateContainer} /> */}
        {/* <ProtectedRoute exact path="/book/:bookId" component={ShowDateContainer}/> */}
        {/* <ProtectedRoute exact path="/shelf" component={IndexShelvesContainer} /> */}
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
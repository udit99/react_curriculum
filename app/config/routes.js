var React = require('react');
var ReactRouter = require('react-router');
var HomeComponent = require('../components/home');
var MainComponent = require('../components/main');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

debugger;
var Routes = (
  <Router history={hashHistory}>
    <Route path='/' component={MainComponent}>
      <IndexRoute component={HomeComponent} />
    </Route>
  </Router>
)

module.exports = Routes;

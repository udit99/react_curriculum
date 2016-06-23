var React = require('react');
var ReactRouter = require('react-router');
var HomeContainer = require('../containers/HomeContainer');
var MainComponent = require('../components/main');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Routes = (
  <Router history={hashHistory}>
    <Route path='/' component={MainComponent}>
      <IndexRoute component={HomeContainer} />
    </Route>
  </Router>
)

module.exports = Routes;

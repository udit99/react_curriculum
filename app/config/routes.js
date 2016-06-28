var React = require('react');
var ReactRouter = require('react-router');
var HomeContainer = require('../containers/HomeContainer');
var WeatherContainer = require('../containers/WeatherContainer');
var MainComponent = require('../components/main');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Routes = (
  <Router history={hashHistory}>
    <Route path='/' component={MainComponent}>
      <IndexRoute component={HomeContainer} />
      <Route path='/weather/:area' component={WeatherContainer} />
    </Route>
  </Router>
)

module.exports = Routes;

var React = require('react');
var ReactRouter = require('react-router');
var HomeContainer = require('../containers/HomeContainer');
var WeatherContainer = require('../containers/WeatherContainer');
var WeatherDetailsContainer = require('../containers/WeatherDetailsContainer');
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
      <Route path='/weather/:area/details' component={WeatherDetailsContainer} />
    </Route>
  </Router>
)

module.exports = Routes;

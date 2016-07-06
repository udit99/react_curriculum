var React = require('react');
var WeatherHelper = require('../utils/weather_helper')
var Weather = require('../components/weather.js')
var WeatherCollection = require('../components/weather_collection.js')
var Loading = require('../components/loading')

var WeatherContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },

  getInitialState: function(){
    return {
      isLoading: true,
      weatherInfo: []
    }
  },

  componentDidMount: function(){
    WeatherHelper.getWeeksWeather(this.props.routeParams.area).then(function(response){
      this.setState({
        isLoading: false,
        weatherInfo: response['data']['list'],
      })
    }.bind(this))
  },

  onDateClick: function(weatherData){
    debugger;
    this.context.router.push({
      pathname: '/weather/'+ this.props.routeParams.area +'/details',
      state: {
        weather: weatherData
      }
    })
  },

  render: function(){
    var me = this;
    if (this.state.isLoading){
      return <Loading/>
    }
    return (
      <WeatherCollection
        location={this.props.routeParams.area}
        isLoading={this.state.isLoading}
        weatherInfo={this.state.weatherInfo}
        onDateClick={me.onDateClick}
      />
    )
  }
})

module.exports = WeatherContainer;

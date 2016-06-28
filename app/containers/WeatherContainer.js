var React = require('react');
var WeatherHelper = require('../utils/weather_helper')
var Weather = require('../components/weather.js')

var WeatherContainer = React.createClass({

  getInitialState: function(){
    return {
      isLoading: true,
      weatherInfo: []
    }
  },

  componentDidMount: function(){
    this.setState({
      isLoading: false,
      weatherInfo: WeatherHelper.getWeeksWeather()
    })

  },

  render: function(){
    var me = this;
    return (
      <Weather
        isLoading={this.state.isLoading}
        weatherInfo={this.state.weatherInfo}
      />
    )
  }
})

module.exports = WeatherContainer;

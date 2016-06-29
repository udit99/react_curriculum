var React = require('react');
var WeatherHelper = require('../utils/weather_helper')
var Weather = require('../components/weather.js')
var WeatherCollection = require('../components/weather_collection.js')
var Loading = require('../components/loading')

var WeatherContainer = React.createClass({

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

  render: function(){
    var me = this;
    if (this.state.isLoading){
      return <Loading/>
    }
    return (
      <WeatherCollection
        isLoading={this.state.isLoading}
        weatherInfo={this.state.weatherInfo}
      />
    )
  }
})

module.exports = WeatherContainer;

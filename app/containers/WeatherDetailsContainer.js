var React = require('react');
var Weather = require('../components/weather.js')
var WeatherDetail = require('../components/weather_detail.js');


var WeatherDetailsContainer = React.createClass({

  render: function(){
    return (
      <WeatherDetail
        weatherData={this.props.location.state.weather}
      />
    )
  }
})

module.exports = WeatherDetailsContainer;

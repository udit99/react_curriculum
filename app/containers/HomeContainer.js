var React = require('react');
var LocationInput = require('../components/location_input')

var HomeContainer = React.createClass({
  getInitialState: function(){
    return {
      testValue: 2
    }
  },
  componentDidMount: function(){
    this.setState({
      testValue: 1
    })

  },
  render: function(){
    return (
      <div id='home'>
        <h1>Cool Weather App</h1>
        <LocationInput/>
      </div>
    )
  }
});

module.exports = HomeContainer;

var React = require('react');
var LocationInput = require('../components/location_input')

var HomeContainer = React.createClass({
  getInitialState: function(){
    return {
      testValue: 2
    }
  },
  onFormSubmit: function(e){
    e.preventDefault();
    alert('fuck yeah');
  },
  render: function(){
    var me = this;
    return (
      <div id='home'>
        <h1>Cool Weather App</h1>
        <LocationInput onFormSubmit={me.onFormSubmit}/>
      </div>
    )
  }
});

module.exports = HomeContainer;

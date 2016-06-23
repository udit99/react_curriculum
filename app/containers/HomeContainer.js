var React = require('react');
var LocationComponent = require('../components/location_input')

var HomeContainer = React.createClass({
  render: function(){
    return (
      <div id='home'>
        <h1>Hello Worldzzzzzzzz</h1>
        <LocationComponent foo='bar'/>
      </div>
    )
  }
});

module.exports = Home;

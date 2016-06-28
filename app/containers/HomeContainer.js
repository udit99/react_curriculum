var React = require('react');
var LocationInput = require('../components/location_input')

var HomeContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      location: ''
    }
  },
  onFormSubmit: function(e){
    e.preventDefault();
    var location = this.state.location;
    this.context.router.push('/weather/' + location);
  },
  handleUpdateLocation: function(e){
    console.log("setting state to " + e.target.value);
    this.setState({
      location: e.target.value
    })
  },
  render: function(){
    var me = this;
    return (
      <div id='home'>
        <h1>Cool Weather App</h1>
        <LocationInput
          onFormSubmit={me.onFormSubmit}
          onUpdateLocation={me.handleUpdateLocation}
          location={this.state.location}
        />
      </div>
    )
  }
});

module.exports = HomeContainer;

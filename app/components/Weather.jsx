var React = require('react');
var Form = require('WeatherForm');
var Feedback = require('WeatherFeedback');
var openWeatherMap = require('openWeatherMap');

// Do not declare functions in render method!
function renderMessage({ isLoading, location, temp }) {
	if (isLoading) {
		return <h3>Fetching weather...</h3>
	} else if ((temp === 0 && location) || (temp && location)) {
		return <Feedback location={location} temp={temp}/>;
	}
}

var Weather = React.createClass({
	getInitialState: function() {
		return {
			isLoading: false
		};
	},
	handleSearch: function (location) {
		this.setState({
			isLoading: true
		});

		//NOTE: arrow function
		openWeatherMap.getTemp(location).then((temp) => {
			//...and you can use this here!
			this.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		}, (errorMessage) => {
			this.setState({
				isLoading: false
			});

			alert(errorMessage);
		});
	},
	render: function () {
		return (
			<div>
				<h3>Get Weather</h3>
				<Form onSearch={this.handleSearch}/>
				{renderMessage(this.state)}
			</div>
		);
	}
});

module.exports = Weather;

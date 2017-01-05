var React = require('react');

//temps & location is similar to (props) and var {temp, location} = props inside
var WeatherFeedback = ({ temp, location }) => (
	<div>
		<p>And the weather in {location} is {temp}</p>
	</div>
);

module.exports = WeatherFeedback;

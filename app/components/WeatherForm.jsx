var React = require('react');

var WeatherForm = React.createClass({
	onFormSubmit: function (event) {
		event.preventDefault();

		var location = this.refs.location.value;

		if (location.length > 0) {
			this.refs.location.value = '';
			this.props.onSearch(location);
		}
	},
	render: function () {
		return (
			<div>
				<form onSubmit={(e) => this.onFormSubmit(e)}>
					<input type="text" ref="location" placeholder="Enter city name" />
					<button>Get Weather</button>
				</form>
			</div>
		);
	}

});

module.exports = WeatherForm;

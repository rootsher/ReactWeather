var React = require('react');
var {Link, IndexLink} = require('react-router');

//NOTE, TODO: move to class and use activeClassName.
var activeStyle = {
	fontWeight: 'bold'
};

var Nav = () => (
	<div>
		<h2>Nav Component</h2>
		<IndexLink to="/" activeClassName="active" activeStyle={activeStyle}>Get Weather</IndexLink>
		<Link to="/about" activeClassName="active" activeStyle={activeStyle}>About</Link>
		<Link to="/examples" activeClassName="active" activeStyle={activeStyle}>Examples</Link>
	</div>
);

module.exports = Nav;

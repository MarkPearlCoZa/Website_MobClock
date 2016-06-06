"use strict";

var TimerDisplay = React.createClass({
	render: function() {
		return (
			<div id='timer'>00:00</div>
		);
	},	
});

var TimerControls = React.createClass({
	render: function() {
		return (
			<div id="actions">
				<button id="runButton" className="actionButton" disabled="disabled">Start</button>
				<button id="stopButton" className="actionButton" disabled="disabled">Stop</button>
			 </div>
		);
	},	
});


var Timer = React.createClass({
	render: function() {
		return (
			<div id='container' className='init'>
				<TimerDisplay />
				<TimerControls />
			</div>
		);
	},	
});


var mainElement = document.querySelector("main");
ReactDOM.render(<Timer />, mainElement);

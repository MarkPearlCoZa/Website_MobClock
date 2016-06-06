"use strict";


var TimerControls = React.createClass({
	startTimerClick: function() {
		alert('start');
	},

	stopTimerClick: function() {
		alert('stop');
	},

	render: function() {
		return (
			<div>
				<div id='timer'>00:00</div>
				<div id="actions">
					<button className="actionButton" onClick={this.startTimerClick}>Start</button>
					<button className="actionButton" onClick={this.stopTimerClick}>Stop</button>
				</div>
			</div>
		);
	},	
});


var Timer = React.createClass({
	render: function() {
		return (
			<div id='container' className='init'>
				<TimerControls />
			</div>
		);
	},	
});


var mainElement = document.querySelector("main");
ReactDOM.render(<Timer />, mainElement);

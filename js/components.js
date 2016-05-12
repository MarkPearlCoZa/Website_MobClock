"use strict";


var TimerDisplay = React.createClass({
	render: function() {
		return (
			<div id='container' className='init'>
				<div id='timer'>00:00</div>
				<div id="actions">
					<button id="runButton" className="actionButton" disabled="disabled">Start</button>
					<button id="stopButton" className="actionButton" disabled="disabled">Stop</button>
				 </div>
			</div>
		);
	},	
});


var mainElement = document.querySelector("main");
ReactDOM.render(<TimerDisplay />, mainElement);

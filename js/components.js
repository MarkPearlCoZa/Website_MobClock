"use strict";

var TimerControls = React.createClass({
	displayName: 'TimerControls',

	startTimerClick: function () {
		alert('start');
	},

	stopTimerClick: function () {
		alert('stop');
	},

	render: function () {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'div',
				{ id: 'timer' },
				'00:00'
			),
			React.createElement(
				'div',
				{ id: 'actions' },
				React.createElement(
					'button',
					{ className: 'actionButton', onClick: this.startTimerClick },
					'Start'
				),
				React.createElement(
					'button',
					{ className: 'actionButton', onClick: this.stopTimerClick },
					'Stop'
				)
			)
		);
	}
});

var Timer = React.createClass({
	displayName: 'Timer',

	render: function () {
		return React.createElement(
			'div',
			{ id: 'container', className: 'init' },
			React.createElement(TimerControls, null)
		);
	}
});

var mainElement = document.querySelector("main");
ReactDOM.render(React.createElement(Timer, null), mainElement);
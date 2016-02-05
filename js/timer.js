/**
 * Created by Gareth.Stephenson1 on 2016-02-03.
 */
define(['states'], function (states) {

    return (function () {
        var _elapsed = 0;
        var _state = states.STOPPED;
        var _interval;
        var _tickEvent = document.createEvent('Event');
        _tickEvent.initEvent('tick', true, true);

        function padZero(unit) {
            return unit < 10 ? '0' + unit : unit;
        }

        function ceaseIntervalWithStatus(interval, state) {
            clearInterval(interval);
            _state = state;
        }

        return {
            start: function () {
                if (_state === states.STOPPED || _state === states.PAUSED) {
                    _interval = setInterval(function () {
                        _elapsed += 1;
                        document.dispatchEvent(_tickEvent);
                    }, 1000);
                    _state = states.RUNNING;
                    document.dispatchEvent(_tickEvent);
                }
            },

            pause: function () {
                ceaseIntervalWithStatus(_interval, states.PAUSED);
            },

            stop: function () {
                ceaseIntervalWithStatus(_interval, states.STOPPED);
                _elapsed = 0;
            },

            elapsed: function () {
                return _elapsed;
            },

            formattedTime: function () {
                var date = new Date(0);
                date.setSeconds(_elapsed);
                return padZero(date.getMinutes()) + ':' + padZero(date.getSeconds());
            },

            state: function () {
                return _state;
            }
        }
    })();
});
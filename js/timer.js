/**
 * Created by Gareth.Stephenson1 on 2016-02-03.
 */
define(['states'], function (states) {

    return (function () {
        var _elapsed = 0;
        var _state = states.STOPPED;
        var _interval;
        var _callBack;

        function padZero(unit) {
            return unit < 10 ? '0' + unit : unit;
        }

        function ceaseIntervalWithStatus(interval, state) {
            clearInterval(interval);
            _state = state;
        }

        return {
            start: function (callBack) {
                if (callBack && typeof(callBack) === 'function') {
                    _callBack = callBack;
                }
                if (_state === states.STOPPED || _state === states.PAUSED) {
                    _interval = setInterval(function () {
                        _elapsed += 1;
                        if (_callBack) _callBack();
                    }, 1000);
                    _state = states.RUNNING;
                    if (_callBack) _callBack();
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
/**
 * Created by Gareth.Stephenson1 on 2016-02-03.
 */
define(function () {

    return (function () {
        var _elapsed = 0;
        var _state = 'stopped';
        var _interval;
        var _tickEvent = document.createEvent('Event');
        _tickEvent.initEvent('tick', true, true);

        function padZero(unit) {
            return unit < 10 ? '0' + unit : unit;
        }

        return {
            start: function () {
                if (_state === 'stopped' || _state === 'paused') {
                    _interval = setInterval(function () {
                        _elapsed += 1;
                        document.dispatchEvent(_tickEvent);
                    }, 1000);
                    _state = 'running';
                    document.dispatchEvent(_tickEvent);
                }
            },

            pause: function () {
                clearInterval(_interval);
                _state = 'paused';
            },

            stop: function () {
                clearInterval(_interval);
                _state = 'stopped';
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
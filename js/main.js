/**
 * Created by Gareth.Stephenson1 on 2016-02-03.
 */
(function () {
    require.config({
        paths: {
            'jquery': 'https://code.jquery.com/jquery-2.2.0.min',
            'timer': '../js/timer'
        }
    });

    require(['jquery', 'timer'], function ($, timer) {
        $(function () {

            var container = $('#container');
            var runButton = $('#runButton');
            var stopButton = $('#stopButton');
            var timerDisplay = $('#timer');
            var timeout = 10 * 60;

            runButton.click(function () {
                container.removeClass('init');
                switch (timer.state()) {
                    case 'stopped':
                    {
                        timer.start();
                        $(this).text('Pause');
                        container.removeClass('timeout').addClass('running');
                        break;
                    }
                    case 'running':
                    {
                        timer.pause();
                        $(this).text('Resume');
                        container.removeClass('running').addClass('paused');
                        break;
                    }
                    case 'paused':
                    {
                        timer.start();
                        $(this).text('Pause');
                        container.removeClass('paused').addClass('running');
                        break;
                    }
                }
                stopButton.removeAttr('disabled');
            });

            stopButton.click(function () {
                timer.stop();
                container.removeClass('running').removeClass('paused').addClass('init');
                runButton.text('Start');
                $(this).attr('disabled', 'disabled');
            });

            $(document).on('tick', function () {
                timerDisplay.text(timer.formattedTime());

                if (timer.elapsed() >= timeout) {
                    timer.stop();
                    container.removeClass('running').addClass('timeout');
                    runButton.text('Start');
                    stopButton.attr('disabled', 'disabled');
                }
            });

            runButton.removeAttr('disabled');
        });
    });
})();
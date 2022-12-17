"use strict";
var speed = {
    'trigger': '#speed-compare',
    'target': '.modal_content .speedometer'
};
$(function () {
    $(speed.trigger).on('click', function () {
        setTimeout(function () {
            $(speed.target).each(function () {
                $(this).addClass('play');
            });
        }, 1000);
    });
});

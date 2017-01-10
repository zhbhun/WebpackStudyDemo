var readline = require('readline');
var assign = require('lodash/assign');
var throttle = require('lodash/throttle');
var outputSameline = function (str) {
    readline.clearLine(process.stdout, 0); // clear current text
    readline.cursorTo(process.stdout, 0); // move cursor to beginning of line
    process.stdout.write(str);
};
var outputNewline = function (str) {
    console.log(str);
};
module.exports = function (options) {
    options = assign({
        sameLine: process.stdout.isTTY,
        progressLength: 50,
        arrowHead: '>',
        arrowBody: '=',
        unfinished: '-',
        label: '[webpack] : ',
        throttle: 0
    }, options);
    var output = outputSameline;
    if (!options.sameLine) {
        output = outputNewline;
    }
    var handler = function (percentage, message) {
        var arrowLength = Math.floor(percentage * options.progressLength);
        var unfinishedLength = options.progressLength - arrowLength
        var finished = percentage === 1;
        if (finished) {
          output('')
        } else {
          output(options.label +
            '[' +
            (new Array(arrowLength).join(options.arrowBody)) +
            options.arrowHead +
            (new Array(unfinishedLength).join('-')) +
            '] ' +
            (percentage * 100).toFixed(2) + '%' +
            ' : ' + message
          );
        }
    };
    if (options.throttle > 0) {
        handler = throttle(handler, options.throttle);
    }
    return handler;
};

var iframeWidth = '800';
var iframeHeight = '600';

$(function() {
    $('.medium').qtip({
        content: {
            text:'<iframe id="frame" src="https://google.com"><p>Your browser does not support iframes.</p></iframe>'
        },
    });
});
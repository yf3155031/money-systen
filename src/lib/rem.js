/*eslint-disable */
(function (doc, win) {
    var docEl = doc.documentElement;
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) {
            return;
        }
        if (/Redmi Note 3/i.test(navigator.userAgent)) {
            // docEl.style.fontSize  = 50 * (clientWidth / (500 / (414 / 360))) + 'px';
            docEl.style.fontSize = 50 * (clientWidth / 375) + 'px';
        }
        else {
            docEl.style.fontSize = 50 * (clientWidth / 375) + 'px';
        }
    };
    if (!doc.addEventListener) {
        return;
    }
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
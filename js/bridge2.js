/**
 * Created by agust_000 on 2014/11/14.
 */

;(function() {
    var ios = /\((iPhone|iPad|iPod)/i.test(navigator.userAgent);
    if(!ios){
        return;
    }
    if (window.WebViewJavascriptBridge) { return; }
    var messagingIframe;
    var sendMessages = [];

    var CUSTOM_PROTOCOL_SCHEME = 'bridge';
    var SEND_URL = JSON.stringify({
        receive : 'WebViewJavascriptBridge.getMessage',
        callback : 'WebViewJavascriptBridge.runCallback'
    });

    var responseCallbacks = {};
    var uniqueId = 1;

    function _createQueueReadyIframe(doc, url) {
        if(messagingIframe){
            doc.documentElement.removeChild(messagingIframe);
        }
        url = url || CUSTOM_PROTOCOL_SCHEME + '://{}';
        messagingIframe = doc.createElement('iframe');
        messagingIframe.style.display = 'none';
        messagingIframe.src = url;
        doc.documentElement.appendChild(messagingIframe);
    }

    function callHandler(command, data, responseCallback) {
        var requestId = 'r_' + (uniqueId++) + '_' + new Date().getTime();
        var message = { id: requestId, command: command, data: (data || {}) };
        if (responseCallback) {
            responseCallbacks[requestId] = responseCallback;
        }
        sendMessages.push(message);
        _createQueueReadyIframe(document, CUSTOM_PROTOCOL_SCHEME + '://' + SEND_URL);
    }

    function getMessage() {
        var message = sendMessages.shift();
        if(!message){
            return "";
        }
        return JSON.stringify(message);
    }

    function runCallback(res) {
        var callback;
        if(!res){
            return;
        }

        res = JSON.parse(res);

        if(res && res.id && (res.id in responseCallbacks)){
            callback = responseCallbacks[res.id];
            callback(res.data);
            delete responseCallbacks[res.id];
        }
    }

    window.WebViewJavascriptBridge = {
        getMessage: getMessage,
        runCallback: runCallback,
        callHandler: callHandler
    };

    _createQueueReadyIframe(document);
})();

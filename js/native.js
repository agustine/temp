/**
 * Created by agust_000 on 2014/11/17.
 */

function boundNative(root){
    var ANDROID_NAMESPACE = 'proxyBridge';
    var functionRoot = window[ANDROID_NAMESPACE];
    var apis;
    var ios = /\((iPhone|iPad|iPod)/i.test(navigator.userAgent);
    var bridge = 'WebViewJavascriptBridge' in window ? WebViewJavascriptBridge : {};
    var uniqueId = 1;

    if(!ios){
        bridge.callHandler = function(handlerName, data, callback){
            var handler;
            var result;
            if(!functionRoot || !(handlerName in functionRoot)){
                return;
            }

            // 具体调用的方法
            handler = functionRoot[handlerName];
//            data = data || {};
            if(data){
                result = handler.call(functionRoot, JSON.stringify(data));
            } else {
                result = handler.call(functionRoot);
            }

            if(result) {
                result = JSON.parse(result);
            }

            callback && callback(result);
        };
    }

    function generateCallbackName(){
        return 'ar_' + (uniqueId++) + '_' + new Date().getTime();
    }

    root = root || {};
    if('native' in root){
        return;
    }
    root.native = {
        goBack: function(){
            bridge.callHandler('back');
        },
        popLogin: function(callback){
            var callbackName = generateCallbackName();
            window[callbackName] = function(token, intType){
                callback({token:token, intType:intType});
            }
            if(ios) {
                bridge.callHandler('userLogin', {}, callback);
            } else {
                bridge.callHandler('userLogin', {'callback': callbackName});
            }
        },
        getUserToken: function(token, callback){
            var callbackName = generateCallbackName();
            window[callbackName] = function(token, intType){
//                alert('收到native返回的token：' + token + ';intType:' + intType);
                callback({token:token, intType:intType});
            }
            if(ios) {
                bridge.callHandler('getUserToken', {'token': token}, callback);
            } else {
                bridge.callHandler('getUserToken', {'callback': callbackName, 'token': token});
            }
        }
    }
}

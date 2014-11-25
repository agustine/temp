/**
 * Created by Yexiaoyi on 2014/10/24.
 * 项目命名空间及通用方法定义
 */
var UserCenter = {};

// 对zepto的接口补充
;(function ($) {
    $.getScript = function(src, func) {
        var script = document.createElement('script');
        script.async = "async";
        script.src = src;
        if (func) {
            script.onload = func;
        }
        document.getElementsByTagName("head")[0].appendChild( script );
    }
})($);

// ajax api
UserCenter.api = {
//    baiduMap: 'http://api.map.baidu.com/getscript?v=2.0&ak=E4805d16520de693a3fe707cdc962045',
    baiduMap: 'http://api.map.baidu.com/getscript?v=2.0&ak=BSkSkBRxTSphsghmWerQf9bx',
    getParams: function(params){
        params = params || {};
        return $.extend(params, UserCenter.mainModel.getUserParams());
    },

    merchantsBase: 'merchants/',
    getMerchantsUrl: function(apiName){
        return this.merchantsBase + apiName;
    },

    postMerchantApi: function(action, data, success){
        $.ajax({
            url: UserCenter.api.getMerchantsUrl(action),
            type: 'post',
            traditional:true,
            data: JSON.stringify(UserCenter.api.getParams(data)),
            dataType: 'json',
            beforeSend: function (request) {
                request.setRequestHeader("content-type", "application/json");
            },
            success: function (res) {
                UserCenter.api.renewToken(res, function(){
                    success && success(res);
                }, function(){
                    UserCenter.api.postMerchantApi(action, data, success)
                });
            }
        });
    },

    /**
     * 返回后判断token是否过期或者用户没有登录的回调
     * @param res 响应正文
     * @param success 响应正确的回调函数
     * @param renewCallback token已过期或者没有登录的回调
     */
    renewToken: function(res, success, renewCallback){
        var token;
        if (res && res.Success) {
            UserCenter.dialog.hideLoading();
            success(res);
        } else if(res && res.StatusCode === 401) {
            UserCenter.dialog.showLoading();
            token = UserCenter.mainModel.get('token');
            UserCenter.native.getUserToken(token, function(res){
                if(res) {
                    res = res.constructor === String ? JSON.parse(res) : res;
                    UserCenter.mainModel.set(res);
                    renewCallback && renewCallback();
                }
            });
        }
    }
};

// 弹出框
UserCenter.dialog = (function(){
    var $alert = $('.mask-layer[data-usage="alert"]');
    var $loading = $('.mask-layer[data-usage="loading"]');
    var _alert = function(msg){
        $alert.find('.dialog-content').html(msg);
        $alert.addClass('show');
    };
    var _showLoading = function(){
        $loading.addClass('show');
    };
    var _hideLoading = function(){
        $loading.removeClass('show');
    };

    $alert.find('a').on('click', function(){
        $alert.removeClass('show');
    });

    return {
        alert: _alert,
        showLoading: _showLoading,
        hideLoading: _hideLoading
    }
})();

UserCenter.request = function(name){
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
};

UserCenter.getDate = function(ms){
    var result = new Date();
    result.setTime(ms);
    return result.getFullYear() + '-' + (result.getMonth() + 1) + '-' + result.getDate();
};


/**
 * Created by Yexiaoyi on 2014/10/24.
 */


UserCenter.MainModel = Backbone.Model.extend({
    isAuthed: function(){
        if(this.get('user'))
            return true;
        return false;
    },
    isActived: function(){
        return this.get('user') && this.get('user').actived;
    },
    setUser: function(user){
        this.set('user', user);
        return this;
    },

    getUserParams: function(){
//        return {
//            userToken: this.get('token')
//        }
        return {
            userid: 14038
        }
    }
});

UserCenter.BaseModel = Backbone.Model.extend({
    defaults:{
        loaded: 0
    },
    load: function() {
        var model = this;
        function init() {
            $.getJSON(
                UserCenter.api.getMerchantsUrl(model.apiName),
                UserCenter.api.getParams({}),
                function (res) {
                    UserCenter.api.renewToken(res, function () {
                        var data, loaded;
                        if (res.Data && res.Data.Items && res.Data.Items.length > 0) {
                            data = res.Data.Items[0];
                            loaded = model.get('loaded') + 1;
                            model.set(data);
                            model.set({loaded:loaded});
                        }
                    }, init);
                }
            );
        }
        init();
    }
});

// 商户信息模型
UserCenter.MerchantModel = UserCenter.BaseModel.extend({
    apiName: 'Detail'
});

// 商户热点模型
UserCenter.ShopWifiModel = UserCenter.BaseModel.extend({
    apiName: 'wifihotspots'
});

// 商户推广链接模型
UserCenter.ShopLink = UserCenter.BaseModel.extend({
    apiName: 'Links',
    disableShopLink: function(){
        var model = this;
        UserCenter.api.postMerchantApi('DisableLinks', {Id: model.get('Id')}, function(){
            model.set({IsEnabled: 0});
        });
    },
    enableShopLink: function(){
        var model = this;
        UserCenter.api.postMerchantApi('EnableLinks', {Id: model.get('Id')}, function(){
            model.set({IsEnabled: 1});
        });
    },
    updateShopLink: function(link){
        var model = this;
        UserCenter.api.postMerchantApi('Links', {Id: model.get('Id'), Link: link}, function(){
            model.set({IsEnabled: 1});
        });
    }
});
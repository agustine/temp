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
        var model = this;
//        return {
//            userToken: model.get('token')
//        }
        return {
            userid: 14038
        }
    },
    getPostAction: function(action){
        var splitChar = action.indexOf('?') > -1 ?
            '&' : '?';
//        return action + splitChar + 'UserToken=' + this.get('token');
        return action + splitChar + 'userid=14038';
    }
});

UserCenter.ItemModel = Backbone.Model.extend({});

UserCenter.ItemsCollection = Backbone.Collection.extend({
    model: UserCenter.ItemModel
});

UserCenter.BaseModel = Backbone.Model.extend({
    defaults:{
        noData: false,
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
                        if (res.Data && res.Data.Items) {
                            if(res.Data.Items.length === 0){
                                model.set({noData: true});
                            } else {
                                data = res.Data.Items[0];
                                loaded = model.get('loaded') + 1;
                                model.set(data);
                            }
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
UserCenter.ShopLinkModel = UserCenter.BaseModel.extend({
    apiName: 'Links',
    disableShopLink: function(callback){
        var model = this;
        UserCenter.api.postMerchantApi('DisabledLinks', {Id: model.get('Id')}, function(){
            model.set({IsEnabled: 0});
            callback && callback();
        });
    },
    enableShopLink: function(callback){
        var model = this;
        UserCenter.api.postMerchantApi('EnabledLinks', {Id: model.get('Id')}, function(){
            model.set({IsEnabled: 1});
            callback && callback();
        });
    },
    updateShopLink: function(name, link, callback, error){
        var model = this;
        UserCenter.api.postMerchantApi('Links',
            {
                Id: model.get('Id'),
                Name: name,
                Link: link
            },
            function(res){
                var data, loaded;
                if (res.Data && res.Data.Items && res.Data.Items.length > 0) {
                    data = res.Data.Items[0];
                    loaded = model.get('loaded') + 1;
                    model.set(data);
                    model.set({loaded:loaded});
                }
                callback && callback();
            },
            function(res){
                error && error(res);
            }
        );
    }
});
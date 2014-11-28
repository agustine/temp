/**
 * Created by Yexiaoyi on 2014/10/24.
 */

$(function(){
    // 绑定与native端通讯的方法
    boundNative(UserCenter);
    // 禁用浏览器默认的touchmove事件
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

    // 初始化主模型
    UserCenter.mainModel = new UserCenter.MainModel();
    // 设置token改变时兼容方法
    UserCenter.mainModel.on('change:token', function(){
        var token = this.get('token');
        var thisObj = this;
        var thisFunc = arguments.callee;
        if(token) {
//            $.getJSON(
//                UserCenter.api.getUrl('GetMemberCredit'),
//                { UserToken: token },
//                function (res) {
//                    PointsShop.api.renewToken(res, function(){
//                        if (res.Data) {
//                            PointsShop.mainModel.set(res.Data);
//                        }
//                    });
//                }
//            );
        }
    });
    // 获取当前用户token和类型
    UserCenter.mainModel.set({
        token: UserCenter.request('UserToken'),
        intType: UserCenter.request('intType')
    });

    /**
     * 检查指定模型实例是否初始化
     * 如果没有初始化则初始化
     * 完成后执行回调
     * @param instanceKey 实例标识
     * @param modelName 模型名称
     * @param callback 回调桉树
     */
    function checkModel(instanceKey, modelName, callback){
        var ThisModel = UserCenter[modelName];
        // 不能存在指定模型定义
        if(!ThisModel){
            return;
        }
        // 实例不存在
        if(!(instanceKey in UserCenter)){
            // 初始化商户主模型
            UserCenter[instanceKey] = new ThisModel();
            // 获取商户数据
            UserCenter[instanceKey].load();
        }
        // 执行回调
        callback && callback();
    }
//    /**
//     * 检查商户信息模型是否初始化
//     * 如果没有初始化则初始化
//     * 完成后执行回调
//     * @param callback 回调函数
//     */
//    function checkMerchantModel(callback) {
//        if(!UserCenter.merchantModel){
//            // 初始化商户主模型
//            UserCenter.merchantModel = new UserCenter.MerchantModel();
//            // 获取商户数据
//            UserCenter.merchantModel.load();
//        }
//        // 执行回调
//        callback && callback();
//    }
//    /**
//     * 检查商户信息模型是否初始化
//     * 如果没有初始化则初始化
//     * 完成后执行回调
//     * @param callback 回调函数
//     */
//    function checkShopWifiModel(callback) {
//        if(!UserCenter.shopWifiModel){
//            // 初始化商户主模型
//            UserCenter.shopWifiModel = new UserCenter.ShopWifiModel();
//            // 获取商户数据
//            UserCenter.shopWifiModel.load();
//        }
//        // 执行回调
//        callback && callback();
//    }



    // 路由定义
    var router = Backbone.Router.extend({

        /**
         * 路由规则
         */
        routes: {
            '': 'main', // 默认路径（管理我的商家）
            'main': 'main', // 主视图
            'follows': 'follows', // 我的关注
            'funs': 'funs', // 我的粉丝
            'favors': 'favors', // 收藏的商家
            'footprint': 'footprint', // 个人主页足迹
            'video': 'myVideo', // 个人主页视频
            'wifis': 'wifis', // Wi-Fi云备份
            'shop/:id': 'shop', // 商户主页
            'history': 'history', // 访问过的商户热点

            'manageShop': 'manageShop', // 管理我的商家
            'myShopInfo': 'myShopInfo', // 我的商家信息
            'visitors': 'visitors', // 访客列表
            'collectors': 'collectors', // 收藏我的用户
            'shopWifis': 'shopWifis', //  我的热点
            'manageShopLink': 'manageShopLink' // 推广链接
        },

        /**
         * 获取主视图模型数据
         */
        getMainModel: function(callback){
            if(!UserCenter.mainModel) {
                UserCenter.mainModel = new UserCenter.MainModel({});
            }
            callback();
        },
        /**
         * 主视图路由响应方法
         * 检查是否存在主视图的实例，没有则初始化一个主视图实例
         */
        main: function() {
            if(!UserCenter.mainView) {
                this.getMainModel(function(){
                    UserCenter.mainView = new UserCenter.MainView({model:UserCenter.mainModel});
                });
            } else {
                UserCenter.mainView.show();
            }
        },
        /**
         * 我的关注路由响应方法
         */
        follows: function() {
            if(!UserCenter.followsView) {
                this.getMainModel(function(){
                    UserCenter.followsView = new UserCenter.FollowsView({model:UserCenter.mainModel});
                });
            } else {
                UserCenter.followsView.show();
            }
        },
        /**
         * 我的粉丝路由响应方法
         */
        funs: function(){
            if(!UserCenter.funsView) {
                this.getMainModel(function(){
                    UserCenter.funsView = new UserCenter.FunsView({model:UserCenter.mainModel});
                });
            } else {
                UserCenter.funsView.show();
            }
        },
        /**
         * 收藏的商家路由响应方法
         */
        favors: function(){
            if(!UserCenter.favorShopsView) {
                this.getMainModel(function(){
                    UserCenter.favorShopsView = new UserCenter.FavorShopsView({model:UserCenter.mainModel});
                });
            } else {
                UserCenter.favorShopsView.show();
            }
        },
        /**
         * 个人主页足迹路由响应方法
         */
        footprint: function(){
            if(!UserCenter.footprintView) {
                this.getMainModel(function(){
                    UserCenter.footprintView = new UserCenter.FootprintView({model:UserCenter.mainModel});
                });
            } else {
                UserCenter.footprintView.show();
            }
        },
        /**
         * 个人主页连秀路由响应方法
         */
        myVideo: function(){
            if(!UserCenter.myVideoView) {
                this.getMainModel(function(){
                    UserCenter.myVideoView = new UserCenter.MyVideoView({model:UserCenter.mainModel});
                });
            } else {
                UserCenter.myVideoView.show();
            }
        },
        /**
         * Wi-Fi云备份响应方法
         */
        wifis: function(){
            if(!UserCenter.wifisView) {
                this.getMainModel(function(){
                    UserCenter.wifisView = new UserCenter.WifisView({model:UserCenter.mainModel});
                });
            } else {
                UserCenter.wifisView.show();
            }
        },

        /**
         * 商户主页
         * @param id 商户主键
         */
        shop: function(id){
            var key = 'shopPageView' + id;
            if(!UserCenter[key]) {
                UserCenter[key] = new UserCenter.ShopPageView();
            } else {
                UserCenter[key].show();
            }
        },

        /**
         * 访问过的商户热点响应方法
         */
        history: function(){
            if(!UserCenter.historyWifisView) {
                this.getMainModel(function(){
                    UserCenter.historyWifisView = new UserCenter.HistoryWifisView({model:UserCenter.mainModel});
                });
            } else {
                UserCenter.historyWifisView.show();
            }
        },

        /**
         * 管理我的商户
         */
        manageShop: function(){
            var instanceKey = 'merchantModel';
            var modelName = 'MerchantModel';
            checkModel(instanceKey, modelName, function(){
                if(!UserCenter.manageShopView) {
                    UserCenter.manageShopView = new UserCenter.ManageShopView({model:UserCenter[instanceKey]});
                }else{
                    UserCenter.manageShopView.show();
                }
            });
        },

        /**
         * 我的商户信息
         */
        myShopInfo: function(){
            var instanceKey = 'merchantModel';
            var modelName = 'MerchantModel';
            checkModel(instanceKey, modelName, function(){
                if (!UserCenter.myShopInfoView) {
                    UserCenter.myShopInfoView = new UserCenter.MyShopInfoView({model: UserCenter.merchantModel});
                } else {
                    UserCenter.myShopInfoView.show();
                }
            });
        },

        /**
         * 访客列表
         */
        visitors: function(){
            if(!UserCenter.visitorsView) {
                UserCenter.visitorsView = new UserCenter.VisitorsView({});
            }else{
                UserCenter.visitorsView.show();
            }
        },

        /**
         * 访客列表
         */
        collectors: function(){
            if(!UserCenter.collectorsView) {
                UserCenter.collectorsView = new UserCenter.CollectorsView({});
            }else{
                UserCenter.collectorsView.show();
            }
        },

        /**
         * 我的热点
         */
        shopWifis: function(){
            var instanceKey = 'shopWifiModel';
            var modelName = 'ShopWifiModel';
            checkModel(instanceKey, modelName, function(){
                if(!UserCenter.shopWifiView) {
                    UserCenter.shopWifiView = new UserCenter.ShopWifiView({model:UserCenter[instanceKey]});
                }else{
                    UserCenter.shopWifiView.show();
                }
            });
        },

        /**
         * 推广链接
         */
        manageShopLink: function(){
            var instanceKey = 'shopLinkModel';
            var modelName = 'ShopLinkModel';
            checkModel(instanceKey, modelName, function(){
                if(!UserCenter.manageShopLinkView) {
                    UserCenter.manageShopLinkView = new UserCenter.ManageShopLinkView({model:UserCenter[instanceKey]});
                }else{
                    UserCenter.manageShopLinkView.show();
                }
            });
        }
    });

    // 路由初始化
    UserCenter.router = new router();

    // 监听启动
    Backbone.history.start();

});
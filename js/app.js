/**
 * Created by Yexiaoyi on 2014/10/24.
 */

$(function(){
    // 禁用浏览器默认的touchmove事件
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
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
            'myShopInfo': 'myShopInfo' // 我的商家信息
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
            if(!UserCenter.manageShopView) {
                UserCenter.manageShopView = new UserCenter.ManageShopView({});
            }else{
                UserCenter.manageShopView.show();
            }
        },

        myShopInfo: function(){
            if(!UserCenter.myShopInfoView) {
                UserCenter.myShopInfoView = new UserCenter.MyShopInfoView({});
            }else{
                UserCenter.myShopInfoView.show();
            }
        }
    });

    // 路由初始化
    UserCenter.router = new router();

    // 监听启动
    Backbone.history.start();

});
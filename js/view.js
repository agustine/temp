/**
 * Created by Yexiaoyi on 2014/10/24.
 */

/**
 * 所有视图基类
 * @type {Backbone.View}
 */
UserCenter.BaseView = Backbone.View.extend({
    /**
     * 所有视图的外容器
     */
    mainBox: $('.panels-box'),
    /**
     * 视图级别Class数组
     */
    grades: ['grade-1', 'grade-2', 'grade-3'],
    initialize: function() {
        return this.render();
    },

    render: function() {
        // 初始化iscroll
        this.initScroller();
        // 显示当前视图
        return this.show();
    },
    /**
     * 显示当前视图方法
     * @returns {UserCenter.BaseView} 视图对象本身，以支持链式调用
     */
    show: function(){
        var $viewElem = this.$el,
            $views = $('.page-view'),
            grades = this.grades,
            gradeLength = grades.length,
            i, grade;
        // 移除所有视图的show class
        $views.removeClass('show');
        // 为当前视图添加show class
        $viewElem.addClass('show');
        // 为外容器添加当前视图级别 class
        for(i = 0; i < gradeLength; i++) {
            grade = grades[i];
            this.mainBox.removeClass(grade);
            if ($viewElem.is('.' + grade)) {
                this.mainBox.addClass(grade);
            }
        }
        return this;
    },
    /**
     *
     * @returns {UserCenter.BaseView}
     */
    initScroller: function(){
        if(this.scroller){
            this.refreshScroller(0);
        } else {
            this.scroller = new IScroll(this.$('.scroll-wrapper').get(0), {
                mouseWheel: true,
                click: true
            });
            this.refreshScroller(400);
        }
        return this;
    },


    /**
     * 刷新iscroll
     * @param ms 刷新延时（毫秒）
     * @returns {UserCenter.BaseView}
     */
    refreshScroller: function(ms){
        ms = ms || 0;
        var scroller = this.scroller;
        if(this.scroller){
            setTimeout(function () {
                scroller.refresh();
            }, ms);
        }
        return this;
    }
});

/**
 * 管理我的商家
 * @type {UserCenter.BaseView}
 */
UserCenter.ManageShopView = UserCenter.BaseView.extend({
    el: '[data-page="manageShop"]'
});

/**
 * 我的商家信息
 * @type {UserCenter.BaseView}
 */
UserCenter.MyShopInfoView = UserCenter.BaseView.extend({
    el: '[data-page="myShopInfo"]'
});

/**
 * 主视图
 * @type {UserCenter.BaseView}
 */
UserCenter.MainView = UserCenter.BaseView.extend({
    // 主视图容器
    tagName: "div",

    className: "page-view",
    template: UserCenter.JST.main,
    authTemplate: UserCenter.JST.accountInfo,
    shopLinkTemplate: UserCenter.JST.manageShopsLink,
    events:{
        'click .btn-login': 'setUser'
    },

    initialize: function() {
        this.model.on('change:user', this.authRender, this);
        return this.render();
    },
    authRender: function(){
        var data = _.clone(this.model.attributes);
        data.user = data.user || false;
        this.$('.auth-section').html(this.authTemplate(data));
        this.$('#shops_link').html(this.shopLinkTemplate(data));
        if(data.user && data.user.msgCount > 0){
            $('.header .hint').show().html(data.user.msgCount);
        } else {
            $('.header .hint').hide()
        }
    },
    render: function() {
        this.mainBox.append(this.$el);
        this.$el.html(this.template(this.model));
        this.authRender();

        // 初始化iscroll
        this.initScroller();

        // 显示当前视图
        return this.show();
    },
    setUser: function(){
        this.model.setUser({
            id: 1,
            account: '小屁孩_Rain',
            phone: '18616769529',
            msgCount: 16,
            isActive: true
        });
    }
});

/**
 * 关注视图
 * @type {UserCenter.BaseView}
 */
UserCenter.FollowsView = UserCenter.BaseView.extend({
    // 主视图容器
    tagName: "div",
    className: "page-view grade-2",

    titleName: '我的关注',
    template: UserCenter.JST.follows,
    events:{
    },

    initialize: function() {
        return this.render();
    },

    render: function() {
        var viewData = _.clone(this.model.attributes);
        viewData.viewTitleName = this.titleName;
        this.mainBox.append(this.$el);
        this.$el.html(this.template(viewData));

        // 初始化iscroll
        this.initScroller();

        // 显示当前视图
        return this.show();
    }
});


/**
 * 粉丝视图
 * @type {UserCenter.FollowsView}
 */
UserCenter.FunsView = UserCenter.FollowsView.extend({titleName: '我的粉丝'});

/**
 * 关注视图
 * @type {UserCenter.BaseView}
 */
UserCenter.FavorShopsView = UserCenter.BaseView.extend({
    // 主视图容器
    tagName: "div",
    className: "page-view grade-2",

    template: UserCenter.JST.favorShops,
    events:{
//        'click .btn-login': 'setUser'
    },

    initialize: function() {
        return this.render();
    },

    render: function() {
        this.mainBox.append(this.$el);
        this.$el.html(this.template(this.model));

        // 初始化iscroll
        this.initScroller();

        // 显示当前视图
        return this.show();
    }
});

/**
 * 个人主页足迹视图
 * @type {UserCenter.BaseView}
 */
UserCenter.FootprintView = UserCenter.BaseView.extend({
    // 主视图容器
    tagName: "div",
    className: "page-view grade-2",

    template: UserCenter.JST.footPoint,
    events:{
    },

    initialize: function() {
        return this.render();
    },

    render: function() {
        var view = this;
        this.mainBox.append(this.$el);
        this.$el.html(this.template(this.model.attributes));

        // 初始化iscroll
        this.initScroller();

        // 初始化瀑布流
        this.initWaterFall();

        this.scroller.on('scrollEnd', function(){
            if(this.y + this.scrollerHeight - this.wrapperHeight < 2){
                view.waterfall.loadMore();
            }
        });

        // 显示当前视图
        return this.show();
    },

    initWaterFall: function(){
        var view = this;
        this.waterfall = new Waterfall('footprint_waterfall', {
            margin: 10,
            offsetH: 2,
            whiteBottom: 335,

            cols: 2,


            ajaxUrlTemplate: 'example_data/page{{pno}}.json',

            startPageIndex: 0,
            waterBox: 'li',
            parse: function (res) {
                if (!(res && res.success)) {
                    return false;
                }
                return res.data.images;
            },
            url: function (item) {
                return item.pic;
            },
            template: function (imgData) {
                var domStr = '<a href="javascript:void(0);" class="font-small">';
                domStr += '<img src="' + imgData.pic + '">';
                domStr += '<span>' + imgData.title + '</span>';
                domStr += '<span class="footprint-count color-light-grey">' + imgData.count + '</span>';
                domStr += '</a>';
                return domStr;
            },
            pageLoaded: function (res) {
                view.refreshScroller(300)
            },
            itemRendered: function (item) {
            },
            last: function (res) {
                return res.data.pageIndex >= (res.data.pageCount - 1);
            },
            noMore: function () {
//                alert('没有更多图片');
            }
        });
        return this;
    }
});

/**
 * 个人主页连秀视图
 * @type {UserCenter.BaseView}
 */
UserCenter.MyVideoView = UserCenter.BaseView.extend({
    // 主视图容器
    tagName: "div",
    className: "page-view grade-2",

    template: UserCenter.JST.myVideos,
    events:{
    },

    initialize: function() {
        return this.render();
    },

    render: function() {
        var view = this;
        this.mainBox.append(this.$el);
        this.$el.html(this.template(this.model.attributes));

        // 初始化iscroll
        this.initScroller();



        // 显示当前视图
        return this.show();
    }
});

/**
 * Wi-Fi云备份视图
 * @type {UserCenter.BaseView}
 */
UserCenter.WifisView = UserCenter.BaseView.extend({
    // 主视图容器
    tagName: "div",
    className: "page-view grade-2",

    template: UserCenter.JST.wifiList,
    events:{
    },

    initialize: function() {
        return this.render();
    },

    render: function() {
        this.mainBox.append(this.$el);
        this.$el.html(this.template(this.model.attributes));

        // 初始化iscroll
        this.initScroller();

        // 显示当前视图
        return this.show();
    }
});

/**
 * 商户主页
 * @type {UserCenter.BaseView}
 */
UserCenter.ShopPageView = UserCenter.BaseView.extend({
    // 主视图容器
    tagName: "div",
    className: "page-view grade-3",

    template: UserCenter.JST.shop,
    events:{
        'click .icon-back': 'back'
    },

    initialize: function() {
        return this.render();
    },

    render: function() {
        this.mainBox.append(this.$el);
        this.$el.html(this.template({}));

        // 初始化iscroll
        this.initScroller();

        // 显示当前视图
        return this.show();
    },

    back: function(){
        history.back();
    }
});

/**
 * 访问过的商户热点视图
 * @type {UserCenter.BaseView}
 */
UserCenter.HistoryWifisView = UserCenter.BaseView.extend({
    // 主视图容器
    tagName: "div",
    className: "page-view grade-2",

    template: UserCenter.JST.historyWifis,
    events:{
    },

    initialize: function() {
        return this.render();
    },

    render: function() {
        this.mainBox.append(this.$el);
        this.$el.html(this.template(this.model.attributes));

        // 初始化iscroll
        this.initScroller();

        // 显示当前视图
        return this.show();
    }
});
this["UserCenter"] = this["UserCenter"] || {};
this["UserCenter"]["JST"] = this["UserCenter"]["JST"] || {};

this["UserCenter"]["JST"]["accountInfo"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(!user){ ;
__p += '\r\n    <span class="login-welcome color-grey">欢迎使用联合连</span>\r\n    <a href="javascript:void(0)" class="btn-login" title="注册/登录"></a>\r\n';
 } else { ;
__p += '\r\n    <a href="#footprint" title="个人信息"\r\n       class="account-info arrow-right">\r\n        <img src="images/photo.jpg" width="64px" height="64px"\r\n             alt="小屁孩_Rain" class="account-photo"/>\r\n        <span class="account-name font-big">' +
__e(user.account ) +
'</span>\r\n        <span class="account-phone font-smaller color-light-grey">' +
__e(user.phone ) +
'</span>\r\n    </a>\r\n    <a href="javascript:void(0);" title="编辑资料"\r\n       class="listitem icon-listitem icon-info btn-account-info arrow-right">编辑资料</a>\r\n';
 } ;


}
return __p
};

this["UserCenter"]["JST"]["collectorsList"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="scroll-wrapper bg-grey">\r\n    <div class="scroller clearfix">\r\n        <ul class="list-view user-list bg-white">\r\n            <li>\r\n                <img src="images/friend_photo_temp.jpg" width="45" height="45" alt="汪小华"/>\r\n                <p class="">汪小华</p>\r\n                <pre class="font-smaller color-light-grey">最近访问：2014-10-11 访问次数：231</pre>\r\n            </li>\r\n            <li>\r\n                <img src="images/friend_photo_temp.jpg" width="45" height="45" alt="汪小华"/>\r\n                <p class="">汪小华</p>\r\n                <pre class="font-smaller color-light-grey">最近访问：2014-10-11 访问次数：231</pre>\r\n            </li>\r\n            <li>\r\n                <img src="images/friend_photo_temp.jpg" width="45" height="45" alt="汪小华"/>\r\n                <p class="">汪小华</p>\r\n                <pre class="font-smaller color-light-grey">最近访问：2014-10-11 访问次数：2322</pre>\r\n            </li>\r\n            <li>\r\n                <img src="images/friend_photo_temp.jpg" width="45" height="45" alt="汪小华"/>\r\n                <p class="">汪小华</p>\r\n                <pre class="font-smaller color-light-grey">最近访问：2014-10-11 访问次数：231</pre>\r\n            </li>\r\n            <li>\r\n                <img src="images/friend_photo_temp.jpg" width="45" height="45" alt="汪小华"/>\r\n                <p class="">汪小华</p>\r\n                <pre class="font-smaller color-light-grey">最近访问：2014-10-11 访问次数：231</pre>\r\n            </li>\r\n            <li>\r\n                <img src="images/friend_photo_temp.jpg" width="45" height="45" alt="汪小华"/>\r\n                <p class="">汪小华</p>\r\n                <pre class="font-smaller color-light-grey">最近访问：2014-10-11 访问次数：2322</pre>\r\n            </li>\r\n            <li>\r\n                <img src="images/friend_photo_temp.jpg" width="45" height="45" alt="汪小华"/>\r\n                <p class="">汪小华</p>\r\n                <pre class="font-smaller color-light-grey">最近访问：2014-10-11 访问次数：231</pre>\r\n            </li>\r\n            <li>\r\n                <img src="images/friend_photo_temp.jpg" width="45" height="45" alt="汪小华"/>\r\n                <p class="">汪小华</p>\r\n                <pre class="font-smaller color-light-grey">最近访问：2014-10-11 访问次数：231</pre>\r\n            </li>\r\n            <li>\r\n                <img src="images/friend_photo_temp.jpg" width="45" height="45" alt="汪小华"/>\r\n                <p class="">汪小华</p>\r\n                <pre class="font-smaller color-light-grey">最近访问：2014-10-11 访问次数：2322</pre>\r\n            </li>\r\n            <li>\r\n                <img src="images/friend_photo_temp.jpg" width="45" height="45" alt="汪小华"/>\r\n                <p class="">汪小华</p>\r\n                <pre class="font-smaller color-light-grey">最近访问：2014-10-11 访问次数：231</pre>\r\n            </li>\r\n            <li>\r\n                <img src="images/friend_photo_temp.jpg" width="45" height="45" alt="汪小华"/>\r\n                <p class="">汪小华</p>\r\n                <pre class="font-smaller color-light-grey">最近访问：2014-10-11 访问次数：231</pre>\r\n            </li>\r\n            <li>\r\n                <img src="images/friend_photo_temp.jpg" width="45" height="45" alt="汪小华"/>\r\n                <p class="">汪小华</p>\r\n                <pre class="font-smaller color-light-grey">最近访问：2014-10-11 访问次数：2322</pre>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</section>\r\n<!--头部 start-->\r\n<header class="header bg-header color-white">\r\n    收藏我的用户\r\n    <a href="#manageShop" title="我的商家信息"\r\n       class="btn-icon btn-icon-left icon-back left">\r\n    </a>\r\n</header>\r\n<!--头部 end-->';

}
return __p
};

this["UserCenter"]["JST"]["favorShops"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!--收藏的商家视图内容 start-->\r\n<section class="scroll-wrapper bg-grey">\r\n    <div class="scroller no-footer clearfix">\r\n        <ul class="section-box">\r\n            <li class="listitem favor-shop-item">\r\n                <a class="" href="#shop/1">\r\n                    <img src="images/shop_type_temp.png" width="25px" height="25px" alt="餐饮"\r\n                         class="shop-type" />\r\n                    <span class="shop-name font-big">星巴克</span>\r\n                    <span class="shop-address font-smaller">上海浦东新区花木路838号</span>\r\n                    <span class="icon-listitem icon-broadcast color-highlight font-smaller shop-broadcast">满30元第二杯半价哦</span>\r\n                </a>\r\n            </li>\r\n            <li class="listitem favor-shop-item">\r\n                <a class="" href="#shop/1">\r\n                    <img src="images/shop_type_temp.png" width="25px" height="25px" alt="餐饮"\r\n                         class="shop-type" />\r\n                    <span class="shop-name font-big">星巴克</span>\r\n                    <span class="shop-address font-smaller">上海浦东新区花木路838号</span>\r\n                </a>\r\n            </li>\r\n            <li class="listitem favor-shop-item">\r\n                <a class="" href="#shop/2">\r\n                    <img src="images/shop_type_temp.png" width="25px" height="25px" alt="餐饮"\r\n                         class="shop-type" />\r\n                    <span class="shop-name font-big">星巴克</span>\r\n                    <span class="shop-address font-smaller">上海浦东新区花木路838号</span>\r\n                    <span class="icon-listitem icon-broadcast color-highlight font-smaller shop-broadcast">满30元第二杯半价哦</span>\r\n                </a>\r\n            </li>\r\n            <li class="listitem favor-shop-item">\r\n                <a class="" href="#shop/1">\r\n                    <img src="images/shop_type_temp.png" width="25px" height="25px" alt="餐饮"\r\n                         class="shop-type" />\r\n                    <span class="shop-name font-big">星巴克</span>\r\n                    <span class="shop-address font-smaller">上海浦东新区花木路838号</span>\r\n                    <span class="icon-listitem icon-broadcast color-highlight font-smaller shop-broadcast">满30元第二杯半价哦</span>\r\n                </a>\r\n            </li>\r\n            <li class="listitem favor-shop-item">\r\n                <a class="" href="#shop/1">\r\n                    <img src="images/shop_type_temp.png" width="25px" height="25px" alt="餐饮"\r\n                         class="shop-type" />\r\n                    <span class="shop-name font-big">星巴克</span>\r\n                    <span class="shop-address font-smaller">上海浦东新区花木路838号</span>\r\n                </a>\r\n            </li>\r\n            <li class="listitem favor-shop-item">\r\n                <a class="" href="#shop/1">\r\n                    <img src="images/shop_type_temp.png" width="25px" height="25px" alt="餐饮"\r\n                         class="shop-type" />\r\n                    <span class="shop-name font-big">星巴克</span>\r\n                    <span class="shop-address font-smaller">上海浦东新区花木路838号</span>\r\n                    <span class="icon-listitem icon-broadcast color-highlight font-smaller shop-broadcast">满30元第二杯半价哦</span>\r\n                </a>\r\n            </li>\r\n            <li class="listitem favor-shop-item">\r\n                <a class="" href="#shop/1">\r\n                    <img src="images/shop_type_temp.png" width="25px" height="25px" alt="餐饮"\r\n                         class="shop-type" />\r\n                    <span class="shop-name font-big">星巴克</span>\r\n                    <span class="shop-address font-smaller">上海浦东新区花木路838号</span>\r\n                    <span class="icon-listitem icon-broadcast color-highlight font-smaller shop-broadcast">满30元第二杯半价哦</span>\r\n                </a>\r\n            </li>\r\n            <li class="listitem favor-shop-item">\r\n                <a class="" href="#shop/1">\r\n                    <img src="images/shop_type_temp.png" width="25px" height="25px" alt="餐饮"\r\n                         class="shop-type" />\r\n                    <span class="shop-name font-big">星巴克</span>\r\n                    <span class="shop-address font-smaller">上海浦东新区花木路838号</span>\r\n                    <span class="icon-listitem icon-broadcast color-highlight font-smaller shop-broadcast">满30元第二杯半价哦</span>\r\n                </a>\r\n            </li>\r\n            <li class="listitem favor-shop-item">\r\n                <a class="" href="#shop/1">\r\n                    <img src="images/shop_type_temp.png" width="25px" height="25px" alt="餐饮"\r\n                         class="shop-type" />\r\n                    <span class="shop-name font-big">星巴克</span>\r\n                    <span class="shop-address font-smaller">上海浦东新区花木路838号</span>\r\n                    <span class="icon-listitem icon-broadcast color-highlight font-smaller shop-broadcast">满30元第二杯半价哦</span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</section>\r\n<!--收藏的商家视图内容 end-->\r\n\r\n<!--收藏的商家视图头部 start-->\r\n<header class="header bg-header color-white">\r\n    收藏的商家\r\n    <a href="#main" title="我的"\r\n       class="btn-icon btn-icon-left icon-back left">\r\n        我\r\n    </a>\r\n</header>\r\n<!--收藏的商家视图头部 end-->\r\n\r\n';

}
return __p
};

this["UserCenter"]["JST"]["follows"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!--关注视图内容 start-->\r\n<section class="scroll-wrapper bg-grey">\r\n    <div class="scroller no-footer clearfix">\r\n        <ul class="section-box">\r\n            <li class="listitem follow-item">\r\n                <img src="images/friend_photo_temp.jpg" width="36px" height="36px" alt="小屁孩_rain"\r\n                        class="friend-photo" />\r\n                <span class="friend-name">小屁孩_rain</span>\r\n                <a href="javascript:void(0);" class="btn-follow"></a>\r\n            </li>\r\n            <li class="listitem follow-item">\r\n                <img src="images/friend_photo_temp.jpg" width="36px" height="36px" alt="小屁孩_rain"\r\n                     class="friend-photo" />\r\n                <span class="friend-name">小屁孩_rain</span>\r\n                <a href="javascript:void(0);" class="btn-follow"></a>\r\n            </li>\r\n            <li class="listitem follow-item">\r\n                <img src="images/friend_photo_temp.jpg" width="36px" height="36px" alt="小屁孩_rain"\r\n                     class="friend-photo" />\r\n                <span class="friend-name">小屁孩_rain</span>\r\n                <a href="javascript:void(0);" class="btn-follow followed"></a>\r\n            </li>\r\n            <li class="listitem follow-item">\r\n                <img src="images/friend_photo_temp.jpg" width="36px" height="36px" alt="小屁孩_rain"\r\n                     class="friend-photo" />\r\n                <span class="friend-name">小屁孩_rain</span>\r\n                <a href="javascript:void(0);" class="btn-follow"></a>\r\n            </li>\r\n            <li class="listitem follow-item">\r\n                <img src="images/friend_photo_temp.jpg" width="36px" height="36px" alt="小屁孩_rain"\r\n                     class="friend-photo" />\r\n                <span class="friend-name">小屁孩_rain</span>\r\n                <a href="javascript:void(0);" class="btn-follow"></a>\r\n            </li>\r\n            <li class="listitem follow-item">\r\n                <img src="images/friend_photo_temp.jpg" width="36px" height="36px" alt="小屁孩_rain"\r\n                     class="friend-photo" />\r\n                <span class="friend-name">小屁孩_rain</span>\r\n                <a href="javascript:void(0);" class="btn-follow"></a>\r\n            </li>\r\n            <li class="listitem follow-item">\r\n                <img src="images/friend_photo_temp.jpg" width="36px" height="36px" alt="小屁孩_rain"\r\n                     class="friend-photo" />\r\n                <span class="friend-name">小屁孩_rain</span>\r\n                <a href="javascript:void(0);" class="btn-follow followed"></a>\r\n            </li>\r\n            <li class="listitem follow-item">\r\n                <img src="images/friend_photo_temp.jpg" width="36px" height="36px" alt="小屁孩_rain"\r\n                     class="friend-photo" />\r\n                <span class="friend-name">小屁孩_rain</span>\r\n                <a href="javascript:void(0);" class="btn-follow"></a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</section>\r\n<!--关注视图内容 end-->\r\n\r\n<!--关注视图头部 start-->\r\n<header class="header bg-header color-white">\r\n    ' +
__e(viewTitleName ) +
'\r\n    <a href="#main" title="我的"\r\n       class="btn-icon btn-icon-left icon-back left">\r\n        我\r\n    </a>\r\n</header>\r\n<!--关注视图头部 end-->\r\n\r\n';

}
return __p
};

this["UserCenter"]["JST"]["footPoint"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!--主视图内容 start-->\r\n<section class="scroll-wrapper bg-grey">\r\n    <ul class="scroller personal-scroller no-footer clearfix footprint-waterfall" id="footprint_waterfall">\r\n\r\n\r\n\r\n    </ul>\r\n</section>\r\n<!--主视图内容 end-->\r\n\r\n<div class="personal-bg" style="background: url(images/personal_bg_temp.jpg) center no-repeat;background-size: 100% auto;">\r\n    <div class="header color-white">\r\n        小屁孩_rain\r\n        <a href="#main" title="我的"\r\n           class="btn-icon btn-icon-left icon-back">\r\n        </a>\r\n    </div>\r\n    <div class="personal-photo">\r\n        <img src="images/photo.jpg" width="90px" height="90px" alt="小屁孩_rain" />\r\n    </div>\r\n    <a href="javascript:void(0)" class="btn-update-bg"></a>\r\n</div>\r\n\r\n<ul class="personal-tab bg-white">\r\n    <li class="current">\r\n        <a href="#footprint" class="color-light-grey font-small">\r\n            足迹<span class="font-big color-grey">85</span>\r\n        </a>\r\n    </li>\r\n    <li>\r\n        <a href="#video" class="color-light-grey font-small">\r\n            连秀<span class="font-big color-grey">180</span>\r\n        </a>\r\n    </li>\r\n</ul>';

}
return __p
};

this["UserCenter"]["JST"]["historyWifis"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!--访问过的商户热点视图内容 start-->\r\n<section class="scroll-wrapper bg-grey">\r\n    <div class="scroller no-footer clearfix">\r\n        <div class="personal-bg at-wifi-history"\r\n             style="background: url(images/personal_bg_temp.jpg) center no-repeat;\r\n             background-size: 100% auto;">\r\n            <div class="personal-photo">\r\n                <img src="images/photo.jpg" width="56px" height="56px"\r\n                     alt="小屁孩_rain" />\r\n            </div>\r\n        </div>\r\n        <div class="history-list">\r\n            <ul>\r\n                <li>\r\n                    <p>\r\n                        <a href="#shop/1">\r\n                            <span class="shop-name font-big">星巴克</span>\r\n                            <span class="shop-ssid font-smaller color-light-grey">Wi-Fi名称:Stuckbsfk</span>\r\n                            <span class="shop-address font-smaller color-light-grey">上海浦东大道1888路</span>\r\n                            <span class="star star-4"></span>\r\n                        </a>\r\n                    </p>\r\n                </li>\r\n                <li class="type-1">\r\n                    <p>\r\n                        <a href="#shop/2">\r\n                            <span class="shop-name font-big">星巴克</span>\r\n                            <span class="shop-ssid font-smaller color-light-grey">Wi-Fi名称:Stuckbsfk</span>\r\n                            <span class="shop-address font-smaller color-light-grey">上海浦东大道1888路</span>\r\n                            <span class="star star-2"></span>\r\n                        </a>\r\n                    </p>\r\n                </li>\r\n                <li class="type-134">\r\n                    <p>\r\n                        <a href="#shop/3">\r\n                            <span class="shop-name font-big">星巴克</span>\r\n                            <span class="shop-ssid font-smaller color-light-grey">Wi-Fi名称:Stuckbsfk</span>\r\n                            <span class="shop-address font-smaller color-light-grey">上海浦东大道1888路</span>\r\n                            <span class="star star-5"></span>\r\n                        </a>\r\n                    </p>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!--访问过的商户热点视图内容 end-->\r\n\r\n<!--访问过的商户热点视图头部 start-->\r\n<header class="header bg-header color-white">\r\n    访问过的商户热点\r\n    <a href="#main" title="我的"\r\n       class="btn-icon btn-icon-left icon-back left">\r\n    </a>\r\n    <a href="javascript" title="筛选"\r\n       class="btn-icon btn-icon-left icon-filter right btn-filter">\r\n    </a>\r\n</header>\r\n<!--访问过的商户热点视图头部 end-->\r\n';

}
return __p
};

this["UserCenter"]["JST"]["main"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!--主视图内容 start-->\r\n<section class="scroll-wrapper bg-grey" id="main_scroller">\r\n    <div class="scroller clearfix">\r\n        <div class="auth-section section-box">\r\n\r\n        </div>\r\n\r\n        <ul class="section-box">\r\n            <li class="division">\r\n                <a href="#wifis" title="Wi-Fi 云备份"\r\n                   class="listitem icon-listitem icon-wificloud arrow-right">Wi-Fi 云备份</a>\r\n            </li>\r\n\r\n            <li>\r\n                <a href="#history" title="访问过的商户热点"\r\n                   class="listitem icon-listitem icon-history arrow-right">访问过的商户热点</a>\r\n            </li>\r\n            <li class="division">\r\n                <a href="#favors" title="收藏的商家"\r\n                   class="listitem icon-listitem icon-favor arrow-right">收藏的商家</a>\r\n            </li>\r\n\r\n            <li>\r\n                <a href="#follows" title="我的关注"\r\n                   class="listitem icon-listitem icon-follow arrow-right">我的关注</a>\r\n            </li>\r\n            <li class="division">\r\n                <a href="#funs" title="我的粉丝"\r\n                   class="listitem icon-listitem icon-follower arrow-right">我的粉丝</a>\r\n            </li>\r\n\r\n            <li class="division" id="shops_link">\r\n                <a href="javascript:void(0);" title="管理我的商家"\r\n                   class="listitem icon-listitem icon-info arrow-right">管理我的商家</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</section>\r\n<!--主视图内容 end-->\r\n\r\n<!--主视图头部 start-->\r\n<header class="header bg-header color-white">\r\n    我的\r\n    <a href="javascript:void(0)" title="我的消息"\r\n       class="btn-icon btn-icon-left icon-message left">\r\n        <span class="hint font-small">99</span>\r\n    </a>\r\n    <a href="javascript:void(0)" title="获取密码"\r\n       class="btn-icon btn-icon-left icon-setting right">\r\n    </a>\r\n</header>\r\n<!--主视图头部 end-->\r\n\r\n<!--主视图footer start-->\r\n<footer class="footer bg-grey cols-4">\r\n    <a href="javascript:void(0)" title="WIFI"\r\n       class="btn-icon btn-icon-top icon-wifi right font-small color-light-grey">\r\n        WIFI\r\n    </a>\r\n    <a href="javascript:void(0)" title="身边"\r\n       class="btn-icon btn-icon-top icon-near right font-small color-light-grey">\r\n        身边\r\n    </a>\r\n    <a href="javascript:void(0)" title="搜索"\r\n       class="btn-icon btn-icon-top icon-group right font-small color-light-grey">\r\n        搜索\r\n    </a>\r\n    <a href="javascript:void(0)" title="我的"\r\n       class="btn-icon btn-icon-top icon-person right font-small color-highlight">\r\n        我的\r\n    </a>\r\n</footer>\r\n<!--主视图footer end-->';

}
return __p
};

this["UserCenter"]["JST"]["manageShop"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="scroll-wrapper bg-grey">\r\n    <div class="scroller clearfix">\r\n\r\n        <ul class="shop-totals division cols-2 bg-white color-highlight font-super tcenter" style="height: 65px">\r\n            <li>\r\n                <a href="#visitors">\r\n                    ' +
__e(CountOfVisited) +
'\r\n                    <span class="font-small color-light-grey block">累计联网人数</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href="#collectors">\r\n                    ' +
__e(CountOfCollect) +
'\r\n                    <span class="font-small color-light-grey block">累计商铺收藏人数</span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n\r\n        <ul class="section-box">\r\n            <li>\r\n                <a href="#myShopInfo" title="我的商家信息"\r\n                   class="listitem icon-listitem icon-shop-info arrow-right">我的商家信息</a>\r\n            </li>\r\n\r\n            <li>\r\n                <a href="javascript:void(0);" title="客户留言"\r\n                   class="listitem icon-listitem icon-mail arrow-right">客户留言</a>\r\n            </li>\r\n            <li>\r\n                <a href="#shopWifis" title="我的热点"\r\n                   class="listitem icon-listitem icon-my-wifi arrow-right">我的热点</a>\r\n            </li>\r\n        </ul>\r\n        <div class="section-box none-bottom">\r\n            <a href="#manageTextAds" title="我要发布Wi-Fi列表号外广告"\r\n               class="listitem icon-listitem icon-broadcast-yellow arrow-right">我要发布Wi-Fi列表号外广告</a>\r\n        </div>\r\n        <p class="full-padding font-small color-light-grey">联连用户在商户Wi-Fi信号覆盖区域时，通过【号外】推送商户信息，吸引客流。</p>\r\n        <div class="section-box none-bottom">\r\n            <a href="javascript:void(0);" title="我要发布商户主页图文广告"\r\n               class="listitem icon-listitem icon-image-text arrow-right">我要发布商户主页图文广告</a>\r\n        </div>\r\n        <p class="full-padding font-small color-light-grey">商户专属登录页广告展示。自主订制，展示品牌形象或促销信息。</p>\r\n        <div class="section-box none-bottom">\r\n            <a href="javascript:void(0);" title="群发营销信息"\r\n               class="listitem icon-listitem icon-group-ad arrow-right">群发营销信息</a>\r\n        </div>\r\n        <p class="full-padding font-small color-light-grey">针对性地群发促销信息，分别发送给各个收件人，带动销售，及更好地服务消费者。</p>\r\n        <div class="section-box none-bottom">\r\n            <a href="#manageShopLink" title="推广链接"\r\n               class="listitem icon-listitem icon-shop-link arrow-right">推广链接</a>\r\n        </div>\r\n        <p class="full-padding font-small color-light-grey">设置跳转的URL地址，可以实现商户主页跳转到您设置的营销网页。</p>\r\n        <div class="section-box none-bottom">\r\n            <a href="javascript:void(0);" title="商家权限转移"\r\n               class="listitem icon-listitem icon-shop-assignment arrow-right">商家权限转移</a>\r\n        </div>\r\n        <p class="full-padding font-small color-light-grey">将商户转移到另一个联连账号进行管理，转移后该账户将恢复为普通帐号。</p>\r\n    </div>\r\n</section>\r\n<!--头部 start-->\r\n<header class="header bg-header color-white">\r\n    管理我的商家\r\n    <a href="#main" title="我的"\r\n       class="btn-icon btn-icon-left icon-back left">\r\n    </a>\r\n</header>\r\n<!--头部 end-->';

}
return __p
};

this["UserCenter"]["JST"]["manageShopsLink"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (user && !user.isActive) { ;
__p += '\r\n<a href="javascript:void(0);" title="开通商户"\r\n   class="listitem icon-listitem icon-info arrow-right">开通商户</a>\r\n';
 } else if (!user) { ;
__p += '\r\n<a href="#manageShop" title="管理我的商家"\r\n   class="listitem icon-listitem icon-info arrow-right">管理我的商家</a>\r\n';
 } else { ;
__p += '\r\n<a href="#manageShop" title="管理我的商家"\r\n   class="listitem icon-listitem icon-info arrow-right">管理我的商家 <span class="shop-hint font-smaller color-red">' +
__e(user.msgCount ) +
'条留言</span></a>\r\n';
 } ;


}
return __p
};

this["UserCenter"]["JST"]["myShopInfo"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="scroll-wrapper bg-grey">\r\n    <div class="scroller clearfix">\r\n\r\n        <div class="section-box has-top-margin full-padding long-title">\r\n            <label>营业执照注册号</label>\r\n            <pre class="color-highlight">' +
__e(Status.Name) +
'</pre>\r\n        </div>\r\n\r\n        <ul class="section-box">\r\n            <li class="full-padding">\r\n                <label>商户名称</label>\r\n                <pre>' +
__e(Name) +
'</pre>\r\n            </li>\r\n            <li class="full-padding">\r\n                <label>商户地址</label>\r\n                <pre>黑龙江省哈尔滨市白城区黑龙江省哈尔滨市白城区</pre>\r\n            </li>\r\n            <li class="full-padding">\r\n                <label>详细地址</label>\r\n                <pre>' +
__e(Address) +
'</pre>\r\n            </li>\r\n            <li class="full-padding">\r\n                <label>商户类型</label>\r\n                <pre>美食 西餐厅</pre>\r\n            </li>\r\n        </ul>\r\n        <div class="section-box full-padding p">\r\n            <h2 class="font-big">商家简介</h2>\r\n            <pre style="padding-left: 0;">' +
__e(Briefing) +
'</pre>\r\n        </div>\r\n        <ul class="section-box none-bottom">\r\n            <li class="full-padding">\r\n                <label>商用电话</label>\r\n                <pre>' +
__e(Tel) +
'</pre>\r\n            </li>\r\n            <li class="full-padding">\r\n                <label>联系人</label>\r\n                <pre>' +
__e(ContactName) +
'</pre>\r\n            </li>\r\n            <li class="full-padding">\r\n                <label>手机号码</label>\r\n                <pre>' +
__e(ContactMobile) +
'</pre>\r\n            </li>\r\n        </ul>\r\n        <p class="full-padding font-small color-light-grey">\r\n            如果需修改商户信息，请联系客服： <a href="tel:4000888998" class="color-highlight">400-0888-998</a>\r\n        </p>\r\n        <a href="javascript:void(0)" title="查看商户主页" style="margin-top: 10px" class="btn color-white">查看商户主页</a>\r\n    </div>\r\n</section>\r\n<!--头部 start-->\r\n<header class="header bg-header color-white">\r\n    我的商家信息\r\n    <a href="#manageShop" title="管理我的商家"\r\n       class="btn-icon btn-icon-left icon-back left">\r\n    </a>\r\n</header>\r\n<!--头部 end-->';

}
return __p
};

this["UserCenter"]["JST"]["myShopLink"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


    var name = noData ? '' : Name;
    var link = noData ? '' : Link;
    var status = noData ? '未提交' : Status.Name;
    var statusClass = noData ? 'color-light-grey' : 'color-highlight';
;
__p += '\r\n<section class="scroll-wrapper bg-grey">\r\n    <div class="scroller clearfix">\r\n        <div class="shop-link-box" data-switch="' +
__e(IsEnabled) +
'" data-edit="0">\r\n            <div class="section-box full-padding none-bottom">\r\n                推广链接\r\n                <a href="javascript:void(0)" class="switch on"></a>\r\n                <a href="javascript:void(0)" class="switch off"></a>\r\n            </div>\r\n            <p class="full-padding font-small color-light-grey">开启推广链接，联连用户通过商户主页跳可跳转到您设置的营销网页。 </p>\r\n            <div class="shop-link-update-panel view">\r\n                <ul class="section-box none-bottom">\r\n                    <li class="full-padding">\r\n                        <label>标题</label>\r\n                        <pre>' +
__e(name ) +
'</pre>\r\n                    </li>\r\n                    <li class="full-padding">\r\n                        <label>链接</label>\r\n                        <pre>' +
__e(link ) +
'</pre>\r\n                    </li>\r\n                    <li class="full-padding">\r\n                        <label>状态</label>\r\n                        <pre class="' +
__e(statusClass) +
'">' +
__e(status ) +
'</pre>\r\n                    </li>\r\n                </ul>\r\n                <p class="full-padding font-small color-light-grey">\r\n                    每月只许修改一次。\r\n                    <a href="javascript:void(0)" class="fright color-link btn-show-help">点击查看帮助</a>\r\n                </p>\r\n                <a href="javascript:void(0)" class="btn color-white btn-edit" title="修改">修改</a>\r\n            </div>\r\n            <div class="shop-link-update-panel edit">\r\n                <ul class="section-box none-bottom">\r\n                    <li class="full-padding">\r\n                        <label>标题</label>\r\n                        <pre><input type="text" name="Name" value="" /></pre>\r\n                    </li>\r\n                    <li class="full-padding">\r\n                        <label>链接</label>\r\n                        <pre><input type="url" name="Link" value="" /></pre>\r\n                    </li>\r\n                </ul>\r\n                <p class="full-padding font-small color-light-grey">\r\n                    每月只许修改一次。\r\n                    <a href="javascript:void(0)" class="fright color-link btn-show-help">点击查看帮助</a>\r\n                </p>\r\n                <a href="javascript:void(0)" class="btn color-white btn-submit" title="保存">保存</a>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</section>\r\n<!--头部 start-->\r\n<header class="header bg-header color-white">\r\n    推广链接\r\n    <a href="#manageShop" title="管理我的商家"\r\n       class="btn-icon btn-icon-left icon-back left">\r\n    </a>\r\n</header>\r\n<!--头部 end-->\r\n';

}
return __p
};

this["UserCenter"]["JST"]["myVideos"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!--主视图内容 start-->\r\n<section class="scroll-wrapper bg-grey">\r\n    <ul class="scroller personal-scroller no-header no-footer clearfix" style="padding-bottom: 265px">\r\n        <div class="section-box" style="margin-top: 15px">\r\n            <a href="javascript:void(0);" title="连秀"\r\n               class="listitem icon-listitem icon-lianxiu arrow-right">连秀 <span class="wifi-type font-smaller color-light-grey">更多精彩内容</span></a>\r\n        </div>\r\n        <div class="video-box">\r\n            <img src="images/video_cover_temp.jpg" alt="播放"/>\r\n            <a href="javascript:void(0)" title="播放" class="btn-play"></a>\r\n        </div>\r\n    </ul>\r\n</section>\r\n<!--主视图内容 end-->\r\n\r\n<div class="personal-bg" style="background: url(images/personal_bg_temp.jpg) center no-repeat;background-size: 100% auto;">\r\n    <div class="header color-white">\r\n        小屁孩_rain\r\n        <a href="#main" title="我的"\r\n           class="btn-icon btn-icon-left icon-back">\r\n        </a>\r\n    </div>\r\n    <div class="personal-photo">\r\n        <img src="images/photo.jpg" width="90px" height="90px" alt="小屁孩_rain" />\r\n    </div>\r\n    <a href="javascript:void(0)" class="btn-update-bg"></a>\r\n</div>\r\n\r\n<!--<ul class="personal-tab bg-white">-->\r\n    <!--<li>-->\r\n        <!--<a href="#footprint" class="color-light-grey font-small">-->\r\n            <!--足迹<span class="font-big color-grey">85</span>-->\r\n        <!--</a>-->\r\n    <!--</li>-->\r\n    <!--<li class="current">-->\r\n        <!--<a href="#video" class="color-light-grey font-small">-->\r\n            <!--连秀<span class="font-big color-grey">180</span>-->\r\n        <!--</a>-->\r\n    <!--</li>-->\r\n<!--</ul>-->';

}
return __p
};

this["UserCenter"]["JST"]["shop"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!--商户主页视图内容 start-->\r\n<section class="scroll-wrapper bg-grey">\r\n    <div class="scroller no-header no-footer clearfix">\r\n        <div class="personal-bg shop-header" style="background: url(images/personal_bg_temp.jpg) center no-repeat;background-size: 100% auto;">\r\n            <div class="header color-white">\r\n                星巴克（张江高科店）\r\n                <a href="javascript:void(0);" title=""\r\n                   class="btn-icon btn-icon-left icon-back">\r\n                </a>\r\n                <a href="javascript:void(0);" title=""\r\n                   class="btn-icon btn-icon-left icon-option right">\r\n                </a>\r\n            </div>\r\n            <div class="personal-photo shop-photo">\r\n                <img src="images/photo.jpg" width="90px" height="90px"\r\n                     alt="小屁孩_rain" />\r\n            </div>\r\n            <a href="javascript:void(0)" class="btn-follow-2"></a>\r\n        </div>\r\n        <div class="section-box shop-desp font-smaller">\r\n            遍布上海的星巴克，它存在的意义就好像便利店统一的装修、统一的服务、统一的食物，\r\n            永远都能在困顿的午后及时地满足你味觉和精神上的需求。最爱滨江大道店，\r\n            喜欢夏日的夜里懒散地坐在露天位上，任凭抹茶星冰乐清淡而不失个性的口感缠绕舌尖，\r\n            看黄浦江来来往往的船只，白天的烦恼便暂时忘却了。\r\n        </div>\r\n\r\n        <ul class="shop-sales">\r\n            <li>\r\n                <a href="javascript:void(0);">\r\n                    <img src="images/sale_temp.jpg" width="70px" height="70px" alt=""/>\r\n                    凡是通过“联连”手机客户端，进店连接Wi-Fi即可活动价值99元，蛋糕券一张。\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href="javascript:void(0);">\r\n                    <img src="images/sale_temp.jpg" width="70px" height="70px" alt=""/>\r\n                    凡是通过“联连”手机客户端，进店连接Wi-Fi即可活动价值99元，蛋糕券一张。\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href="javascript:void(0);">\r\n                    <img src="images/sale_temp.jpg" width="70px" height="70px" alt=""/>\r\n                    凡是通过“联连”手机客户端，进店连接Wi-Fi即可活动价值99元，蛋糕券一张。\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href="javascript:void(0);">\r\n                    <img src="images/sale_temp.jpg" width="70px" height="70px" alt=""/>\r\n                    凡是通过“联连”手机客户端，进店连接Wi-Fi即可活动价值99元，蛋糕券一张。\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href="javascript:void(0);">\r\n                    <img src="images/sale_temp.jpg" width="70px" height="70px" alt=""/>\r\n                    凡是通过“联连”手机客户端，进店连接Wi-Fi即可活动价值99元，蛋糕券一张。\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</section>\r\n<!--商户主页视图内容 end-->\r\n\r\n';

}
return __p
};

this["UserCenter"]["JST"]["shopWifis"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="scroll-wrapper bg-grey">\r\n    <div class="scroller clearfix">\r\n        <div class="shop-wifi-map" id="shop_wifi_map"></div>\r\n        <p class="bg-blue shop-wifi-shop-name full-padding color-white">\r\n            ' +
__e(Name) +
'\r\n            <span class="font-smaller">' +
__e(Address) +
'</span>\r\n        </p>\r\n        <ul class="section-box">\r\n            <li class="full-padding">\r\n                <label>Wi-Fi名称</label>\r\n                <pre>' +
__e(ServiceSetId) +
'</pre>\r\n            </li>\r\n            <li class="full-padding">\r\n                <label>添加时间</label>\r\n                <pre>' +
__e(UserCenter.getDate(CreatedAt)) +
'</pre>\r\n            </li>\r\n            <li class="full-padding">\r\n                <label>状态</label>\r\n                <pre class="color-highlight">' +
__e(Status.Name) +
'</pre>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</section>\r\n<!--头部 start-->\r\n<header class="header bg-header color-white">\r\n    我的热点\r\n    <a href="#manageShop" title="管理我的商家"\r\n       class="btn-icon btn-icon-left icon-back left">\r\n    </a>\r\n    <a href="javascript:void(0)" title="维护热点信息"\r\n       class="right">\r\n        维护热点\r\n    </a>\r\n</header>\r\n<!--头部 end-->\r\n\r\n<footer class="footer bg-grey">\r\n    <a href="javascript:void(0)" title="维护热点信息"\r\n       class="btn color-white">\r\n        维护热点信息\r\n    </a>\r\n</footer>';

}
return __p
};

this["UserCenter"]["JST"]["textAdItem"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


        var className = IsEnabled ? Status.Code + ' published' : Status.Code;
;
__p += '\r\n<!--<li>-->\r\n    <div class="bg-white ' +
__e(className) +
'">\r\n        <span class="text-ad-date font-smaller color-light-grey">' +
__e(UserCenter.getDate(CreatedAt)) +
'</span>\r\n        <pre class="text-ad-content">' +
__e(Content) +
'</pre>\r\n        <span class="text-ad-state color-white font-small tcenter">' +
__e(Status.Name) +
'</span>\r\n        <p>\r\n            <a href="javascript:void(0);" class="btn-small btn-publish" data-id="' +
__e(Id) +
'">发布广告</a>\r\n            <a href="javascript:void(0);" class="btn-small btn-grey btn-unpublish" data-id="' +
__e(Id) +
'">取消发布</a>\r\n            <a href="javascript:void(0);" class="btn-delete btn-icon btn-icon-left icon-delete" data-id="' +
__e(Id) +
'"></a>\r\n        </p>\r\n    </div>\r\n<!--</li>-->';

}
return __p
};

this["UserCenter"]["JST"]["textAdList"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="scroll-wrapper bg-grey">\r\n    <div class="scroller clearfix">\r\n        <ul class="text-ad-list">\r\n\r\n        </ul>\r\n    </div>\r\n</section>\r\n<!--头部 start-->\r\n<header class="header bg-header color-white">\r\n    号外广告\r\n    <a href="#manageShop" title="管理我的商家"\r\n       class="btn-icon btn-icon-left icon-back left">\r\n    </a>\r\n</header>\r\n<!--头部 end-->\r\n\r\n<footer class="footer bg-grey">\r\n    <a href="javascript:void(0)" title="添加号外广告"\r\n       class="btn color-white">\r\n        添加号外广告\r\n    </a>\r\n</footer>';

}
return __p
};

this["UserCenter"]["JST"]["visitorsList"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="scroll-wrapper bg-grey">\r\n    <div class="scroller clearfix">\r\n        <ul class="list-view user-list bg-white">\r\n            <li>\r\n                <img src="images/friend_photo_temp.jpg" width="45" height="45" alt="汪小华"/>\r\n                <p class="">汪小华</p>\r\n                <pre class="font-smaller color-light-grey">最近访问：2014-10-11 访问次数：231</pre>\r\n            </li>\r\n            <li>\r\n                <img src="images/friend_photo_temp.jpg" width="45" height="45" alt="汪小华"/>\r\n                <p class="">汪小华</p>\r\n                <pre class="font-smaller color-light-grey">最近访问：2014-10-11 访问次数：231</pre>\r\n            </li>\r\n            <li>\r\n                <img src="images/friend_photo_temp.jpg" width="45" height="45" alt="汪小华"/>\r\n                <p class="">汪小华</p>\r\n                <pre class="font-smaller color-light-grey">最近访问：2014-10-11 访问次数：2322</pre>\r\n            </li>\r\n            <li>\r\n                <img src="images/friend_photo_temp.jpg" width="45" height="45" alt="汪小华"/>\r\n                <p class="">汪小华</p>\r\n                <pre class="font-smaller color-light-grey">最近访问：2014-10-11 访问次数：231</pre>\r\n            </li>\r\n            <li>\r\n                <img src="images/friend_photo_temp.jpg" width="45" height="45" alt="汪小华"/>\r\n                <p class="">汪小华</p>\r\n                <pre class="font-smaller color-light-grey">最近访问：2014-10-11 访问次数：231</pre>\r\n            </li>\r\n            <li>\r\n                <img src="images/friend_photo_temp.jpg" width="45" height="45" alt="汪小华"/>\r\n                <p class="">汪小华</p>\r\n                <pre class="font-smaller color-light-grey">最近访问：2014-10-11 访问次数：2322</pre>\r\n            </li>\r\n            <li>\r\n                <img src="images/friend_photo_temp.jpg" width="45" height="45" alt="汪小华"/>\r\n                <p class="">汪小华</p>\r\n                <pre class="font-smaller color-light-grey">最近访问：2014-10-11 访问次数：231</pre>\r\n            </li>\r\n            <li>\r\n                <img src="images/friend_photo_temp.jpg" width="45" height="45" alt="汪小华"/>\r\n                <p class="">汪小华</p>\r\n                <pre class="font-smaller color-light-grey">最近访问：2014-10-11 访问次数：231</pre>\r\n            </li>\r\n            <li>\r\n                <img src="images/friend_photo_temp.jpg" width="45" height="45" alt="汪小华"/>\r\n                <p class="">汪小华</p>\r\n                <pre class="font-smaller color-light-grey">最近访问：2014-10-11 访问次数：2322</pre>\r\n            </li>\r\n            <li>\r\n                <img src="images/friend_photo_temp.jpg" width="45" height="45" alt="汪小华"/>\r\n                <p class="">汪小华</p>\r\n                <pre class="font-smaller color-light-grey">最近访问：2014-10-11 访问次数：231</pre>\r\n            </li>\r\n            <li>\r\n                <img src="images/friend_photo_temp.jpg" width="45" height="45" alt="汪小华"/>\r\n                <p class="">汪小华</p>\r\n                <pre class="font-smaller color-light-grey">最近访问：2014-10-11 访问次数：231</pre>\r\n            </li>\r\n            <li>\r\n                <img src="images/friend_photo_temp.jpg" width="45" height="45" alt="汪小华"/>\r\n                <p class="">汪小华</p>\r\n                <pre class="font-smaller color-light-grey">最近访问：2014-10-11 访问次数：2322</pre>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</section>\r\n<!--头部 start-->\r\n<header class="header bg-header color-white">\r\n    访客列表\r\n    <a href="#manageShop" title="我的商家信息"\r\n       class="btn-icon btn-icon-left icon-back left">\r\n    </a>\r\n</header>\r\n<!--头部 end-->';

}
return __p
};

this["UserCenter"]["JST"]["wifiList"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!--Wi-Fi云备份视图内容 start-->\r\n<section class="scroll-wrapper bg-grey">\r\n    <div class="scroller no-footer clearfix">\r\n        <ul class="section-box wifi-list">\r\n            <li>\r\n                <a href="javascript:void(0);" title="星巴克"\r\n                   class="wifi-item listitem arrow-right">\r\n                    星巴克\r\n                    <span class="wifi-type font-smaller color-light-grey">家庭热点</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href="javascript:void(0);" title="星巴克"\r\n                   class="wifi-item listitem arrow-right">\r\n                    星巴克\r\n                    <span class="wifi-type font-smaller color-light-grey">家庭热点</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href="javascript:void(0);" title="星巴克"\r\n                   class="wifi-item listitem arrow-right">\r\n                    星巴克\r\n                    <span class="wifi-type font-smaller color-light-grey">家庭热点</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href="javascript:void(0);" title="星巴克"\r\n                   class="wifi-item listitem arrow-right">\r\n                    星巴克\r\n                    <span class="wifi-type font-smaller color-light-grey">家庭热点</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href="javascript:void(0);" title="星巴克"\r\n                   class="wifi-item listitem arrow-right">\r\n                    星巴克\r\n                    <span class="wifi-type font-smaller color-light-grey">家庭热点</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href="javascript:void(0);" title="星巴克"\r\n                   class="wifi-item listitem arrow-right">\r\n                    星巴克\r\n                    <span class="wifi-type font-smaller color-light-grey">家庭热点</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href="javascript:void(0);" title="星巴克"\r\n                   class="wifi-item listitem arrow-right">\r\n                    星巴克\r\n                    <span class="wifi-type font-smaller color-light-grey">家庭热点</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href="javascript:void(0);" title="星巴克"\r\n                   class="wifi-item listitem arrow-right">\r\n                    星巴克\r\n                    <span class="wifi-type font-smaller color-light-grey">家庭热点</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href="javascript:void(0);" title="星巴克"\r\n                   class="wifi-item listitem arrow-right">\r\n                    星巴克\r\n                    <span class="wifi-type font-smaller color-light-grey">家庭热点</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href="javascript:void(0);" title="星巴克"\r\n                   class="wifi-item listitem arrow-right">\r\n                    星巴克\r\n                    <span class="wifi-type font-smaller color-light-grey">家庭热点</span>\r\n                </a>\r\n            </li>\r\n\r\n        </ul>\r\n    </div>\r\n</section>\r\n<!--Wi-Fi云备份视图内容 end-->\r\n\r\n<!--Wi-Fi云备份视图头部 start-->\r\n<header class="header bg-header color-white">\r\n    Wi-Fi云备份\r\n    <a href="#main" title="我的"\r\n       class="btn-icon btn-icon-left icon-back left">\r\n        我\r\n    </a>\r\n</header>\r\n<!--Wi-Fi云备份视图头部 end-->\r\n\r\n';

}
return __p
};
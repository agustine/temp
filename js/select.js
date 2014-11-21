/**
 * Created by Yexiaoyi on 2014/10/29.
 * 基于zepto/jquery插件，同时依赖于iscroll5
 * 用于移动端多级选择（最多3级）
 */

(function($){
    $.fn.selects = function(options){
        var $this = $(this); // 插件的this元素，触发多选的元素的jquery object
        var $wrapper, // 多选
            $title, $confirm, $cancel, // 标题、确定按钮、取消按钮jquery object
            columnsLength, columnWidth, // 选项的层级数，及按层级数计算出的单级容器宽度
            staticData, // 静态数据模式下的数据缓存
            $cols, // 各层级容器元素集合的 jquery object（collection）
            $col1, $col2, $col3; // 各层级容器的 jquery object

        // 默认选项配置
        var defaultOptions = {
            confirmText: '确认', // 确定按钮文本
            cancelText: '取消', // 取消按钮文本
            title: '选择', // 标题文本

            rootId: '1', // 数据的根id

            // 静态数据配置选项
            // 如果不为null或者undefined则直接使用其作为数据源，不再使用ajax方式
            staticData: null,

            // ajax接口url
            url: '',
            // url参数种用来替换父节点id的raplacement
            replacement: /\{\{parent\}\}/g,

            // 各级的标题，也用于确定总级数
            cols: ['', '', ''],

            /**
             * 用户数据转换为标准数据的方法
             * @param res 用户数据（当前配置的staticData或者ajax的response）
             * @returns {Array} 标准数据
             * [
             *  {
             *      text: text, // 选项文本
             *      value: value, // 选项值
             *      parent: parent // 选项的父节点值
             *  },
             *  ...
             * ]
             */
            parse: function(res){
            },
            /**
             * 用户点击确定按钮后的回调
             * @param result 选择的数据
             * [
             *  {
             *      text: text, // 选项文本
             *      value: value, // 选项值
             *  },
             *  ...
             * ]
             * @returns {boolean} 是否执行默认事件（把选定的值附给$this）
             * 例如如果返回为真
             * $this对象的innerHTML会被赋值为多级选选择项的text值以逗号分割，
             * 并且data-val属性被赋值为多级选选择项的value值以逗号分割
             * <tag data-val="value1,value2,value3">text1,text2,text3</tag>
             */
            confirm: function(result){
                return true;
            }
        };

        // 获取配置
        var opts = $.extend(defaultOptions, options);

        /**
         * 初始化
         */
        function init(){
            // 已选中值
            var selectedValues = $this.attr('data-val') ? $this.attr('data-val').split(',') : [];
            // 计算层级数
            columnsLength = opts.cols.length;
            columnsLength = columnsLength > 3 ? 3 : columnsLength;
            columnWidth = 100 / columnsLength;

            // 主容器
            $wrapper = $('<div>').addClass('selects-wrapper');

            // 顶部标题
            $title = $('<div>').addClass('selects-title').html(opts.title);
            $confirm = $('<a>').attr('href', 'javascript:void(0);')
                .on('click', confirm)
                .html(opts.confirmText).addClass('selects-confirm');
            $cancel = $('<a>').attr('href', 'javascript:void(0);')
                .on('click', hide)
                .html(opts.cancelText).addClass('selects-cancel');
            $title.append($confirm).append($cancel);

            // 构造选项列
            $cols = $();
            $col1 = createCol().attr('data-level', '1')
                .attr('data-default', selectedValues[0]); // 第一级
            if(columnsLength > 1){ // 判断是否有第二级，有则构造
                $col2 = createCol().attr('data-level', '2');
                $col2.css('left', columnWidth + '%')
                    .attr('data-default', selectedValues[1]);
            }
            if(columnsLength > 2){ // 判断是否有第三级，有则构造
                $col3 = createCol().attr('data-level', '3');
                $col3.css('left', (columnWidth * 2) + '%')
                    .attr('data-default', selectedValues[2]);
            }
            // 更新列宽
            $cols.css('width', columnWidth + '%');
            // 为最后一列添加last-col类
            $cols.eq(-1).addClass('last-col');


            loadOptions(opts.rootId, $col1, null);


            // 添加头
            $title.appendTo($wrapper);
            // 对话框dom插入body
            $wrapper.appendTo($('body'));

            // 为选项li添加click监听，以实现点击加载下一级
            $wrapper.on('click', 'li', selectFunction);

            // 为this添加click监听，以弹出对话款
            $this.on('click', function(){
                $wrapper.addClass('show');
            });
        }

        /**
         * 选中并加载下一级
         */
        function selectFunction(){
            var $this = $(this),
                parent = $this.attr('data-val'),
                $col = $this.parents('.selects-col'),
                level = $col.attr('data-level');
            $col.find('li.current').removeClass('current');
            $this.addClass('current');
            switch (level) {
                case '1':
                    if(loadOptions(parent, $col2, null) !== 'same'){
                        loadOptions('', $col3, null);
                    };
                    break;
                case '2':
                    loadOptions(parent, $col3, null);
                    break;
                case '3':
                default :
                    break;
            }
        }

        /**
         * 构建级容器dom
         * @returns 级容器的jquery object
         */
        function createCol(){
            var $col = $('<div>').addClass('selects-col').appendTo($wrapper);
            $cols = $cols.add($col);
            return $col;
        }

        /**
         * 记载分级选项数据并加载
         * @param parent 父节点的value
         * @param $col 级容器jquery object
         * @param callback 完成回调
         * @returns {string} 返回结果：
         * '': 成功
         * 'not exists': 该级不存在
         * 'same': 当前选项列表就是该父节点的选项列表
         * 'none': 父级节点id不存在
         */
        function loadOptions(parent, $col, callback){
            var url, // ajax的url
                $ul = $col.find('ul'); // 选项列表外容器ul的jquery object
            // 父级节点id不存在
            if(!parent){
                $ul.empty();
                return 'none';
            }
            // 级不存在
            if(!$col || $col.length === 0) return 'not exists';
            // 当前选项列表就是该父节点的选项列表
            if($col.attr('data-parent') && $col.attr('data-parent') === parent.toString()){
                return 'same';
            }
            // 更新级属性的parent属性，以为下一次请求做判断
            $col.attr('data-parent', parent);
            // 获得父容器ul，如果不存在则新建并初始化scroll
            if($ul.length === 0){
                $ul = $('<ul>').appendTo($col);
                $col.scroller = new IScroll($col.get(0), {
                    mouseWheel: true,
                    click: true
                });
            }
            // 清空父容器
            $ul.empty();

            // 从静态数据
            if(opts.staticData){
                // 如果数据没有转换则用选项中的parse方法做转换
                staticData = staticData || opts.parse(opts.staticData);
                // 筛选数据
                var data = $.map(staticData, function(item){
                    return item.parent.toString() === parent ? item : null;
                });
                // 插入dom
                fillOptions(data, $ul, $col, callback);
                return '';
            }

            // 从ajax
            // 用选项中的url、replacement和父节点value，转换出当前请求的url
            url = opts.url.replace(opts.replacement, parent);
            $.getJSON(url, function(res){
                // 用选项中的parse方法做转换
                var data = opts.parse(res);
                // 插入dom
                fillOptions(data, $ul, $col, callback);
            });
            return '';
        }

        /**
         * 填充单级选项dom
         * @param data 选项数据
         * @param $ul 选项的容器的jquery object
         * @param $col 级容器的jquery object
         * @param callback 完成回调
         */
        function fillOptions(data, $ul, $col, callback){
            var $lis = $(), // 选项li的jquery object（collection）
                selectedValue = $col.attr('data-default'),
                $selectedLi;
            $col.removeAttr('data-default');
            // 判断数据是否为null、undefined或空数组
            if(!data || data.length === 0){
                return;
            }
            // 遍历选项数据生成dom
            $.each(data, function(i, item){
                var $li = $('<li>').attr('data-val', item.value).html(item.text);
                $lis = $lis.add($li);
                if(item.value.toString() === selectedValue)
                    $selectedLi = $li;
            });
            // 插入dom
            $lis.appendTo($ul);

            if(callback){
                callback($col);
            }

            if(selectedValue && $selectedLi){
                selectFunction.call($selectedLi);
            }


            // 刷新该级dom的scroll
            setTimeout(function(){
                $col.scroller.refresh();
            }, 0);
        }

        /**
         * 按级获取用户的选择
         * @param $col 级容器的jquery object
         * @returns {*}
         */
        function getSelectedValue($col){
            var $selectedLi; // 选择的选项li的jquery object
            // 如果容器的jquery object为null或者undefined返回null
            if(!$col) {
                return null;
            }
            // 获取选择的选项的li
            $selectedLi = $col.find('li.current');
            // 如果获取选择的选项为null或者undefined返回null
            if(!$selectedLi || $selectedLi.length === 0){
                return null;
            }
            // 返回所选项的数据
            return {
                text: $selectedLi.html(),
                value: $selectedLi.attr('data-val')
            }
        }

        /**
         * 确定按钮的监听事件
         * @returns {boolean}
         */
        function confirm(){
            // 获取用户选择的数据构成数组
            var result = $.map($cols,function(col){
                return getSelectedValue($(col));
            });

            // 如果确定按钮的回调存在则执行，
            // 并按其返回值判断是否执行默认的赋值
            if(opts.confirm && !opts.confirm(result)) {
                return hide();
            }

            // 默认"确定"按钮的赋值
            $this.html($.map(result,function(item){
                return item.text;
            }).join(','));
            $this.attr('data-val', $.map(result,function(item){
                return item.value;
            }).join(','));
            return hide();
        }

        /**
         * 隐藏对话框
         * @returns {boolean}
         */
        function hide(){
            $wrapper.removeClass('show');
            return false;
        }


//        function setDefault(){
//            // 已选中值
//            var selectedValues = $this.attr('data-val').split(',');
//            if(!selectedValues || selectedValues.length === 0){
//                return;
//            }
//        }

        // 执行初始化
        init();



        // 返回$this元素本身,以支持链式调用
        return $this;
    }
})($);


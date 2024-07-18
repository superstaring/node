// Tab切换

var that;
class Tab {
    constructor(id) {
        that = this;
        // 获取元素
        this.main = document.querySelector(id);

        this.add = this.main.querySelector('.tabadd');
        // li的父元素
        this.ul = this.main.querySelector('.fisrstnav ul:first-child');
        // section的父元素
        this.fsection = this.main.querySelector('.tabscon');

        this.init();
    }
    init() {
        this.updateNode();
        // init初始化操作让相关的元素绑定事件
        this.add.onclick = this.addTab;

        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;  // 不能添加小()
            // 删除按钮
            this.remove[i].onclick = this.removeTab;
            // 编辑按钮
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        }
    }
    // 获取所有的小li和section 删除
    updateNode() {
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        // 删除元素
        this.remove = this.main.querySelectorAll('.icon-guanbi');
        // 编辑
        this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child');
    }
    // 1.切换功能
    toggleTab() {
        // this指向this.lis[i]
        that.clearClass();
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive';
    }
    // 清空其它的样式
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
    // 2.添加功能
    addTab() {
        // 2.1创建li元素和section元素
        // 2.2把这两个元素添加到父元素里面
        that.clearClass();

        var random = Math.random();

        var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
        that.ul.insertAdjacentHTML('beforeend', li);

        var section = '<section class="conactive">测试 ' + random + '</section>';
        that.fsection.insertAdjacentHTML('beforeend', section);

        that.init();  // 注意点，否则新添加的li和section没有绑定事件
    }
    // 3.删除功能
    removeTab(e) {
        // 阻止事件冒泡
        e.stopPropagation();
        var index = this.parentNode.index;
        // 删除对应的li和section
        that.lis[index].remove();
        that.sections[index].remove();

        that.init();
        // 当我们删除的不是选中状态的时候，原来的选中状态保持不变
        if (document.querySelector('.liactive')) return;

        // 当我们删除了选中状态的这个li的时候，让它的前一个li处于选定状态
        index--;
        // 手动调用我们的点击事件 
        that.lis[index] && that.lis[index].click();
    }
    // 4.修改功能
    editTab() {
        var str = this.innerHTML;
        // 双击禁止选中文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();

        this.innerHTML = '<input type="text" />'
        var input = this.children[0];
        input.value = str;
        input.select(); // 文本框中的文字处于选中状态

        // 当我们离开文本框就把文本框里面的值给span
        input.onblur = function () {
            this.parentNode.innerHTML = this.value
        }
        // 按下回车键
        input.onkeyup = function (e) {
            if (e.keyCode === 13) {
                // 手动调用失去焦点事件
                this.blur();
            }
        }
    }
}

var tab = new Tab('#tab');

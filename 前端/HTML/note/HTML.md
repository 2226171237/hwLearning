# HTML详解

## 1. 网页基本信息

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="keywords" content="HTML学习">
    <meta name="description" content="我的第一个HTML页面">
    <title>Hello</title>
</head>
<body>
    Hello World HTML!
</body>
</html>
```

* DOCTYPE: 告诉浏览器我们要使用的规范
* html: 总标签
* head: 网页的头部
* meta: 描述性标签，描述网站的基本信息，一般用来做SEO
* title: 网页的标题
* body: 网页的主体

## 2. 网页的基本标签

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>基本标签</title>
</head>
<body>
<!--标题标签-->
<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
<!--段落标签-->
<p>这是一个段落1</p>
<p>这是一个段落2</p>
<p>这是一个段落3</p>
<!--换行标签-->
后面有一个换行<br/>
后面有一个换行<br/>
后面有一个换行<br/>
<!--水平线标签-->
<hr/>
上面有一个水平线<br>
<!--字体样式：粗体，斜体-->
<strong>粗体样式</strong><br>
<em>斜体样式</em><br>
<!--特殊符号-->
空格：空&nbsp;&nbsp;两个空格<br>
大于号：&gt;<br>
小于号：&lt;<br>
版权符号：&copy;<br>
</body>
</html>
```

![image-20221225174724681](https://liyajieimgs.oss-cn-nanjing.aliyuncs.com/imgs/image-20221225174724681.png)

## 3. 图像标签

![image-20221225174859157](https://liyajieimgs.oss-cn-nanjing.aliyuncs.com/imgs/image-20221225174859157.png)

图像找不到时，会显示alt属性中的文字。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>图像标签</title>
</head>
<body>
<img src="https://liyajieimgs.oss-cn-nanjing.aliyuncs.com/imgs/LuffyQ.png" alt="小胖子" title="测试图像">
</body>
</html>
```

![image-20221225175444317](https://liyajieimgs.oss-cn-nanjing.aliyuncs.com/imgs/image-20221225175444317.png)

## 4. 超链接标签

![image-20221225175550880](https://liyajieimgs.oss-cn-nanjing.aliyuncs.com/imgs/image-20221225175550880.png)

target: 默认值为\_self 在自身页签打开，\_blank为在新页签打开。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>链接标签</title>
</head>
<body>
<a name="top">顶部锚标记</a><br>
<a href="1.我的第一个网页.html">跳转到我的第一个网页</a><br>
<a href="https://www.baidu.com">跳转到百度</a><br>

<!--图像作为超链接-->
<a href="1.我的第一个网页.html">
    <img src="https://liyajieimgs.oss-cn-nanjing.aliyuncs.com/imgs/LuffyQ.png" alt="小胖子" title="跳转到我的第一个网页">
</a><br>

<!--target: _blank在新页签中打开-->
<a href="https://www.baidu.com" target="_blank">在新页签中跳转到百度</a><br>

<!--锚链接
1. 需要一个标记
2. 跳转到标记： href=#标记名称
-->
<a href="#top">跳转到顶部</a><br>

<!--锚链接：跳转到另一个页面的锚点, href=页面#标记名称-->
<a href="1.我的第一个网页.html#top">跳转到我的第一个网页的顶部</a><br>

<!--功能性链接：邮件链接-->
<a href="mailto:2226171237@qq.com">点击联系我</a>
</body>
</html>
```

![image-20221225181637438](https://liyajieimgs.oss-cn-nanjing.aliyuncs.com/imgs/image-20221225181637438.png)

## 5. 块元素和行内元素

* 块元素：

  无论内容多少，该元素**独占一行**

  如 p, h1-h6..... 元素

* 行内元素：

  内容撑开宽度，左右都是行内元素的可以排在一行,不会换行

  如 a, strong，em, span, ....等

## 6. 列表标签

* 无序列表
* 有序列表
* 自定义列表

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>列表标签</title>
</head>
<body>

<!--有序列表 order list: ol   list item: li-->
有序列表：<br>
<ol>
    <li>Java</li>
    <li>C++</li>
    <li>Python</li>
</ol>
<hr>
<!--无序列表 unOrder list : ul-->
无序列表：<br>
<ul>
    <li>Java</li>
    <li>C++</li>
    <li>Python</li>
</ul>
<hr>
<!--自定义列表 define list: dl  define title: dt 列表标题  define data：dd 列表内容-->
自定义列表：<br>
<dl>
    <dt>学科</dt>
        <dd>Java</dd>
        <dd>C++</dd>
        <dd>Python</dd>
    <dt>城市</dt>
        <dd>上海</dd>
        <dd>北京</dd>
        <dd>南京</dd>
</dl>
</body>
</html>
```

![image-20221225183413310](https://liyajieimgs.oss-cn-nanjing.aliyuncs.com/imgs/image-20221225183413310.png)

## 7. 表格

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>表格</title>
</head>
<body>

<!--table标签
tr: 行标签
td: 列标签
-->
<table border="1px">
    <tr>
        <td>1-1</td>
        <td>1-2</td>
        <td>1-3</td>
    </tr>
    <tr>
        <!--跨行, 占2行-->
        <td rowspan="2">2-1</td>
        <td>2-2</td>
        <td>2-3</td>
    </tr>
    <tr>
        <td>3-1</td>
        <td>3-2</td>
    </tr>
    <tr>
        <!--跨列, 占3列-->
        <td colspan="3">4-1</td>
    </tr>
</table>
</body>
</html>
```

![image-20221225184130019](https://liyajieimgs.oss-cn-nanjing.aliyuncs.com/imgs/image-20221225184130019.png)

## 8. 媒体元素

* 视频元素： video
* 音频元素：audio

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>媒体元素</title>
</head>
<body>

<video src="../resource/video/片头.mp4" controls></video>

<audio src="../resource/video/片头.mp3"></audio>
</body>
</html>
```

## 9. 页面结构分析

<img src="https://liyajieimgs.oss-cn-nanjing.aliyuncs.com/imgs/image-20221225184709364.png" alt="image-20221225184709364" style="zoom:80%;" />

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>页面结构</title>
</head>
<body>

<header>
    <h2>页面头部</h2>
</header>

<section>
    <h2>页面主体</h2>
</section>

<footer>
    <h2>页面脚部</h2>
</footer>
</body>
</html>
```

## 10. iframe内联框架

![image-20221225185235562](https://liyajieimgs.oss-cn-nanjing.aliyuncs.com/imgs/image-20221225185235562.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>内嵌框架</title>
</head>
<body>

<iframe src="https://www.baidu.com" width="1000px" height="800px" frameborder="1" name="myframe"></iframe>

<!--超链接 target 为iframe的名称，则在iframe中跳转-->
<a href="1.我的第一个网页.html" target="myframe">点击iframe中跳转我的第一个网页</a>
</body>
</html>
```

<img src="https://liyajieimgs.oss-cn-nanjing.aliyuncs.com/imgs/image-20221225190037232.png" alt="image-20221225190037232" style="zoom:67%;" />

## 11. 表单语法

<img src="https://liyajieimgs.oss-cn-nanjing.aliyuncs.com/imgs/image-20221225190113749.png" alt="image-20221225190113749" style="zoom:80%;" />

 ```html
 <!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <title>表单学习</title>
 </head>
 <body>
 登录注册：<br>
 <!-- 表单学习
 method: post、get
 action: 可以时一个网站，也可以是一个api接口
 -->
 <form method="get" action="1.我的第一个网页.html">
     <!--input: name为提交时变量名，type为输入框类型-->
     <p>名字：<input type="text" name="username"></p>
     <p>密码：<input type="password" name="password"></p>
     <p>
         <button type="submit">提交</button>
         <button type="reset">重置</button>
     </p>
 </form>
 </body>
 </html>
 ```

![image-20221225191353051](https://liyajieimgs.oss-cn-nanjing.aliyuncs.com/imgs/image-20221225191353051.png)

### 11.1 input元素属性：

<img src="https://liyajieimgs.oss-cn-nanjing.aliyuncs.com/imgs/image-20221225191441601.png" alt="image-20221225191441601" style="zoom:80%;" />

### 11.2 输入文本框、单选、多选和按钮

```html
<form method="get" action="1.我的第一个网页.html">
    <!--input: name为提交时变量名，type为输入框类型-->
    <p>名字：<input type="text" name="username" value="admin" maxlength="8"></p>
    <p>密码：<input type="password" name="password"></p>
    <!--单选框-->
    <p>性别：
        <!--同一组内的选项的name值要一样-->
        <input type="radio" name="sex" value="boy">男
        <input type="radio" name="sex" value="girl">女
    </p>
    <!--多选框-->
    <p>爱好：
        <!--同一组内的选项的name值要一样-->
        <input type="checkbox" name="hobby" value="sleep">睡觉
        <input type="checkbox" name="hobby" value="codding">写代码
        <input type="checkbox" name="hobby" value="chat">聊天
    </p>
    <!--按钮-->
    <p>按钮：
        <input type="button" name="bt1" value="点击变长">
        <input type="image" src="https://liyajieimgs.oss-cn-nanjing.aliyuncs.com/imgs/LuffyQ.png">
    </p>
    <p>
        <button type="submit">提交</button>
        <button type="reset">重置</button>
    </p>
</form>
```

![image-20221225193220168](https://liyajieimgs.oss-cn-nanjing.aliyuncs.com/imgs/image-20221225193220168.png)

### 11.3 下拉选择框、文本域和文件域

```html
<form method="get" action="1.我的第一个网页.html">
    <!--下拉框-->
    <p>
        国家：
        <select name="country" >
            <!--selected 表示默认被选择-->
            <option value="china" selected>中国</option>
            <option value="us">美国</option>
            <option value="english">日本</option>
        </select>
    </p>
    <!--文本域，多行文本-->
    <p>
        描述：
        <textarea name="desp" cols="100" rows="10">简单描述......</textarea>
    </p>
    <!--文件域-->
    <p>
        选择文件：
        <input type="file" name="file">
        <input type="button" name="upload" value="上传">
    </p>
    <p>
        <input type="submit">
        <input type="reset">
    </p>
</form>
```

![image-20221225194026196](https://liyajieimgs.oss-cn-nanjing.aliyuncs.com/imgs/image-20221225194026196.png)

### 11.4 搜索框，滑块，简单验证

```html
<form method="get" action="1.我的第一个网页.html">
    <!--邮件验证，点击提交时会验证邮箱-->
    <p>邮件：<input type="email" name="email"></p>
    <!--URL验证，点击提交时会验证URL-->
    <p>URL：<input type="url" name="url"></p>
    <!--数字验证-->
    <p>数字：<input type="number" name="count" min="0" max="100" step="10"></p>
    <!--滑块-->
    <p>滑块：<input type="range" name="range" min="0" max="100" step="10"></p>
    <!--搜素-->
    <p>搜索：<input type="search" name="search"></p>
    <p>
        <input type="submit">
        <input type="reset">
    </p>
</form>
```

![image-20221225194907294](https://liyajieimgs.oss-cn-nanjing.aliyuncs.com/imgs/image-20221225194907294.png)

### 11.5 只读、禁用、隐藏域

```html
<form method="get" action="1.我的第一个网页.html">
    <p>只读：<input type="text" name="readonly" value="readonly" readonly></p>
    <!--禁用 disabled属性-->
    <p>禁用：<input type="button" name="disable" value="disabled" disabled></p>
    <!--隐藏 hidden属性 不显示，但是还存在-->
    <p>隐藏：<input type="text" name="hidden" value="hidden" hidden></p>
    <!--鼠标增强可用性，label标签 for属性指向标签id， 当点击label时则光标在输入框内-->
    <p>
        <label for="mark">你点我试试</label>
        <input  id="mark" type="text" name="labelinput"></p>
    <p>
        <input type="submit">
        <input type="reset">
    </p>
</form>
```

![image-20221225200106343](https://liyajieimgs.oss-cn-nanjing.aliyuncs.com/imgs/image-20221225200106343.png)

### 11.6 表单初级验证

（1）placeholder: 提示信息

（2）required: 输入不能为空

（3）pattern: 正则校验

```html
<form method="get" action="1.我的第一个网页.html">
    <!--提示信息 placeholder-->
    <p>提示信息：<input type="text" name="plc" placeholder="请输入..."></p>
    <!--不为空 required-->
    <p>不为空：<input type="text" name="required" required></p>
    <!--正则校验 pattern-->
    <p>正则校验-只能输入小写字母：<input type="text" name="part" value="" pattern="[a-z]+"></p>
    <p>
        <input type="submit">
        <input type="reset">
    </p>
</form>
```

![image-20221225200839215](https://liyajieimgs.oss-cn-nanjing.aliyuncs.com/imgs/image-20221225200839215.png)

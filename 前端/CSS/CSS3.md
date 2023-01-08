# CSS3

## 1. CSS简介

CSS：Cascading Style Sheet 层叠样式表

作用：美化网页，字体，颜色，边距，宽度，高度，。。。。

发展史：

* CSS1.0：
* CSS2.0：div+css 提出html与css分离，网页变得简单，SEO
* CSS2.1：浮动和定位
* CSS3.0：圆角边框、阴影、动画.....     浏览器兼容性问题

快速入门：

1. 建立index.html， 并使用link引入样式

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Hello World CSS</title>
       <!--引入样式-->
       <link rel="stylesheet" href="css/index.css">
   </head>
   <body>
       <h1>Hello World CSS3</h1>
   </body>
   </html>
   ```

2. 建立css/index.css

   ```css
   /*    style语法
   选择器 {
       声明1;
       声明1;
       声明1;
       声明1;
   }
   */
   h1 {
       color: red;
   }
   ```

## 2. 四种CSS导入方式

* 行内样式：在标签中增加style属性

  ```html
  <h1 style="color:red; background:antiquewhite">Hello World CSS3</h1>
  ```

* style内部样式，比行内样式优先级低, 字体颜色是行内样式的颜色 red。

  ```
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Hello World CSS</title>
      <style>
          h1 {
              color: green;
          }
      </style>
  </head>
  <body>
      <h1 style="color:red;background: antiquewhite">Hello World CSS3</h1>
  </body>
  </html>
  ```

* 外部样式， 单独在css文件中引入的， 字体颜色为green.

  index.css

  ```
  h1 {
      color: blue;
  }
  ```

  index.html

  ```html
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Hello World CSS</title>
      <link rel="stylesheet" href="css/index.css">
      <style>
          h1 {
              color: green;
          }
      </style>
  </head>
  <body>
      <h1 style="background: antiquewhite">Hello World CSS3</h1>
  </body>
  </html>
  ```

优先级：**就近原则**(后声明的会覆盖之前声明的)，谁离元素标签最近谁优先级最高。行内样式最近，优先级最高，内部样式和外部样式看代码位置。

如下：内部样式不外部样式离元素近，所以优先级高，颜色为green。

```html
<head>
    <meta charset="UTF-8">
    <title>Hello World CSS</title>
    <link rel="stylesheet" href="css/index.css">
    <style>
        h1 {
            color: green;
        }
    </style>
</head>
<body>
    <h1 style="background: antiquewhite">Hello World CSS3</h1>
</body>
</html>
```

如下：外部样式离元素近，所以优先级高, 颜色为index.css中的blue。

```html
<head>
    <meta charset="UTF-8">
    <title>Hello World CSS</title>
    <style>
        h1 {
            color: green;
        }
    </style>
    <link rel="stylesheet" href="css/index.css">
</head>
<body>
    <h1 style="background: antiquewhite">Hello World CSS3</h1>
</body>
</html>
```

* 外部样式的两种方式：

  （1）link链接式：

  ```html
  <link rel="stylesheet" href="css/index.css">
  ```

  （2）导入式：不会使用了

  ```html
  <style>
  	@import url("css/index.css");       
  </style>
  ```

## 3. 三种基本选择器

选择器：选择页面上的某一个或某一类元素。

### 3.1 基本原则器

* 标签选择器

  语法：

  ```html
  标签 {
  	声明1;
  	声明2;
  	声明3;
  }
  ```

  样例：

  ```html
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>基本选择器</title>
      <style>
          /*标签选择器：会选择页面上所有指定的标签*/
          h1 {
              color: red;
              background: aquamarine;
              border-radius: 20px;
          }
          p {
              color: green;
          }
      </style>
  </head>
  <body>
  <h1>Hello Html</h1>
  <h1>Hello Html</h1>
  <p>这是一个HTML CSS3.0 样例</p>
  </body>
  </html>
  ```

  ![image-20221225233557493](https://liyajieimgs.oss-cn-nanjing.aliyuncs.com/imgs/image-20221225233557493.png)

* 类选择器

  语法：

  ```html
  .类名 {
  	声明1;
  	声明2;
  	声明3;
  }
  ```

  样例：

  ```html
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>基本选择器</title>
      <style>
          /*类选择器：会选择页面上所有指定的类，可以是多个类*/
          .hello1 {
              color: black;
              background: wheat;
              border-radius: 20px;
          }
      </style>
  </head>
  <body>
  <h1 class="hello1">Hello Html</h1>
  <h1>Hello Html</h1>
  <p>这是一个HTML CSS3.0 样例</p>
  </body>
  </html>
  ```

  ![image-20221225234206299](https://liyajieimgs.oss-cn-nanjing.aliyuncs.com/imgs/image-20221225234206299.png)

* id选择器

  语法：id选择器全局唯一

  ```html
  #id名称 {
  	声明1;
  	声明2;
  	声明3;
  }
  ```

  样例：

  ```html
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>基本选择器</title>
      <style>
          /*id选择器：会选择页面上所有指定的标签，id全局唯一*/
          #test1 {
              color: black;
              background: wheat;
              border-radius: 20px;
          }
      </style>
  </head>
  <body>
  <h1 class="hello1">Hello Html</h1>
  <h1>Hello Html</h1>
  <p  id="test1">这是一个HTML CSS3.0 样例</p>
  </body>
  </html>
  ```

  ![image-20221225234559118](https://liyajieimgs.oss-cn-nanjing.aliyuncs.com/imgs/image-20221225234559118.png)

**优先级不遵循就近原则：id选择器>类选择器>标签选择器**

### 3.2 层次选择器

* 后代选择器 ：在某选择的后面

  语法：

  ```html
  父元素 子元素 {
  	声明1;
  	声明2;
  	声明3;
  }
  ```

  示例：ul标签后的p全部变为了 blue.

  ```html
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>层次选择器</title>
      <style>
          p {
              color: red;
          }
          /* ul后面的所有p标签，不管隔了几代*/
          ul p {
              color: blue;
          }
      </style>
  </head>
  <body>
  <p>p1</p>
  <p>p2</p>
  <p>p3</p>
  <ul>
      <li>
          <p>p5</p>
      </li>
      <li>
          <p>p5</p>
      </li>
      <li>
          <p>p5</p>
      </li>
  </ul>
  </body>
  </html>
  ```

  ![image-20221226000256772](https://liyajieimgs.oss-cn-nanjing.aliyuncs.com/imgs/image-20221226000256772.png)

* 子选择器: 相比后代选择器，只相隔一代

  语法：

  ```html
  父元素 > 子元素 {
  	声明1;
  	声明2;
  	声明3;
  }
  ```

  样例：要li下的p 才能改变p的颜色。

  ```html
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>层次选择器</title>
      <style>
          p {
              color: red;
          }
          /* li后面的子p标签，只隔一代*/
          li > p {
              color: blue;
          }
      </style>
  </head>
  <body>
  <p>p1</p>
  <p>p2</p>
  <p>p3</p>
  <ul>
      <li>
          <p>p5</p>
      </li>
      <li>
          <p>p5</p>
      </li>
      <li>
          <p>p5</p>
      </li>
  </ul>
  </body>
  </html>
  ```

  ![image-20221226000256772](https://liyajieimgs.oss-cn-nanjing.aliyuncs.com/imgs/image-20221226000256772.png)

  

* 相邻兄弟选择器 ：选择的同层的下一个选择(只有一个)，且必须相邻。

  语法：

  ```
  元素1 + 元素2 {
  	声明1;
  	声明2;
  	声明3;
  }
  ```

  示例：

  ```
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>层次选择器</title>
      <style>
          p {
              color: red;
          }
          /* ul后面相邻兄弟p*/
          ul + p  {
              color: blue;
          }
      </style>
  </head>
  <body>
  <p>p1</p>
  <p>p2</p>
  <p>p3</p>
  <ul>
      <li>
          <p>p5</p>
      </li>
      <li>
          <p>p5</p>
      </li>
      <li>
          <p>p5</p>
      </li>
  </ul>
  <p>p6</p>
  </body>
  ```

  ![image-20221226001153910](https://liyajieimgs.oss-cn-nanjing.aliyuncs.com/imgs/image-20221226001153910.png)

* 通用兄弟选择器：当前选择元素的向下所有同层兄弟

  语法：

  ```html
  元素1 ~ 元素2 {
  	声明1;
  	声明2;
  	声明3;
  }
  ```

  示例：

  ```html
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>层次选择器</title>
      <style>
          p {
              color: red;
          }
  
          .activate ~ p  {
              color: blue;
          }
      </style>
  </head>
  <body>
  <p>p1</p>
  <p class="activate">p2</p>
  <p>p3</p>
  <ul>
      <li>
          <p>p5</p>
      </li>
      <li>
          <p>p5</p>
      </li>
      <li>
          <p>p5</p>
      </li>
  </ul>
  <p>p6</p>
  </body>
  </html>
  ```

  ![image-20221226001517644](https://liyajieimgs.oss-cn-nanjing.aliyuncs.com/imgs/image-20221226001517644.png)

### 3.3 结构伪类选择器

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>结构伪类选择器</title>
    <style>
        /*ul的第一个子元素*/
        ul li:first-child {
            background: red;
        }
        /*ul的最后一个子元素*/
        ul li:last-child {
            background: blue;
        }

        /*选中p的父级元素的的第n个子元素，且这个元素是p元素才生效*/
        /*n=1时不生效，应为是h1标签不是p标签，n=2时生效*/
        p:nth-child(2) {
            background: green;
        }

        /*选中p的父级元素下的第n个p元素*/
        p:nth-of-type(2) {
            background: brown;
        }
    </style>
</head>
<body>
    <h1>h1</h1>
    <p>p1</p>
    <p>p2</p>
    <p>p3</p>
    <ul>
        <li>li1</li>
        <li>li2</li>
        <li>li3</li>
    </ul>
</body>
</html>
```

![image-20221226003118362](https://liyajieimgs.oss-cn-nanjing.aliyuncs.com/imgs/image-20221226003118362.png)

### 3.4 属性选择器

语法：

```html
元素[属性] {
	....
}
```

```css
/*选择a标签有id属性的元素*/
a[id] {
	color: red;
}

/*选择a标签有id属性为first的元素 ,值还可以使用正则匹配*/
a[id=first] {
	color: red;
}

/*选择a标签有id属性为links的元素 */
a[class="links"] {
	color: red;
}

/*选择a标签有id属性包含links的元素 */
a[class*="links"] {
	color: red;
}

/*选择a标签有href属性以http开头的元素 */
a[href^="http"] {
	color: red;
}

/*选择a标签有href属性以.pdf结尾的元素 */
a[href$=".pdf"] {
	color: red;
}
```

## 4. CSS作用及字体样式

美化界面和样式。

### 4.1 字体样式

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>字体样式</title>
    <style>
        /*
        font-family: 字体
        color: 颜色
        font-size: 大小
        font-weight: 粗细
        */
        body {
            font-family: 楷体;
            color: black;
        }
        h1 {
            font-size: 50px;
        }
        p {
            font-size: 30px;
            font-weight: bold;
        }
        .test {
            /*粗细，大小，字体*/
            font: bold 60px 楷体;
        }

    </style>
</head>
<body>

<h1>习近平在中央农村工作会议上强调 锚定建设农业强国目标 切实抓好农业农村工作</h1>

<p>
  习近平指出，农业强国是社会主义现代化强国的根基，满足人民美好生活需要、实现高质量发展、夯实国家安全基础，都离不开农业发展。
  建设农业强国要体现中国特色，立足我国国情，立足人多地少的资源禀赋、农耕文明的历史底蕴、人与自然和谐共生的时代要求，走自己的路，不简单照搬国外现代化农业强国模式。
  要依靠自己力量端牢饭碗，依托双层经营体制发展农业，发展生态低碳农业，赓续农耕文明，扎实推进共同富裕。
</p>

<p class="test">
  当前，要锚定建设农业强国目标，科学谋划和推进“三农”工作，加强顶层设计，制定加快建设农业强国规划；
  循序渐进、稳扎稳打，多做打基础、利长远的事情；因地制宜、注重实效，立足资源禀赋和发展阶段，解决农业农村发展最迫切、农民反映最强烈的实际问题，不搞脱离实际的面子工程。
</p>
</body>
</html>
```

![image-20221227001501921](https://liyajieimgs.oss-cn-nanjing.aliyuncs.com/imgs/image-20221227001501921.png)

### 4.2 文本样式

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>文本样式</title>
    <style>
        h1 {
            color: rgba(156,25,100,0.6);
            text-align: center; /*排版：居中*/
        }
        p {
            text-indent: 2em; /*段落首行缩进2个字 1个em代表一个字*/
            line-height: 50px; /*行高*/
            background: black; /*背景颜色*/
            color: white;
        }
    </style>
</head>
<body>

<h1>简单介绍</h1>
<p>
    当前，要锚定建设农业强国目标，科学谋划和推进“三农”工作，加强顶层设计，制定加快建设农业强国规划；
    循序渐进、稳扎稳打，多做打基础、利长远的事情；因地制宜、注重实效，立足资源禀赋和发展阶段，解决农业农村发展最迫切、农民反映最强烈的实际问题，不搞脱离实际的面子工程。
</p>
</body>
</html>
```

![image-20221227003103819](https://liyajieimgs.oss-cn-nanjing.aliyuncs.com/imgs/image-20221227003103819.png)

## 5. 文本阴影和超链接伪类

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        a {
            text-decoration: none;
            color: black;
        }
        /*伪类，鼠标悬浮*/
        a:hover {
            color: orange;
            font-size: 50px;
        }
        /*伪类，鼠标按住未释放*/
        a:active {
            color: green;
        }
        /*伪类，鼠标点击之后*/
        a:active {
            color: red;
        }
        /*阴影*/
        #price {
            text-shadow: wheat 10px 10px 5px;
        }
    </style>
</head>
<body>
<p><img src="img/img.png"></img></p>
<p><a>毫无意义</a></p>
<p><a>作者：[美] 伍迪·艾伦</a></p>
<p><a id="price"> 定价: 69</a></p>
</body>
</html>
```

<img src="https://liyajieimgs.oss-cn-nanjing.aliyuncs.com/imgs/image-20221227004905108.png" alt="image-20221227004905108" style="zoom:67%;" />

# 1. RESTful

REST: Resource Representational State Transfer  资源表示层状态转化。现有REST理论基础，才有HTTP/1.1。

REST是理论，RESTful 是指应用使用REST理论实现。

* **Resource 资源**：

  就是网络上的一个实体，或者说是网络上的一个具体的信息。它可以是一个文本、一张图片、一首歌曲、一种服务等，总之就是一个具体的实体。你可以使用一个URI （统一资源标识符）指向它，每种资源对应一个特定的URI。要获取这个资源，访问它的URI就可以了，因此URI称为每个资源地址或者独一无二的标识符。

  网络上一切皆资源。

* **Representational 表现层**：

  资源是一种信息实体，它可以有多种外在的表现形式。我们把资源具体表现出来的形式，叫做它的表现。

  比如，文本 可以用txt格式表现，也可以使用HTML格式，XML格式，JSON格式表现，甚至可以采用二进制格式；图片可以使用JPG格式，也可以使用PNG格式表现。

  URI 只代表资源的实体，不代表它的表现形式。它的具体表现形式，应该在HTTP请求的头信息中用 Accept 和Content-Type字段指定，这两个字段才是对表现层的描述。

* **State Transfer 状态转化**：

  访问一个网站，就代表了客户端和服务器的一个互动过程，在这个过程中，涉及了数据和状态的变化。如访问如下员工信息，改变服务器端的状态：

  https://www.wolfcode.cn/employees

  新增：数据从无到有的状态变化；

  更新：从某一个状态到另一个状态的转化；

  删除：从有到无的状态变化。

   HTTP协议是无状态协议，这意味着，所有的状态都保存在服务器端。因此如果客户端想要操作服务器就必须通过某种手段，让服务器发生”状态转化“。而这种转化是建立在表示层之上的，所以就是 **表现层状态转化**。 	   

* **Unifrom Interface  统一接口**：

  REST要求，必须通过**统一的接口**来对资源执行各种操作，对于每个资源只能执行一组有限的操作。

  

  HTTP1.1 为例：

  7个HTTP方法：GET,POST,PUT,DELETE,PATCH,HEAD,OPTIONS

  HTTP头信息（可自定义）

  HTTP响应状态代码（可自定义）

  这些都是HTTP1.1协议提供的统一接口。

  

  REST还要求，对资源执行操作，其操作语义必须由HTTP消息体之前的部分完全表达，不能将操作语义封装在HTTP消息体内部。

# 2. 关于应用接口

公共接口，私有接口。

# 3 RESTful 设计

## 3.1 资源设计规则

以前完成需求的方式，如：

1. 帖子列表，支持过滤和分页：https://www.bbs.wolfcode.cn/bbs_list.do?keyword=xx&currentPage=1
2. 发乎一篇帖子：https://www.bbs.wolfcode.cn/bbs_post.do?title=xx&content=xxx
3. 修改一篇帖子：https://www.bbs.wolfcode.cn/bbs_update.do?title=xx&content=xxx&id=xx
4. 删除一篇帖子：https://www.bbs.wolfcode.cn/bbs_delete.do?id=xx

问题：大量的接口方法，URL地址设计复杂，需要在URL里面表示出资源和操作以及参数。



现在方式：

在RESTful架构中，每个网址代表一种资源，所以网址中不能有动词（也就是操作），只能由名词，而且所有的名词往往与数据库的表格名对应。一般来说，数据库中表都是同种记录的集合，所以URI 中的名词也应该使用复数。

https://api.example.com/v1/zoos  : 动物园资源

https://api.example.com/v1/animals  : 动物资源

https://api.example.com/v1/employees  : 饲养员资源

例子：https://api.github.com/

## 3.2 动作设计规则

### 3.2.1 HTTP 动作

1. **GET（SELECT）：从服务器取出资源（一项或多项）**
2. **POST（CREATE）：在服务器新建一个资源**
3. **PUT（UPDATE）：在服务器更新资源（客户端提供改变后的完整资源），PUT 更新整个对象**
4. **PATCH（UPDATE）：在服务器更新资源（客户端提供改变的属性（补丁）），PATCH更新个别属性**
5. **DELETE（DELETE）：从不敢服务器删除资源**
6. HEAD ：获取一个资源的元数据，比如一个资源的hash值或者最后修改日期。
7. OPTIONS：获取客户端针对一个资源能够实施的操作；（获取该资源的api(能够对资源做什么操作的描述)）

### 3.2.2 动作示例

1. GET /zoos：列出所有动物园
2. POST /zoos：新建一个动物园
3. GET /zoos/ID：获取指定动物园的信息
4. PUT /zoos/ID：更新某一指定动物园的信息（提供该动物园的所有信息）
5. PATCH /zoos/ID：更新摩崖题指定动物园的信息（提供该动物园的部分信息）
6. DELETE /zoos/ID：删除指定动物园
7. GET /zoos/ID/animals：列出某一指定动物园的所有动物。

## 3.3 返回结果

### 3.3.1 返回值类型

1. GET /zoos：返回资源对象的列表（数组、集合）
2. GET /zoos/1 ：返回单个资源对象
3. POST /collection：返回新生成的资源对象
4. PUT /collection/resource：返回完整的资源对象
5. PATCH /collection/resource：返回完整的资源对象
6. DELETE /collection/resource：返回空

### 3.3.2 常见状态码

。。。

### 3.3.3 Content Type

1. 一个API可以允许返回 JSON，XML甚至 HTML等文档格式；建议使用 json；

2. 以前通过URL来规定获取格式类型，比如：

   https://www.api.example/employee.json

   https://www.api.example/employee.html

   但是更建议使用Accept 这个请求字段。

   Accept 与Content-Type区别：

   1. Accept 属于请求头，Conteny-Type属于实体头

      http报头分为通用报头，请求报头、响应报头和实体报头

      请求方的http报头结构：通用报头|请求报头|实体报头

      响应方http报头结构：    通用报头|响应报头|实体报头

   2. Accept代表发送端（客户端）希望接收的数据类型

      比如： Accept:application/json 代表客户端希望接收数据类型为json类型，后台返回json数据

      Content-Type 代表发送端（客户端|服务器）发送的实体数据的数据类型



# 4 RESTful 服务开发

## 4.1 java中常见 RESTful开发框架：

1. Jersey

   开源，优点：优秀的文档和例子，快速，平滑的JUint集成，支持异步连接。缺点：Jersey2.0+ 使用了大量复杂依赖注入实现，

2. Play FrameWork

3. **SpringMVC** （本文使用）

## 4.2 测试工具 Postman

API接口测试。

## 4.3 接口

需求：

1. 获取所有员工信息：

   RESTful 接口设计步骤：

   1. 确定资源   /employees
   2. 确定请求方式  GET
   3. 确定返回结果（类型，头信息，状态码）


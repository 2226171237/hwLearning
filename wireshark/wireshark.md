# Wireshark

## 1. 软件使用调试

相关软件：

Fiddler和Httpwatch 专门抓HTTP协议的

### 1.1 抓包原理

#### 1.1.1 网络原理

* 本机环境

  直接抓包本机网卡进出流量 

* 集线器环境

  流量防洪，同一冲突域

* 交换机环境

  * 端口镜像
  * ARP欺骗
  * MAC泛洪

#### 1.1.2 底层原理

<img src="C:/Users/Liyajie/AppData/Roaming/Typora/typora-user-images/image-20211013000730957.png" alt="image-20211013000730957" style="zoom:80%;" />

1. Win-/libcap: wireshark抓包时依赖的库文件
2. Capture: 抓包引擎，利用libcap/WinPcap从底层抓取网络数据包，libpcap/WinPcap提供了通用的抓包接口，能从不同类型的网络接口（包括以太网，令牌环网，ATM网等）获取数据包‘
3. Wiretap:格式支持，从抓包文件 读取数据包，支持多种文件格式
4. Core: 核心引擎，通过函数调用将其他模块链接在一起，起到联动调度的作用
5. GTK1/2:图像处理工具，处理用户的输入输出

### 1.2 进阶调试


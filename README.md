## 最简单的Http/Https静态资源服务器
该项目可以提供HTTP、HTTPS服务，有404、500、200返回状态码，js解析读取url参数功能。

基于Node,WeUI.js



#### 这里是开发的一些心得和记录：

> 前端构建使用了[Webpack]()+[微信WeUI](https://github.com/Tencent/weui) 



------

###个人见解，有误请指正：
项目需求：简单的微信企业号的运维消息订阅助手
前端在导师尽量简单易用的要求下使用了WeUI.j构建，Node.js部署。
效果极佳：webpack打包后Html+js仅仅10+2=12KB,服务端js仅2kb，cdn加速jQuery和微信css，图片托管在现有的.Net Core静态资源文件夹中，服务器仅仅传输12kb的文件就能提供现代的Html服务。
上线测试Https服务闲时仅占用10M内存11个线程，对于百人的企业服务绰绰有余。

-----

### 关于运行：

Http:
```
$ node server.js
```
Https:
要用的pfx证书准备一份，OpenSSL出.crt和.key:
OpenSSL官网没有提供windows版本的安装包
可以使用开源的Win64OpenSSL
 [Win64OpenSSL](http://slproweb.com/products/Win32OpenSSL.html )
利用　openssl　生成公钥私钥 
原版PFX证书

 ``` 
 $ openssl pkcs12 -in myssl.pfx -nodes -out server.pem
 ```
提取私钥
 ```
 $ openssl rsa -in server.pem -out server.key
 ```
提出公钥
 ```
 $ openssl x509 -in server.pem -out server.crt
 ```


![图片](https://i.loli.net/2019/08/22/C3JD4dib8suLOXq.png)
集齐上述法宝，即可召唤神龙！
```
$ node https_server.js
```
![图片](https://i.loli.net/2019/08/22/cWH5Qmy98kFXjBI.png)

-------

## 最后

项目还会后续更新简单实用的Node.js技术✍

喜欢的欢迎Star💗，Fork🍴

交流技♂术可以加我的QQ：491929461

本人应届秋招，有内推的爸爸们捞我一把，谢谢惹🙏




# 小能-基于electron生成客户端的操作步骤

>1、本地运行web程序
*  cd electron 
  `npm install`
* 运行环境请参考： http://git.xiaoneng.cn/NtalkerWebClient/client

>2、将打包的web静态资源文件复制到electron的文件夹下

   将打包生成的 `bundle.js` 复制到electron文件夹下，其中，electron目录下的`index.html`引用了`bundle.js`。

>3、进入的命令窗口下（electron文件夹），输入 `npm run start:client`直接运行客户端程序
或者
>3、进入的命令窗口下（electron文件夹），输入 `npm run package:win`,会在当前文件夹下生成win应用程序

npm run package会打包win,mac,linux客户端程序
/* eslint-disable */
'use strict';

const path = require('path');
const cp = require('child_process');
const {app,ipcMain,globalShortcut,BrowserWindow,ipcRenderer} = require('electron');
// const SplashWindow = require('./windows/splash');
const AppTray = require('./windows/app_tray');
const nTalker = require('./windows/ntalker');
class ElectronicNTalker {
  constructor() {
    this.tray = null;
    this.ntalker = null;
  }

  init() {
    this.initApp();
   // this.initIPC();
  }

  initApp() {
    app.on('ready', ()=> {
      this.createNTalkerWindow();
      this.createTray();
      this.ntalker.resizeWindow(true);
      const hide = globalShortcut.register('ctrl+z',()=>{
          if(this.ntalker.isShown){
          this.ntalker.hide();
          this.ntalker.isShown = false;
        }else{
          this.ntalker.show();
          this.ntalker.isShown = true;
        }
      });
      ipcMain.on('global-shortcut',(event,num) => {
        const quit = globalShortcut.register(num,() =>{
          app.quit();
        })
    });
      ipcMain.on('xiaoneng-close',(event,num) => {
        if (!this.ntalker.isShown) {
          this.ntalker.show();
        };
    });

    });
    };
  //接收渲染界面传递的消息(备用)
  initIPC() {

  };

  createTray() {
    this.tray = new AppTray(this.ntalker);
  }

  createNTalkerWindow() {
    this.ntalker = new nTalker();
  }
}

new ElectronicNTalker().init();

//自动安装 自动更新
const handleSquirreEvent = function (){
  if(process.platform != 'win32') {
    return false;
  }

  function executeSquirreCommand(args,done){
    var updateDotExe = path.resolve(path.dirname(process.execPath),'..','update.exe');
    var child = cp.spawn(updateDotExe,args,{ detached:true });
    child.on('close',function(code){
      done();
    });
  }
  function install(done){
    var target = path.basename(process.execPath);
    executeSquirreCommand(["--creatShortcut",target],done);
  }

  function uninstall(done){
    var target = path.basename(progress.execPath);
    executeSquirreCommand(["--removeShortcut",target]);
  }

  var squirrelEvent = process.argv[1];
  switch (squirrelEvent) {
    case '--squirrel-install':
      install(app.quit);
      return true;
    case '--squirrel-updated':
      install(app.quit);
      return true;
    case '--squirrel-obsolete':
      install(app.quit);
      return true;
    case '--squirrel-uninstall':
      install(app.quit);
      return true;
  }

  return false
}
if (handleSquirreEvent()){
  return
}

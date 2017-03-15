'use strict';

const path = require('path');
const { app, Menu, nativeImage,Tray,ipcMain} = require('electron');
class AppTray {
  constructor(xiaonengWindow) {
    this.int;
    this.image;
    this.flash = false;
    this.xiaonengWindow = xiaonengWindow;
    if (process.platform === 'linux') {
      this.image = nativeImage.createFromPath(path.join(__dirname, '/image/icon.png'));
    } else {
      this.image = nativeImage.createFromPath(path.join(__dirname, '/image/logo.png'));
    }
    this.image.setTemplateImage(true);
    this.tray = new Tray(this.image);
    this.tray.setToolTip('Ntalker');
    const constextMenu = Menu.buildFromTemplate([
    {
        label: '在线',
        click:  () =>{
          clearInterval(this.int);
          this.image = nativeImage.createFromPath(path.join(__dirname, '/image/logo.png'));
          this.tray.setImage(this.image);
        }
    },
    {
        label: '新消息',
        click: () => {
          this.int = setInterval(() => {
            if(!this.flash){
              this.image = nativeImage.createFromPath(path.join(__dirname, '/image/icon.png'));
              this.tray.setImage(this.image);
              this.flash = true;
            }else{
              this.image = nativeImage.createFromPath(path.join(__dirname, ''));
              this.tray.setImage(this.image);
              this.flash = false;
            }
        }, 500);
        }
    },
    {
        label: '离开',
        click:  () =>{
           app.exit(0);
        }
    }
]);

    this.tray.setContextMenu(constextMenu);

    //托盘双击事件
    this.tray.on('double-click',()=>{
    clearInterval(this.int);
    this.image = nativeImage.createFromPath(path.join(__dirname, '/image/logo.png'));
    this.tray.setImage(this.image);
    if (!this.xiaonengWindow.isShown) {
     this.xiaonengWindow.show();
   }});

 } //constructor end

  setTitle(title) {
    this.tray.setTitle(title);
  }
}
module.exports = AppTray;

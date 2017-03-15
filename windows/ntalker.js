'use strict';

const path = require('path');
const { app, BrowserWindow } = require('electron');

class nTalker {
  constructor() {
    this.inervals = {};
    this.createWindow();
    this.isShown = false;
  }

  resizeWindow(isLogged) {
const size = isLogged ? {width: 800,height: 600,} : {width: 380,height: 120,};
    this.ntalker.setSize(size.width, size.height);
        this.ntalker.show();
        this.ntalker.maximize();
        this.ntalker.center();
  }

  createWindow() {
    this.ntalker = new BrowserWindow({
      resizable: false,
      // frame:false,
      // transparent:true,
      center: true,
      show: false,
      // backgroundColor:'#00000000',
      skipTaskbar:true,
    //  autoHideMenuBar: true,
      icon: 'view/logo.png',
      titleBarStyle: 'hidden',
      type:'toolbar',
      webPreferences: {
        javascript: true,
        plugins: true,
        nodeIntegration: false,
        webSecurity: false,
      },
    });

    this.ntalker.loadURL('file://' + path.join(__dirname, '../index.html'));
    this.ntalker.openDevTools();
    this.ntalker.on('close', (e) => {
      if (this.ntalker.isVisible()) {
        e.preventDefault();
        this.ntalker.hide();
      }
    });

    this.ntalker.on('page-title-updated', (ev) => {

    });

    // dom渲染完成时触发
    this.ntalker.webContents.on('dom-ready', () => {
    });
  }

  show() {
    this.ntalker.show();
    this.isShown = true;
  }

  hide() {
    this.ntalker.hide();
    this.isShown = false;
  }
}

module.exports = nTalker;

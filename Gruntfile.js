module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'create-windows-installer':{
     x64:{
        version:'1.0.3',
        authors:'markqin',
        projectUrl:'./',
        appDirectory:'./Ntalker-win32-x64',
        outputDirectory:'./nihao',
        releaseNotes:'123',
        exe:'Ntalker.exe',
        description:'kaifai'
     },
       ia32:{
        version:'1.0.3',
        authors:'markqin',
        projectUrl:'./',
        appDirectory:'./',
        outputDirectory:'./',
        releaseNotes:'123',
        exe:'kaka.exe',
        description:'kaifai'
     }
    }
  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-electron-installer');
}

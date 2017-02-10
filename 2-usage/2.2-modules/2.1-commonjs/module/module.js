exports.module1 = require('./module.1');

console.log(module);

/*
// node ./dist/module.js
{
  exports: {},
  id: 2,
  loaded: false,
  deprecate: [Function],
  paths: [],
  children: [],
  webpackPolyfill: 1
}
{
  exports: { module1: 'module1' },
  id: 0,
  loaded: false,
  deprecate: [Function],
  paths: [],
  children: [],
  webpackPolyfill: 1
}

// node ./module.js
Module {
  id: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/module/module.1.js',
  exports: {},
  parent:
   Module {
     id: '.',
     exports: {},
     parent: null,
     filename: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/module/module.js',
     loaded: false,
     children: [ [Circular] ],
     paths:
      [ '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/module/node_modules',
        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/node_modules',
        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/node_modules',
        '/home/zhanghuabin/work/project/WebpackStudyDemo/node_modules',
        '/home/zhanghuabin/work/project/node_modules',
        '/home/zhanghuabin/work/node_modules',
        '/home/zhanghuabin/node_modules',
        '/home/node_modules',
        '/node_modules' ] },
  filename: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/module/module.1.js',
  loaded: false,
  children: [],
  paths:
   [ '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/module/node_modules',
     '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/node_modules',
     '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/node_modules',
     '/home/zhanghuabin/work/project/WebpackStudyDemo/node_modules',
     '/home/zhanghuabin/work/project/node_modules',
     '/home/zhanghuabin/work/node_modules',
     '/home/zhanghuabin/node_modules',
     '/home/node_modules',
     '/node_modules' ] }
Module {
  id: '.',
  exports: { module1: 'module1' },
  parent: null,
  filename: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/module/module.js',
  loaded: false,
  children:
   [ Module {
       id: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/module/module.1.js',
       exports: 'module1',
       parent: [Circular],
       filename: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/module/module.1.js',
       loaded: true,
       children: [],
       paths: [Object] } ],
  paths:
   [ '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/module/node_modules',
     '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/node_modules',
     '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/node_modules',
     '/home/zhanghuabin/work/project/WebpackStudyDemo/node_modules',
     '/home/zhanghuabin/work/project/node_modules',
     '/home/zhanghuabin/work/node_modules',
     '/home/zhanghuabin/node_modules',
     '/home/node_modules',
     '/node_modules' ] }
*/

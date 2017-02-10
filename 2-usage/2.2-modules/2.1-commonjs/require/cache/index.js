require('./a');

/*
// Webpack
{ '0': { exports: {}, id: 0, loaded: false },
  '1': { exports: {}, id: 1, loaded: false } }
{ value: '2' }
{ '0': { exports: {}, id: 0, loaded: false },
  '1': { exports: {}, id: 1, loaded: false },
  '2': { exports: { value: '2' }, id: 2, loaded: true } }
{ '0': { exports: {}, id: 0, loaded: false },
  '1': { exports: {}, id: 1, loaded: false } }
{ value: 1 }


// Node
{ '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/index.js':
   Module {
     id: '.',
     exports: {},
     parent: null,
     filename: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/index.js',
     loaded: false,
     children: [ [Object] ],
     paths:
      [ '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/node_modules',
        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/node_modules',
        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/node_modules',
        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/node_modules',
        '/home/zhanghuabin/work/project/WebpackStudyDemo/node_modules',
        '/home/zhanghuabin/work/project/node_modules',
        '/home/zhanghuabin/work/node_modules',
        '/home/zhanghuabin/node_modules',
        '/home/node_modules',
        '/node_modules' ] },
  '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/a.js':
   Module {
     id: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/a.js',
     exports: {},
     parent:
      Module {
        id: '.',
        exports: {},
        parent: null,
        filename: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/index.js',
        loaded: false,
        children: [Object],
        paths: [Object] },
     filename: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/a.js',
     loaded: false,
     children: [],
     paths:
      [ '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/node_modules',
        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/node_modules',
        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/node_modules',
        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/node_modules',
        '/home/zhanghuabin/work/project/WebpackStudyDemo/node_modules',
        '/home/zhanghuabin/work/project/node_modules',
        '/home/zhanghuabin/work/node_modules',
        '/home/zhanghuabin/node_modules',
        '/home/node_modules',
        '/node_modules' ] } }
{ value: '2' }
{ '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/index.js':
   Module {
     id: '.',
     exports: {},
     parent: null,
     filename: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/index.js',
     loaded: false,
     children: [ [Object] ],
     paths:
      [ '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/node_modules',
        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/node_modules',
        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/node_modules',
        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/node_modules',
        '/home/zhanghuabin/work/project/WebpackStudyDemo/node_modules',
        '/home/zhanghuabin/work/project/node_modules',
        '/home/zhanghuabin/work/node_modules',
        '/home/zhanghuabin/node_modules',
        '/home/node_modules',
        '/node_modules' ] },
  '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/a.js':
   Module {
     id: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/a.js',
     exports: {},
     parent:
      Module {
        id: '.',
        exports: {},
        parent: null,
        filename: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/index.js',
        loaded: false,
        children: [Object],
        paths: [Object] },
     filename: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/a.js',
     loaded: false,
     children: [ [Object] ],
     paths:
      [ '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/node_modules',
        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/node_modules',
        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/node_modules',
        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/node_modules',
        '/home/zhanghuabin/work/project/WebpackStudyDemo/node_modules',
        '/home/zhanghuabin/work/project/node_modules',
        '/home/zhanghuabin/work/node_modules',
        '/home/zhanghuabin/node_modules',
        '/home/node_modules',
        '/node_modules' ] },
  '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/b.js':
   Module {
     id: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/b.js',
     exports: { value: '2' },
     parent:
      Module {
        id: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/a.js',
        exports: {},
        parent: [Object],
        filename: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/a.js',
        loaded: false,
        children: [Object],
        paths: [Object] },
     filename: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/b.js',
     loaded: true,
     children: [],
     paths:
      [ '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/node_modules',
        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/node_modules',
        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/node_modules',
        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/node_modules',
        '/home/zhanghuabin/work/project/WebpackStudyDemo/node_modules',
        '/home/zhanghuabin/work/project/node_modules',
        '/home/zhanghuabin/work/node_modules',
        '/home/zhanghuabin/node_modules',
        '/home/node_modules',
        '/node_modules' ] } }
{ '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/index.js':
   Module {
     id: '.',
     exports: {},
     parent: null,
     filename: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/index.js',
     loaded: false,
     children: [ [Object] ],
     paths:
      [ '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/node_modules',
        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/node_modules',
        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/node_modules',
        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/node_modules',
        '/home/zhanghuabin/work/project/WebpackStudyDemo/node_modules',
        '/home/zhanghuabin/work/project/node_modules',
        '/home/zhanghuabin/work/node_modules',
        '/home/zhanghuabin/node_modules',
        '/home/node_modules',
        '/node_modules' ] },
  '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/a.js':
   Module {
     id: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/a.js',
     exports: {},
     parent:
      Module {
        id: '.',
        exports: {},
        parent: null,
        filename: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/index.js',
        loaded: false,
        children: [Object],
        paths: [Object] },
     filename: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/a.js',
     loaded: false,
     children: [ [Object] ],
     paths:
      [ '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/node_modules',
        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/node_modules',
        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/node_modules',
        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/node_modules',
        '/home/zhanghuabin/work/project/WebpackStudyDemo/node_modules',
        '/home/zhanghuabin/work/project/node_modules',
        '/home/zhanghuabin/work/node_modules',
        '/home/zhanghuabin/node_modules',
        '/home/node_modules',
        '/node_modules' ] } }
{ value: 1 }
*/

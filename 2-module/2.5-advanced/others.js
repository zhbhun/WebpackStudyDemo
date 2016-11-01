console.log(__dirname);
// Node：/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.5-advanced
// Webpack：/

console.log(__filename);
// Node：/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.5-advanced/others.js
// Webpack：/index.js

try {
  console.log(__resourceQuery && __resourceQuery);
} catch (e) {
  console.log(e);
}

try {
  console.log(__webpack_public_path__);
} catch (e) {
  console.log(e);
}

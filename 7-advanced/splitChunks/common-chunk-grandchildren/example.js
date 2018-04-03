var main = function() {
  console.log('Main class');
  require.ensure(
    [],
    () => {
      const page = require('./pageA');
      page();
    },
    'pageA'
  );
  require.ensure(
    [],
    () => {
      const page = require('./pageB');
      page();
    },
    'pageB'
  );
};

main();

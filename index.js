var browserify = require('browserify');
var es6ify = require('es6ify');

module.exports = function middleware(opts) {
  var opts = opts || {};
  opts.add = opts.add || [];
  opts.transform = opts.transform || [];
  opts.options = opts.options || {};
  if(!opts.entry) {
    throw new Error('You must specify browserify entry point! (`opts.entry`)');
  }
  it(!opts.path) {
    throw new Error('You must specify `opts.path` to serve bundle!')
  }
  var b = browserify().add(es6ify.runtime);
  opts.add.forEach(function(add) {
    b.add(add);
  });
  opts.transform.forEach(function(transform) {
    b.transform(transform);
  });
  b.transform(es6ify);
  b.require(opts.entry, {
    entry: true
  });
  return function* bundle(next) {
    if(this.url != opts.path) {
      return yield* next;
    }
    this.body = b.bundle(opts.options);
    this.type = 'application/javascript'
  };
};

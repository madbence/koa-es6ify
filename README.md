# koa-es6ify

ES6ify middleware for koa.

## Install

```
$ npm install koa-es6ify
```

## Usage

```js
var koa = require('koa');

var app = koa();
app.use(es6ify({
  entry: 'client/app',
  path: '/assets/bundle.js'
}));
```

## API

### es6ify(opts)

Create `koa` middleware

- `opts.entry` Browserify entry point
- `opts.path` Server bundle at this location
- `opts.add` *Optional* add these modules to the bundle (`browserify.add`)
- `opts.transform` *Optional* apply these transforms on the bundle (`browserify.transform`)
- `opts.options` *Optional* bundle options (`browserify.bundle(options)`)

## License

MIT

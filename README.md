[![build status](https://secure.travis-ci.org/Prevole/grunt-docker.png)](http://travis-ci.org/Prevole/grunt-docker)
# grunt-docker

Generate your Docker documentation

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-docker`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-docker');
```

[grunt]: https://github.com/cowboy/grunt
[getting_started]: https://github.com/cowboy/grunt/blob/master/docs/getting_started.md

## Documentation
Take a look to this [example](http://prevole.github.io/grunt-docker/doc/tasks/docker.js.html) which shows `grunt-docker` in action.

You'll need to install `grunt-docker` first:

    npm install grunt-docker --save-dev

Then modify your `grunt.js` file by adding the following line:

```javascript
grunt.loadNpmTasks('grunt-docker');
```

Then add some configuration for the plugin like so:

```javascript
grunt.initConfig({
  ...
  docker: {
    options: {
      // These options are applied to all tasks
    },
    app: {
      // Specify `src` and `dest` directly on the task object
      src: ['path/to/source/files/*.{coffee,js}'],
      dest: 'where/you/want/your/generated/doc/files',
      options: {
        // ...
      }
    }
  },
  ...
});
```

The default options are:

```javascript
options: {
  inDir: '.',
  outDir: 'doc',
  onlyUpdated: false,
  colourScheme: 'default',
  ignoreHidden: false,
  sidebarState: true,
  exclude: false,
  lineNums: false,
  multiLineOnly: false,
  js: [],
  css: [],
  extras: []
}
```

The options provided above are the defaults configured in [Docker](https://github.com/jbt/docker) and
correspond to its CLI.

Then just run `grunt docker` and enjoy!

## Notes on output directory

Docker itself doesn't quite follow Grunt convention, choosing to instead specify an `outDir`.
If you need to output to more than one directory, define a new task; unfortunately, a single
Docker object is allocated per-task and can only be used for a single output folder.

Grunt-Docker will figure out the correct `outDir` property by reading Grunt's interpretation of
`files.dest`. In most cases, this works fine. If you are having issues with relative paths, use
`options.outDir`, instead of `files.dest`.

If your source files are above the current working directory (starting with `../`), you *must* change
`options.inDir`, or your docs will end up in the same folder as the source folders. For example, if
my `src` property were `../../src/**/*.js`, I would set `options.inDir` to `../../`.

By default, Grunt-Docker will use `files.src = "."` and `options.outDir = "doc"` if they are not
provided. `src` is used in the call to the doc generation as an `Array`.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## Release History

### 0.0.11
- Updated package.json to support Grunt >=1.0.0 (from PR #6)
- Updated package.json and .travis to remove Travis CI build errors/warnings

### 0.0.10
- Minor code cleaning. Nothing new.

### 0.0.9
- Documentation added for the multiLineOnly option. See [#5](https://github.com/Prevole/grunt-docker/pull/5) for more details

### 0.0.7/0.0.8
- Republished version 0.0.7 under 0.0.8 due to an error at the publish time
- Rework options parsing to use grunt's built-in options parsing and fix `outDir` location. ([#4](https://github.com/Prevole/grunt-docker/pull/4), [@ssafejava](https://github.com/ssafejava))

### 0.0.6
- Bumped version of Docker to 0.2.10

### 0.0.5
- Bumped version of Docker to 0.2.8

### 0.0.4
- Upgrade plugin to grunt 0.4.x

### 0.0.3
- Fixed dev dependency version for contrib-clean (0.3.0)

### 0.0.2
- Updated the docker version to 0.2.3

### 0.0.1
- Initial project creation that is working at least for my setup

## License
Copyright (c) 2012 Prevole
Licensed under the MIT license.

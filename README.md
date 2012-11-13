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
You'll need to install `grunt-docker` first:

    npm install grunt-docker

Then modify your `grunt.js` file by adding the following line:

    grunt.loadNpmTasks('grunt-docker');

Then add some configuration for the plugin like so:

    grunt.initConfig({
        ...
        docker: {
          app: {
            src: ['path/to/source/files/*.(coffee|js|...)'],
            dest: 'where/you/want/your/generated/doc/files',
            options: {
					    onlyUpdated: false,
    					colourScheme: 'default',
    					ignoreHidden: false,
    					sidebarState: true,
    					exclude: false,
    					lineNums: false,
    					js: [],
    					css: [],
    					extras: []
            }
          }
        },
        ...
    });

Then just run `grunt docker` and enjoy!

By default, Grunt Docker will use `src = "."` and `dest = "doc"` if they are not
provided. `dest` will be given to Docker through the `options.outDir` option and
`src` is used in the call to the doc generation as an `Array`.

The options provided there are the defaults configured in [Docker](https://github.com/jbt/docker) and
corresponds to the command line arguments that are possible to use.



## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## Release History

0.0.1 - Initial project creation that is working at least for my setup

## License
Copyright (c) 2012 Prevole
Licensed under the MIT license.

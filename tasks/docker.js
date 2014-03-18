// grunt-docker
// https://github.com/Prevole/grunt-docker
//
// Copyright (c) 2012 Prevole
// Licensed under the MIT license.
module.exports = function (grunt) {
    "use strict";
    var Docker = require('docker');
    var path = require('path');

    grunt.registerMultiTask('docker', 'Docker processor.', function () {
        var options = this.options({
            onlyUpdated: false,
            colourScheme: 'default',
            ignoreHidden: false,
            sidebarState: true,
            exclude: false,
            lineNums: false,
            js: [],
            css: [],
            extras: []
        });

        // Retrieve the configuration options according to the Docker documentation
        grunt.verbose.writeflags(options, 'Options');

        // Getting the source directory or file
        var src = [];
        this.files.forEach(function(f) {
            for( var i = 0; i < f.src.length; i++ ){
                src.push( f.src[ i ].replace(options.inDir, '') );
            }
            // Attempt to automatically set the outDir if a 'dest' param is used.
            // It's recommended to just use the 'outDir' option directly.
            if (!options.outDir && f.dest){
                options.outDir = f.dest.replace(f.src, '');
            }
            grunt.verbose.writeflags([f.dest], 'Destination');
        });

        var done = this.async();

        // Hack docker to call the done callback when the documentation generation is finished
        var dockerFinished = Docker.prototype.finished;
        Docker.prototype.finished = function () {
            dockerFinished();
            done();
        };

        // Create the Docker instance
        var docker = new Docker(options);

        // Generate the documentation
        docker.doc(src);
    });
};

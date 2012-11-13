// grunt-docker
// https://github.com/Prevole/grunt-docker
//
// Copyright (c) 2012 Prevole
// Licensed under the MIT license.
module.exports = function(grunt) {
  var Docker = require('docker');
  var _ = require('underscore');
  var path = require('path');

  grunt.registerMultiTask('docker', 'Docker processor.', function() {
    var options;

    // Retrieve the configuration options according to the Docker documentation
    options = grunt.config(['docker', this.target, 'options']) || {};
    grunt.verbose.writeflags(options, 'Options');

    // Getting the source directory or file
    var src;
    if (this.file.src !== undefined) {
        src = grunt.file.expandFiles(this.file.src);
        grunt.verbose.writeflags(src, 'Source');
    }

    // Getting the destination directory or file
    if (this.file.dest !== undefined) {
        options.outDir = this.file.dest;
        grunt.verbose.writeflags([this.file.dest], 'Destination');
    }

    // Create the Docker instance
    var docker = new Docker(options);

    var done = this.async();

    // Generate the documentation
    if (src == undefined) {
        docker.doc();
    }
    else {
        docker.doc(src);
    }
  });
};

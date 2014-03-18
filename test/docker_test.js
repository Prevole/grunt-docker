var grunt = require("grunt");

exports.docker = {
  main: function(test) {
     var expectSimple = "test";

     var html = grunt.file.read("test/docs/test/fixtures/docker/docker.js.html");
     var css = grunt.file.read("test/docs/doc-style.css");
     var fileList = grunt.file.read("test/docs/doc-filelist.js");
     var fileScript = grunt.file.read("test/docs/doc-script.js");
     var excludedFileExists = grunt.file.exists("test/docs/test/fixtures/docker/excluded.js.html");

     test.expect(5);
     test.equal(css.length, 11040, "Should create CSS.");
     test.equal(html.length, 1989, "Should create HTML.");
     test.equal(excludedFileExists, false, "Should exclude excluded file (set in general options)");
     test.equal(fileList.length, 93, "Should create doc-filelist.js");
     test.equal(fileScript.length, 7461, "Should create doc-script.js");
     test.done();
  }
};
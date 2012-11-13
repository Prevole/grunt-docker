var grunt = require("grunt");

exports.docker = {
  main: function(test) {
     var expectSimple = "test";

     var html = grunt.file.read("test/docs/fixtures/docker/docker.js.html");
     var css = grunt.file.read("test/docs/doc-style.css");
     var fileList = grunt.file.read("test/docs/doc-filelist.js");
     var fileScript = grunt.file.read("test/docs/doc-script.js");

     test.expect(4);
     test.equal(css.length, 10859, "Should create CSS.");
     test.equal(html.length, 1969, "Should create HTML.");
     test.equal(fileList.length, 93, "Should create doc-filelist.js");
     test.equal(fileScript.length, 7461, "Should create doc-script.js");
     test.done();
  }
};
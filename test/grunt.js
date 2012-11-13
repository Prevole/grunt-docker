module.exports = function(grunt) {
  grunt.initConfig({
    pkg: {
      name: "grunt-contrib",
      version: "0.3.9"
    },

    test: {
      tasks: ["*_test.js"]
//        ,
//      clean: ['clean_task.js']
    },

    docker: {
      app: {
        src: ['fixtures/docker/*.js'],
        dest: "docs"
      }
    }
  });

  grunt.loadTasks("../tasks");
  grunt.registerTask("default", "docker test:tasks");
};
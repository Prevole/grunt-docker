module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.initConfig({
        clean: {
            app: {
                src: ["docs"]
            }
        },

        test:{
            app: ["*_test.js"]
        },

        docker:{
            app:{
                src:['fixtures/docker/*.js'],
                dest:"docs"
            }
        }
    });

    grunt.loadTasks("../tasks");
    grunt.registerTask("default", "docker test clean");
};
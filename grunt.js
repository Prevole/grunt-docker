module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Project configuration.
    grunt.initConfig({
        lint:{
            files:['tasks/**/*.js']
        },

        clean: {
            test: {
                src: ["test/docs"]
            }
        },

        docker:{
            app:{
                options: {
                    extras: ["fileSearch", "goToLine"],
                    lineNums: true,
                    colourScheme: "friendly"
                },
                src: ["tasks/*.js"]
            },
            test: {
                src:['test/fixtures/docker/*.js'],
                dest:"test/docs"
            }
        },

        test:{
            test: ["test/*_test.js"]
        },

        jshint:{
            options:{
                curly:true,
                eqeqeq:true,
                immed:true,
                latedef:true,
                newcap:true,
                noarg:true,
                sub:true,
                undef:true,
                boss:true,
                eqnull:true,
                node:true,
                es5:true
            },
            globals:{}
        }
    });

    // Load local tasks.
    grunt.loadTasks('tasks');

    // Default task.
    grunt.registerTask('default', 'lint docker:app');
    grunt.registerTask('docker-test', 'docker:test test:test clean:test');
};

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Project configuration.
    grunt.initConfig({
        clean: {
            test: {
                src: ["test/docs"]
            }
        },

        docker:{
            options: {
                exclude: '**/excluded.js'
            },
            app:{
                options: {
                    extras: ["fileSearch", "goToLine"],
                    colourScheme: "friendly"
                },
                src: ["tasks/*.js"]
            },
            test: {
                src:['test/fixtures/docker/*.js'],
                dest:"test/docs"
            }
        },

        nodeunit:{
            test: ["test/*_test.js"]
        },

        jshint:{
            files:['tasks/**/*.js'],
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
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Default task.
    grunt.registerTask('default', 'jshint docker:app'.split( " " ));
    grunt.registerTask('docker-test', 'clean:test docker:test nodeunit:test clean:test'.split( " " ));
};

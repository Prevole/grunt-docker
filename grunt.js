module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        lint:{
            files:['tasks/**/*.js', 'test/**/*.js']
        },

        docker:{
            app:{
                options: {
                    extras: ["fileSearch", "goToLine"],
                    lineNums: true,
                    colourScheme: "friendly"
                },
                src: ["tasks/*.js"]
            }
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
    grunt.registerTask('default', 'lint docker');
};

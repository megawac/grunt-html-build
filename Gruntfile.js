﻿module.exports = function (grunt) {
    grunt.initConfig({
        fixturesPath: "fixtures",

        htmlbuild: {
            dist: {
                src: './index.html',
                dest: './samples/',
                options: {
                    beautify: true,
                    scripts: {
                        bundle: [
                            '<%= fixturesPath %>/scripts/*.js',
                            '!**/main.js',
                        ],
                        main: '<%= fixturesPath %>/scripts/main.js'
                    },
                    styles: {
                        bundle: [ 
                            '<%= fixturesPath %>/css/libs.css',
                            '<%= fixturesPath %>/css/dev.css'
                        ],
                        test: '<%= fixturesPath %>/css/inline.css'
                    },
                    sections: {
                        views: '<%= fixturesPath %>/views/**/*.html',
                        templates: '<%= fixturesPath %>/templates/**/*.html',
                    },
                    data: {
                        version: "0.1.0",
                        title: "test",
                    },
                }
            }
        }
    });

    grunt.loadTasks('tasks');

    grunt.registerTask('build', ['htmlbuild']);
};
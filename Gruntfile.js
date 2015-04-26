'use strict';

var gruntConfig = {
    connect: {
        dev: {
            options: {
                port: 9000,
                base: 'test'
            }
        }
    },
    clean: {
        deploy: ['test//compiled.js'] // remove unminified files before deploy
    },
    copy: {
        main: {
        src: 'compiled.js',
        dest: 'test/',
        }
    },
    // Mocha
    mocha: {
        all: {
            src: ['test/testrunner.html'],
        },
        options: {
            run: true
        }
    }
};

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig(gruntConfig);

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-connect');    
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mocha');

    grunt.registerTask('build', ['clean:dist']);
    grunt.registerTask('dev', ['clean:deploy', 'copy:main', 'connect:dev:keepalive']);
    grunt.registerTask('test', ['clean:deploy', 'copy:main', 'mocha']);
};
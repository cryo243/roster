// tasks/config/connect.js
// --------------------------------
// connect task configuration.
module.exports = function(grunt) {

    grunt.config.set('connect', {
        server: {
            options: {
                open: 'http://localhost:1234',
                debug:false,
                hostname: 'localhost',
                base: '.tmp/public/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
};

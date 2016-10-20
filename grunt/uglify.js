module.exports = {
    all: {
        options: {
            banner: '/*! <%= grunt.template.today("yyyy-mm-dd") %>' + ' This file is compiled */'
        },
        files: [{
            expand: true,
            cwd: 'src/js',
            src: '**/*.js',
            dest: 'dist/js',
            ext: '.min.js'
        }]
    }
};
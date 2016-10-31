module.exports = {
    content: {
        files: [{
            expand: true,
            cwd: 'tmp/',
            src: ['images/*.{png,jpg,gif}'],
            dest: 'dist/'
        }]
    },
    style: {
        files: [{
            expand: true,
            cwd: 'src/css/',
            src: ['images/*.{png,jpg,gif}'],
            dest: 'dist/css/'
        }]
    }
};
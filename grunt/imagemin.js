module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: 'tmp/',
            src: ['images/*.{png,jpg,gif}'],
            dest: 'dist/'
        }]
    }
};
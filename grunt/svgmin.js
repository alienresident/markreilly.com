module.exports = {
    content: {
        options: {
            plugins: [
                { removeViewBox: false },
                { removeUselessStrokeAndFill: false }
            ]
        },
        files: [{
            expand: true,
            cwd: 'src/svgs',
            src: ['*.svg'],
            dest: 'dist/svgs'
        }]
    },
    style: {
        options: {
            plugins: [
                { removeViewBox: false },
                { removeUselessStrokeAndFill: false }
            ]
        },
        files: [{
            expand: true,
            cwd: 'src/css/images',
            src: ['*.svg'],
            dest: 'dist/css/images'
        }]
    }
};
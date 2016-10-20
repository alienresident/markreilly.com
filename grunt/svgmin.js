module.exports = {
    all: {
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
            dest: 'tmp/svgs'
        }]
    }
};
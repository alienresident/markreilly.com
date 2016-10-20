module.exports = {

    // Task options
    options: {
        limit: 4
    },

    // Dev tasks
    devFirst: [
        'clean',
        'jshint',
        'sass:dev'
    ],
    devSecond: [
        'processhtml:dev',
        'concat:dev'
    ],

    // Production tasks
    prodFirst: [
        'clean',
        'jshint',
        'processhtml:prod'
    ],
    prodSecond: [
        'sass:prod',
        'uncss',
        'autoprefixer'
    ],
     prodThird: [
        'cssmin',
        'htmlmin',
        'uglify',
    ],

    // Image tasks
    imgFirst: [
        'imagemin',
        'svgmin'
    ]
};
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
        'uglify'
    ],

    // Image tasks
    imgResponsive1: [
        'copy:images',
        'responsive_images'
    ],
    imgResponsive1a: [
        'copy:imagesHTML',
        'responsive_images'
    ],
    imgResponsive2: [
        'responsive_images_extender'
    ],
    imgResponsive2a: [
        'responsive_images_extender',
        'copy:imagesRes'
    ],
    imgMin: [
        'imagemin',
        'svgmin'
    ]
};
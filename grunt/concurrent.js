module.exports = {

    // Task options
    options: {
        limit: 4
    },

    // Dev tasks
    devFirst: [
        'clean',
        'sass:dev'
    ],
    devSecond: [
        'concat:dev',
        'copy:dev'
    ],

    // Production tasks
    prodFirst: [
        'clean',
        'sass:dev'
    ],
    prodSecond: [
<<<<<<< Updated upstream
        'concat:dist',
        'copy:dist',      
        'uncss'
    ],
     prodThird: [
        'autoprefixer'
=======
        'sass:prod',
        'concat:prod'
    ],
    prodThird: [
        'uncss',
        'autoprefixer'
    ],
     prodFourth: [
        'cssmin',
        'htmlmin',
        'uglify'
>>>>>>> Stashed changes
    ],
     prodFourth: [
        'cssmin',
        'htmlmin'
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

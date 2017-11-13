module.exports = {
    dev: {
        files: {
             'dist/css/all.css': ['src/lib/normalize.css/normalize.css', 'src/css/global.css'],
        }
    },
    prod: {
        files: {
            //'tmp/js/homepage.scripts.js': ['src/js/*.js'],
            'tmp/css/all.css': ['bower_components/normalize-css/normalize.css/normalize.css', 'src/css/global.css'],
        }
    }
}

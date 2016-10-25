module.exports = {
    dev: {
        files: {
            'dist/js/homepage.scripts.js': ['src/js/*.js'],
            'dist/css/all.css': ['src/lib/normalize.css/normalize.css', 'src/css/global.css'],
        }
    },
    dist: {
        files: {
            'tmp/js/homepage.scripts.js': ['src/js/*.js'],
            'src/css/all.css': ['src/lib/normalize.css/normalize.css', 'src/css/global.css'],
        }
    }  
}
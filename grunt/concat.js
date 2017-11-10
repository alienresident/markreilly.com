module.exports = {
    dev: {
        files: {
             'dist/css/all.css': ['src/lib/normalize.css/normalize.css', 'src/css/global.css'],
        }
    },
    dist: {
        files: {
             'tmp/css/all.css': ['src/lib/normalize.css/normalize.css', 'src/css/global.css'],
        }
    }  
}
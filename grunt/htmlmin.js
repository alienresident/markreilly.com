module.exports = {
    all: {
        options: {  // Target options
            removeComments: true,
            collapseWhitespace: true
        },
        files: {  // Dictionary of files
            'dist/index.html': 'tmp/index-process.html'
        }
    }   
}
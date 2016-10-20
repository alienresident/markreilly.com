module.exports = {
    uncss: {
        options: {
            ignore: ['.wf-roboto-i4-active i', '.wf-roboto-i4-active em', '.wf-roboto-n7-active b', '.wf-roboto-n7-active strong', '.wf-roboto-n4-active body', '.wf-robotoslab-n4-active h1', '.wf-robotoslab-n4-active h2', '.wf-robotoslab-n4-active h3', '.wf-robotoslab-n4-active h4']
            },
        all: {
            options: {
                report: 'min'
            },
            files: {
                'tmp/css/all.uncss.css': ['tmp/index-process.html']
            }
        }
    }  
}
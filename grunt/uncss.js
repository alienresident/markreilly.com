module.exports = {
    options: {
        ignore: ['.wf-roboto-n4-active body', '.wf-roboto-n4-active h1' , '.wf-roboto-n4-active h2', '.wf-roboto-n3-active h1', '.wf-roboto-n3-active h2', '.wf-roboto-n1-active h1', '.wf-roboto-n3-active h2']
        },
    all: {
        options: {
            report: 'min'
        },
        src: ['tmp/index.html'],
        dest: 'tmp/css/all.uncss.css'
    }
}  

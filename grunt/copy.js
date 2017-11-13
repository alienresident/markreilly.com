module.exports = {
    prod: {
        files: [
            {expand: true, cwd: 'src/', src: ['*.{html,htm,php}'], dest: 'tmp/', filter: 'isFile'}
        // src: 'src/index.html',
        // dest: 'tmp/index.html',
        // options: {
        //     process: function (content, srcpath) {
        //         //return content.replace('href="css/all.css"','href="../src/css/all.css"');
        //     }
        // }
        ]
    },
    dev: {
        files: [
            {expand: true, cwd: 'src/', src: ['*.{html,htm,php}'], dest: 'dist/', filter: 'isFile'}
        // src: 'src/index.html',
        // dest: 'tmp/index.html',
        // options: {
        //     process: function (content, srcpath) {
        //         //return content.replace('href="css/all.css"','href="../src/css/all.css"');
        //     }
        // }
        ]
    },
    images: {
        files: [
            // includes files within path
            {expand: true, cwd: 'src/', src: ['images/**'], dest: 'tmp/'}
      ]
    },
    imagesHTML: {
        files: [
            // includes files within path
            {expand: true, cwd: 'src/', src: ['images/**'], dest: 'tmp/'}//,
            //{expand: true, cwd: 'src/', src: ['*.{html,htm,php}'], dest: 'tmp/', filter: 'isFile'}
      ]
    },
    imagesRes: {
        files: [
            // includes files within path
            {expand: true, cwd: 'tmp/', src: ['images/**'], dest: 'dist/'}
      ]
    }
}

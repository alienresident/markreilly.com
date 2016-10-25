module.exports = {
  target: {
    options: {
      //baseDir: '~/Sites/markreilly.com'
      srcAttribute: 'smallest'
    },
    files: [{
      expand: true,
      src: ['*.{html,htm,php}'],
      cwd: 'tmp/',
      dest: 'dist/'
    }]
  }
}
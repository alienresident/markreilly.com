module.exports = {
  target: {
    options: {
      //baseDir: '~/Sites/markreilly.com'
      srcAttribute: 'smallest',
      sizes: [{
          selector: '.portrait',
          sizeList: [{
            cond: 'max-width: 30em',
            size: '100vw'
          },{
            cond: 'max-width: 50em',
            size: '50vw'
          },{
            cond: 'default',
            size: 'calc(33vw - 100px)'
          }]
        }]
    },
    files: [{
      expand: true,
      src: ['*.{html,htm,php}'],
      cwd: 'tmp/',
      dest: 'dist/'
    }]
  }
}

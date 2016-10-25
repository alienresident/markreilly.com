module.exports = {
    all: {
      options: {
        sizes: [{
          width: 320
        },{
          name: 'medium',
          width: 720
        },{
          name: "large",
          width: 1024,
          suffix: "_x2",
          quality: 60
        }]
      },
      files: [{
        expand: true,
        src: ['**.{jpg,gif,png}'],
        cwd: 'tmp/images/',
        dest: 'tmp/images/'
      }]
    }
  }
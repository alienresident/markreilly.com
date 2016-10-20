module.exports = {
  dev: {
    files: {
      'dist/index.html': ['src/index.html']
    }
  },
  prod:  {
    files: {
      'tmp/index-process.html': ['src/index.html']
    }
  }
}
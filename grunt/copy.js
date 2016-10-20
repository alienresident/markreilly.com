module.exports = {
  all: {
    src: 'src/index.html',
    dest: 'tmp/index.html',
    options: {
      process: function (content, srcpath) {
        return content.replace('href="css/all.css"','href="../src/css/all.css"');
      }
    }
  }
}
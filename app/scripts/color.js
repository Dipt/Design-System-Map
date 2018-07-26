const subChildren = [emphasis, standard, border, icon, background, success, warning, failure];

module.exports = {
  nodes: function() {
    return 'terminal';
  },
  output: function() {
    console.log('Button');
  }
}
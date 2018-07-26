import color from './color';
import type from './type';
import util from './util';

const childList = [type, color];

module.exports = {
  nodes: function() {
    return childList;
  },
  output: function() {
    color();
    type();
    console.log('Button');
  }
}

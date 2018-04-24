import Vue from 'vue';

require('./styles.less');

const vm = new Vue({
  el: '#app',
  data: {
    message: "Hello, world!",
  },
});

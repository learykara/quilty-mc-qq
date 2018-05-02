import Vue from 'vue';

require('./styles.less');

Vue.component('sub-heading', {
  props: {
    content: {
      type: String,
      required: true,
    },
  },
  template: '<h2>{{ content }}</h2>',
});

const vm = new Vue({
  el: '#app',
  data: {
    message: 'Hello, world!',
    sub: { content: 'Nice to meet ya.' },
  },
});

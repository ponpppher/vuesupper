var app = new Vue({
  el: '#app',
  data: {
    list: ['apple', 'banana', 'rat']
  },
  methods: {
    handleClick: function(e) {
      alert(e.target)
    }
  }
})
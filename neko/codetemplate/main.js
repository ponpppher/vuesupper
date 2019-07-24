var app = new Vue({
  el: '#app',
  data: {
    list: ['apple', 'banana', 'rat'], //item list
    message: "first message", // input model
    show: true //show paragraph
  },
  methods: {
    handleClick: function(e) { //click eent
      alert(e.target)
    }
  }
})
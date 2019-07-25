var app = new Vue({
  el: '#app',
  data: {
    list: ['apple', 'banana', 'rat'], //item list
    message: "first message", // input model
    num_message: "number input", // input number model
    show: true //show paragraph
  },
  methods: {
    handleClick: function(e) { //click event
      alert(e.target)
    }
  }
})
var app = new Vue({
  el: '#app',
  data: {
    list: ['apple', 'banana', 'rat'], //item list
    message: "first message", // input model
    num_message: "number input", // input number model
    show: true, //show paragraph
    click_count: 0
  },
  methods: {
    handleClick: function(e) { //click event
      alert(e.target)
    },
    increment: function() { //increment count
      this.click_count += 1
    }
  }
})
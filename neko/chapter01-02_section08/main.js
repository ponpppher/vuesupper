var app = new Vue({
  el: '#app',
  data: {
    list: ['apple', 'banana', 'rat'], //item list
    message: "first message", // input model
    num_message: "number input", // input number model
    show: true, //show paragraph
    click_count: 0,
    propmessage: "ohoho", //prop message
    scroll:100, //prop scroll

    // class and style
    isChild: true,
    isActive: true,
    textColor: 'red',
    bgColor: 'lightgray',

    //ternary operator
    isTernaryActive: false,
  
    //object
    classObject: {
      child: true,
      'is-active': false
    },
    styleObject: {
      color: 'red',
      backgroundColor: 'lightgray'
    },

    //multiple attritubes
    imageitem: {
      id: 1,
      src: 'item1.jpg',
      alt: 'thumbnail item1',
      width: 100,
      height: 100
    },

    //SVG binding
    radius: 50
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
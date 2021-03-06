var app = new Vue({
  el: '#app',
  data: {
    show: true,
    ok: true,
    type: 'B',
    list: [
      { id: 1, name: 'slim', hp: 100 },
      { id: 2, name: 'goblin', hp: 200 },
      { id: 3, name: 'dragon', hp: 500 },
    ],
    keylist: [
      { key: 'nnnn', id: 11, name: 'slim', hp: 100 },
      { key: 'kokoro', id: 22, name: 'goblin', hp: 200 },
      { key: 'aa', id: 33, name: 'dragon', hp: 500 },
    ]
  },
  // output root element
  mounted: function() {
    console.log(this.$el)
    console.log(this.$refs.helloref)
  },
  // add active property
  created: function() {
    this.list.forEach(function(item) {
      this.$set(item, 'active', false)
    }, this)
  },
  methods: {
    handleClick() {
      var count = this.$refs.count
      if(count) {
        count.innerText = parseInt(count.innerText, 10) + 1
      }

    },
    doAdd: function() {
      var max = this.list.reduce(function(a, b){
        return a.id > b.id ? a.id : b.id
      }, 0)
      this.list.push({
        id: max + 1,
        name: this.name,
        hp: 500
      })
      this.name = ''
    },
    doAttack: function(index) {
      this.list[index].hp -= 10
      this.list = this.list.filter(function(e) {
        return e.hp >= 100
      })
    },
    doRemove: function(index) {
      this.list.splice(index, 1)
    }
  },
})
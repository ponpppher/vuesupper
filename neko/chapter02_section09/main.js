var app = new Vue({
  el: '#app',
  data: {
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
  methods: {
  }
})
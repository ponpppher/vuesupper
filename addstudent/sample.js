var app = new Vue({
  el: '#app',
  data: {
    name: 'yamada',
    cource: 'web engineer course',
    acceptance_period: '201901',
    default_last_id: 4,
    students: [
      { id:1, name: 'ユーリア・シャルデット', course: 'ML Engineer', acceptance_period: '201901'},
      { id:2, name: 'エレノワー・セイラン', course: 'Web Engineer', acceptance_period: '201711'},
      { id:3, name: 'ファイ・ファイ', course: 'Web Engineer', acceptance_period: '201711'},
      { id:4, name: 'メイザ・エンダスト', course: 'Web Engineer', acceptance_period: '201711'}
    ]
  },
  methods: {
    addStudent: function(){
      this.default_last_id ++;
      return this.students.push({id: this.default_last_id, name: this.name, cource: this.cource, acceptance_period: this.acceptance_period})
    }
  }
})
Pusher.logToConsole = true

var pusher = new Pusher('d392f65ca7b23a30e14c', {
  cluster: 'ap1',
})

var channel = pusher.subscribe('hrk-blog')
channel.bind('set-normal', () => {
  diary.setNormal()
})
channel.bind('set-abnormal', () => {
  diary.setAbnormal()
})

var diary = new Vue({
  el: '#diary',
  data: () => ({
    messages: [],
    wait: false,
    ready: false,
    normal: false,
    encryption: true,
    blur: 0.5,
    msgList: [
      {
        date: '3.3',
        msg: 'JUU1JTlCJUEwJUU0JUI4JUJBJUU1JUFFJTlFJUU1JTlDJUE4JUU2JTk4JUFGJUU0JUI4JThEJUU3JTlGJUE1JUU5JTgxJTkzJUU1JUJBJTk0JUU4JUFGJUE1JUU1JTg2JTk5JUU0JUJBJTlCJUU0JUJCJTgwJUU0JUI5JTg4JUU2JTg5JTgwJUU0JUJCJUE1JUU1JUIwJUIxJUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0',
      },
      {
        date: '3.4',
        msg: 'QmVjYXVzZSUyMEklMjByZWFsbHklMjBkb24ndCUyMGtub3clMjB3aGF0JTIwdG8lMjB3cml0ZSUyQyUyMHNvJTIwSSUyMGp1c3QlMjB3YW50JTIwdG8lMjB3cml0ZSUyMGFiYSUyMGFiYSUyMGFiYSUyMGFiYSUyMGFiYSUyMGFiYSUyMGFiYSUyMGFiYSUyMGFiYSUyMGFiYSUyMGFiYSUyMGFiYSUyMGFiYSUyMGFiYSUyMGFiYSUyMGFiYSUyMGFiYSUyMGFiYSUyMGFiYSUyMGFiYSUyMGFiYSUyMGFiYSUyMGFiYSUyMGFiYSUyMGFiYSUyMGFiYSUyMGFiYSUyMGFiYSUyMGFiYSUyMGFiYSUyMGFiYSUyMGFiYSUyMGFiYQ==',
      },
      {
        date: '3.5',
        msg: 'JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0JUU5JTk4JUJGJUU1JUI3JUI0',
      },
    ],
  }),
  methods: {
    encoded() {
      if (!this.encryption) {
        for (const i in this.msgList) {
          this.msgList[i].msg = window.btoa(
            encodeURIComponent(this.msgList[i].msg)
          )
        }
        this.encryption = !this.encryption
      }
    },
    decode() {
      if (this.encryption) {
        for (const i in this.msgList) {
          this.msgList[i].msg = decodeURIComponent(
            window.atob(this.msgList[i].msg)
          )
        }
        this.encryption = !this.encryption
      }
    },
    setNormal() {
      if (this.normal) return
      document.title = 'Diary'
      this.blur = 10
      setTimeout(() => {
        this.decode()
        this.blur = 0
        this.normal = true
        this.wait = false
        localStorage.setItem('hrk', '?')
      }, 500)
    },
    setAbnormal() {
      if (!this.normal) return
      localStorage.removeItem('hrk')
      document.title = '□□□□□'
      this.blur = 10
      setTimeout(() => {
        this.encoded()
        this.blur = 0
        this.normal = false
        this.wait = false
      }, 500)
    },
    change() {
      if (this.wait) return
      if (this.normal) {
        axios.get('https://hrk-serve.vercel.app/api/abnormal?k=hrk')
      } else {
        axios.get('https://hrk-serve.vercel.app/api/normal?k=hrk')
      }
      this.wait = true
    },
  },
  mounted() {
    this.normal = !!localStorage.getItem('hrk')
    axios.get('https://hrk-serve.vercel.app/api/state').then((res) => {
      if (res.data === 1) {
        this.setNormal()
      } else {
        this.setAbnormal()
      }
    })
    if (this.normal) {
      this.decode()
      document.title = 'Diary'
    }

    this.ready = true
  }
})
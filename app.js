const app = Vue.createApp({
  data() {
    return {
      title: 'Password Generator',
      password: '',
      copied: false,
      options: {
        length: 22,
        isLowercase: true,
        isUppercase: true,
        isNumbers: true,
        isSymbols: true,
      },
    }
  },
  methods: {
    generatePassword() {
      let generator = ''
      let generated = ''
      if (this.options.isLowercase) generator += 'abcdefghijklmnopqrstuvwxyz'
      if (this.options.isUppercase) generator += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      if (this.options.isNumbers) generator += '0123456789'
      if (this.options.isSymbols) generator += '!@#$%^&*(~)_-+='

      for (let i = 0; i < this.options.length; i++) {
        generated += generator.charAt(
          Math.floor(Math.random() * generator.length)
        )
      }
      this.password = generated
    },
    async copyPassword() {
      await navigator.clipboard.writeText(this.password)
      this.copied = true
      setTimeout(() => {
        this.copied = false
      }, 3000)
    },
  },
  beforeMount() {
    this.generatePassword()
  },
})

app.mount('#app')

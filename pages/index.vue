<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        {{ project }}
      </h1>
      <div class="links">
        <nuxt-link
          to="/about"
          class="button--green">关于我们</nuxt-link>
        <nuxt-link
          to="/users"
          class="button--green">用户</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      title: '我的第一个 nuxt app',
      project : 'default'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: '随便玩玩', name: '我的第一个nuxt程序', content: '随便玩玩啦' }
      ]
    }
  },

  async asyncData(conext) {
    let result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('nuxt')
      }, 500)
    })
    return { project : result }
  }
}
</script>

<style>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

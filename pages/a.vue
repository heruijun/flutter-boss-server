<template>
  <section class="container">
    <el-form
      ref="form"
      label-width="80px">
      <el-form-item label="用户名">
        <el-input
          v-model="username"
          placeholder="请输入用户名"
          clearable/>
      </el-form-item>
      <el-form-item label="密 码">
        <el-input
          v-model="password"
          placeholder="请输入密码"
          clearable/>
      </el-form-item>
      <el-form-item>
        <el-button>登 录</el-button>
      </el-form-item>
    </el-form>
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
      title: '后端管理系统',
      project : 'default',
      username: 'kimi',
      password: ''
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        { name: '后端管理系统' }
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
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

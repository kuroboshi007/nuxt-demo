<template>
  <section class="container">
    <div>
      <app-logo/>
      <!-- <h1 class="title">
        Hello World 
      </h1> -->
      <h2 class="subtitle">
        XXX后台管理系统
      </h2>
      <div class="links">
        <nuxt-link to="/login" class="button--green">
        Sign In</nuxt-link>
        <nuxt-link to="/register" class="button--grey">
        Sign Up</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  layout: 'nohead'
}
</script>

<style>
.title {
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


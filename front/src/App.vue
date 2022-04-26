<template>
  <div id="app">
    <HeaderCom />
    <div id="content" class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderCom from './components/layout/HeaderCom.vue'

export default {
  name: 'App',
  components: {
    HeaderCom
  }
}
</script>

<style>
</style>

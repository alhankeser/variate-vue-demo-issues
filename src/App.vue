<template>
  <div id="app">
    <GlobalHeader />
    <router-view/>
    <GlobalFooter />
  </div>
</template>

<script>
import GlobalHeader from '@/sections/GlobalHeader'
import GlobalFooter from '@/sections/GlobalFooter'

export default {
  name: 'app',
  components: { GlobalHeader, GlobalFooter }
}
</script>

<style>
  body {
    background: #f6f9fc;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
  #app {
    @apply flex flex-col justify-between;
    min-height: 100vh;
  }
  .button {
    @apply py-3 px-8 text-gray-700 bg-white rounded shadow uppercase;
    color: #6a82fb;
  }
</style>

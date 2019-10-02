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
  html, body {
    overflow-x: hidden;
  }
  body {
    background: #f6f9fc;
  }
  #app {
    @apply flex flex-col justify-between antialiased text-gray-800;
    min-height: 100vh;
  }
  .button {
    @apply py-3 px-8 rounded shadow uppercase inline-block;
  }
  .button.white {
    @apply bg-white text-blue-400
  }
  pre {
    @apply bg-gray-800 rounded  text-blue-400 inline-block p-4 shadow-inner
  }
  section .container {
    @apply px-3
  }
</style>

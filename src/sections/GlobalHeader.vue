<template>
    <header class="globalHeader">
        <Navigation />
    </header>
</template>

<script>
    import Navigation from '@/components/Navigation'

    export default {
        name: 'global-header',
        components: { Navigation }
    }
</script>

<style>
    .globalHeader {
        @apply absolute w-full top-0 z-20
    }
</style>
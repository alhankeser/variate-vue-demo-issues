<template>
    <header class="globalHeader">
        <div v-if="headline">{{ headline }}</div>
        <Navigation />
    </header>
</template>

<script>
    import Navigation from '@/components/Navigation'
    import { mapAttributes } from '@variate/vue';

    export default {
        name: 'globalheader',
        components: { Navigation },
        computed: {
            ...mapAttributes([
                'headline',
            ]),
        }
    }

</script>

<style>
    .globalHeader {
        @apply absolute w-full top-0 z-20
    }
</style>
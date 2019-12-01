<template>
  <div class="container">
        <div class="text-content with-image">
            <h1>{{ headline || 'My default Headline'}}</h1>
            <p>Variate makes it super easy for developers to enable components for A/B testing in Vuejs and React applications.</p> <p>Get started in less than 5 minutes:</p>
            <div class="home-actions">
                <pre>npm install variate-vue</pre>
                <span class="m-1"> OR </span>
                <pre>npm install variate-react</pre>
            </div>
            <div>
                <a href="/register" id="get-started-button" v-if="showGetStartedButton" class="button bg-blue-400 mr-1" @click="variateTrack('Get Started', 'click')">Get Started</a>
                <router-link to="docs" class="button white" >Read the Docs</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapAttributes } from '@variate/vue';

export default {
    computed: {
        ...mapAttributes([
            'headline',
            'showGetStartedButton'
        ]),
    },
    methods: {
        variateTrack(name, type) {
            this.$variate.track({
                name: name,
                type: type
            });
        }
    }
}
</script>

<style>

</style>
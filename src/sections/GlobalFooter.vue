<template>
    <footer class="globalFooter">
        <hr/>
        <section>
             <div class="container">
                <div class="content">
                    <div class="column">
                        <div class="headline">Navigation</div>
                        <div v-for="link in linksLeft" :key="link.$index" class="item">
                            <router-link :to="link.to">{{ link.label }}</router-link>
                        </div>
                    </div>
                    <div class="column">
                        <div class="headline">Account</div>
                        <div v-for="link in linksRight" :key="link.$index" class="item">
                            <router-link :to="link.to">{{ link.label }}</router-link>
                        </div>
                    </div>
                    <div class="column">
                        <div class="item">&#9400; Variate</div>
                    </div>
                </div>
            </div>
        </section>
    </footer>
</template>

<script>
    export default {
        name: 'global-footer',
        data() {
            return {
                linksLeft: [
                    {to: 'features', label: 'Features'},
                    {to: 'pricing', label: 'Pricing'},
                    {to: 'company', label: 'Company'},
                    {to: 'docs', label: 'Docs'},
                ],
                linksRight: [
                    {to: 'login', label: 'Log In'}
                ],
                mobileNavOpen: false
            }
        },
        computed: {
            showMobileNav() {
                return {
                    'absolute': this.mobileNavOpen,
                    'hidden': !this.mobileNavOpen
                }
            }
        }
    }
</script>

<style>
    .globalFooter {
        @apply mt-32
    }
    .globalFooter hr {
        @apply border-t-2
    }
    .globalFooter .content {
        @apply py-16 flex flex-wrap text-gray-500
    }
    .globalFooter .headline {
        @apply font-semibold uppercase
    }
    .globalFooter .column > * {
        @apply mb-4
    }
    .globalFooter .column {
        @apply text-left m-8
    }
</style>
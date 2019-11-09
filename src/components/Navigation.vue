<template>
    <div class="navigation">
        <div class="container">
            <nav class="flex items-center py-3">
                <div class="flex-grow">
                    <router-link to="/" class="logo">
                        variate
                    </router-link>
                </div>
                <div class="hidden sm:flex">
                    <router-link v-for="link in linksLeft" :key="link.$index" :to="link.to">{{ link.label }}</router-link>
                </div>
                <div class="hidden sm:flex ml-5">
                    <router-link v-for="link in linksRight" :key="link.$index" :to="link.to">{{ link.label }}</router-link>
                </div>
                <div class="mobileNavButton sm:hidden" :class="{ 'open' : mobileNavOpen}" @click="mobileNavOpen = !mobileNavOpen">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="mobileNav sm:hidden bg-gray-200 p-10" :class="showMobileNav">
                    <div v-for="link in linksLeft" :key="link.$index">
                        <router-link :to="link.to">{{ link.label }}</router-link>
                    </div>
                    <div v-for="link in linksRight" :key="link.$index">
                        <router-link :to="link.to">{{ link.label }}</router-link>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'navigation',
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
    nav a {
        @apply px-3 py-4 font-semibold text-white
    }
    nav .logo {
        @apply font-bold text-4xl tracking-tight text-white
    }
    nav .button {
        @apply px-6 py-2 bg-white 
    }
    nav .button:hover {
        @apply bg-gray-100
    }
    nav a:hover {
        @apply text-gray-200
    }
    nav a.router-link-exact-active {
        @apply border-b-2
    }
    .mobileNavButton {
        @apply z-10 w-16 h-16 p-3
    }
    .mobileNavButton span {
        @apply block bg-white w-full h-2 mt-1;
        transition: 0.2s;
    }
    .mobileNavButton.open span:nth-child(1) {
        @apply mt-4;
        transform: rotate(45deg);
    }
    .mobileNavButton.open span:nth-child(2) {
        @apply -mt-2;
        transform: rotate(-45deg);
    }
    .mobileNavButton.open span:nth-child(3) {
        @apply hidden;
    }
    .mobileNav {
        @apply absolute right-0 top-0 z-0 mt-16;
    }
    .mobileNav div, .mobileNav div a {
        @apply py-3 text-gray-900
    }
</style>
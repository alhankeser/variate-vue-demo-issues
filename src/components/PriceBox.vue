<template>
    <div class="box">
        <div class="header">
            <p class="text-center uppercase">{{ plan.name }}</p>
            <p><span class="text-sm">up to </span>
            <span class="text-3xl font-semibold">{{ plan.events }}</span></p>
            <p class="text-sm text-center">events {{ plan.period }}</p>
        </div>
        <div class="body">
            <p class="price">{{ plan.price }}</p>
            <p class="text-sm text-center">{{ plan.period}}</p>
            <hr class="my-10">
            <ul class="bullets">
                <li v-for="feature in plan.features" :key="feature.$index">{{ feature }}</li>
            </ul>
            <div class="footer">
                <hr class="my-10">
                <a class="button" @click="variateTrack(plan.buttonText, 'click')" :href="plan.buttonLink">{{ plan.buttonText }}</a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'price-box',
    props: [ 'plan' ],
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
.box {
    @apply bg-white rounded shadow text-gray-800 mb-10 flex flex-col;
    flex-basis: 50%;
}
.box .header {
    @apply bg-teal-400 py-5 px-10 rounded-t text-white text-center
}
.box .body {
    @apply text-center p-10 flex flex-col justify-between flex-grow
}
.price {
    @apply text-2xl text-blue-400
}
.bullets li {
    @apply my-2
}
.box .button {
    @apply bg-blue-400 text-white mx-auto
}
@screen sm {
    .box {
        @apply mr-6
    }
}
</style>
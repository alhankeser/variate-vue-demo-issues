<template>
    <main>
        <header>
            <div class="heroBackground">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <section>
                <div class="container px-3">
                    <div class="text-content">
                        <h1>The developer-friendly a/b testing tool</h1>
                        <p>Variate makes it easy for developers to make components testeable through extensible feature-flag capabilities and provides marketers with an easy interface to create experiments. Get started in less than 5 minutes.</p>
                        <router-link to="register" class="button">Get Started</router-link>
                    </div>
                </div>
            </section>
        </header>
        <section class="imagery">
            <img src="../assets/code-screenshot.png">
            <img src="../assets/create-component-screenshot.png">
        </section>
    </main>
</template>

<script>

export default {
    name: 'home'
}
</script>

<style>
    main header {
        @apply leading-snug relative z-10
    }
    main header h1 {
        @apply text-4xl mb-4;
    }
    main header p {
        @apply text-lg mb-8;
    }
    main header section {
        @apply py-32 relative;
    }
    .heroBackground {
        @apply w-full h-full overflow-hidden block absolute;
        background: linear-gradient(to right, #fc5c7d, #6a82fb);
        transform: skewY(-9deg);
        transform-origin: 0;
    }
    main header {
       @apply text-white
    }
    section.imagery {
        margin-top: -40px;
        @apply absolute mx-auto z-20;
    }
    section.imagery img:nth-child(1){
        transform: rotate(6deg);
        margin-left: -20px;
    }
    section.imagery img:nth-child(2){
        transform: rotate(-6deg);
        margin-top: -120px; 
        margin-left: 20px;
    }
    section.imagery img {
        @apply rounded shadow-lg;
    }
   
    @media (min-width: 768px) {
        main header .text-content {
            max-width: 60%;
        }
        section.imagery {
            position: absolute;
            top: 200px;
            left: 60%;
            max-width: 40%;       
        }
    }
    @media (min-width: 640px) {
        section.imagery {
            max-width: 70%;       
        }
    }
</style>
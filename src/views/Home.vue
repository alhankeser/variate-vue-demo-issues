<template>
    <main>
        <header>
            <div class="heroBackground-1">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <section>
                <div class="container px-3">
                    <div class="text-content with-image">
                        <h1>The developer-friendly a/b testing tool</h1>
                        <p>Variate makes it super easy for developers to enable components for a/b testing in Vuejs and React applications.</p> <p>Get started in less than 5 minutes:</p>
                        <div class="mb-8 flex flex-col items-start lg:flex-row lg:items-center">
                            <pre>npm install variate-vue</pre>
                            <span class="m-1"> OR </span>
                            <pre>npm install variate-react</pre>
                        </div>
                        <div>
                            <router-link to="register" class="button white">Read the Docs</router-link>
                        </div>
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
        @apply text-lg mb-4;
    }
    main header section {
        @apply py-32 relative;
    }
    .heroBackground-1 {
        @apply w-full h-full overflow-hidden block absolute;
        background: linear-gradient(to right, #fc5c7d, #6a82fb);
        transform: skewY(-9deg);
        transform-origin: 0;
    }
    .heroBackground-1 span:nth-child(1) {
        width: 200px;
        top: -31px;
        left: 50%;
        background: linear-gradient(to right, transparent, #6a82fb);
        height: 140%;
        position: absolute;
        opacity: .2;
        transform: rotate(-15deg);
    }
    .heroBackground-1 span:nth-child(2) {
        width: 200px;
        height: 140%;
        top: -31px;
        left: 60%;
        background: linear-gradient(to right, transparent, #fc5c7d);
        position: absolute;
        opacity: .2;
        transform: rotate(15deg);
        border-radius: 50%;
    }
    .heroBackground-1 span:nth-child(3) {
        width: 600px;
        height: 200px;
        bottom: -22%;
        left: 0%;
        background: linear-gradient(to right, transparent, #a175d0);
        position: absolute;
        opacity: .2;
        transform: rotate(15deg);
    }
    main header {
       @apply text-white
    }
    section.imagery {
       @apply relative w-full px-16 z-20 -mt-8
    }
    section.imagery img:nth-child(1){
        transform: rotate(12deg);
        margin-left: -30px;
    }
    section.imagery img:nth-child(2){
        transform: rotate(-6deg);
        margin-top: -120px; 
        margin-left: 20px;
    }
    section.imagery img {
        @apply rounded shadow-lg;
    }
   
    @screen md {
        main header .text-content.with-image {
            max-width: 60%;
        }
        section.imagery {  
            top: 200px;
            left: 65%;
            max-width: 40%;  
            @apply absolute mx-auto px-0;
        }
    }
</style>
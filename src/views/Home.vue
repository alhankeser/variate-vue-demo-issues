<template>
    <main>
        <header>
            <div class="heroBackground-1">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <section>
                <div class="container">
                    <div class="text-content with-image">
                        <h1>The developer-friendly A/B testing tool</h1>
                        <p>Variate makes it super easy for developers to enable components for A/B testing in Vuejs and React applications.</p> <p>Get started in less than 5 minutes:</p>
                        <div class="mb-8 flex flex-col items-start lg:flex-row lg:items-center">
                            <pre>npm install variate-vue</pre>
                            <span class="m-1"> OR </span>
                            <pre>npm install variate-react</pre>
                        </div>
                        <div>
                            <router-link to="docs" class="button white">Read the Docs</router-link>
                        </div>
                    </div>
                </div>
            </section>
        </header>
        <section>
            <div class="imagery">
                <img src="../assets/code-screenshot.png">
                <img src="../assets/create-component-screenshot.png">
            </div>
        </section>
        <section>
            <div class="container">
                <div class="side-text left">
                    <h2>Empower your team, maintain control</h2>
                    <p>As a developer, you want your application to run smoothly and to load fast. Meanwhile, your marketers, product people and data scientists want to run A/B and MVT tests on your application. Variate gives you the keys to enable your application to be experimented on through typed attributes that only you control.</p>
                    <hr>
                    <div class="action">
                        <router-link to="docs">See how it works &rarr;</router-link>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>

export default {
    name: 'home'
}
</script>

<style>
   /* Section Side Text */
   section .side-text {
       @apply text-center w-2/3 mx-auto mt-16
   }
   section .side-text h2 {
       @apply text-xl uppercase font-semibold text-blue-400 
   }
   section .side-text > * {
       @apply mb-8
   }
   section .side-text .action a {
       @apply text-indigo-400 font-semibold
   }
   section .side-text hr {
       @apply border-t-2
   }
    @screen md {
        section .side-text.left {
            @apply text-right w-1/2 ml-0 pl-1
        }
        section .side-text.left hr {
            @apply ml-4
        }
    }
    @screen lg {
        section .side-text.left {
            @apply pl-32
        }
    }


    /* Main Header */
    main header {
        @apply leading-snug relative z-10 text-white
    }
    main header .text-content > * {
       @apply mb-6
    }
    main header h1 {
        @apply text-4xl;
    }
    main header p {
        @apply text-lg;
    }
    main header section {
        @apply py-32 relative;
    }
    @screen md {
        main header .text-content.with-image {
            max-width: 60%;
        }
    }

    /* Hero Background */
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
    
    /* Section Imagery */
    section .imagery {
       @apply relative w-full px-16 z-20 -mt-8
    }
    section .imagery img:nth-child(1){
        transform: rotate(12deg);
        margin-left: -30px;
    }
    section .imagery img:nth-child(2){
        transform: rotate(-6deg);
        margin-top: -120px; 
        margin-left: 20px;
    }
    section .imagery img {
        @apply rounded shadow-lg;
    }
    @screen md {
        section .imagery {  
            top: 200px;
            left: 65%;
            max-width: 40%;  
            @apply absolute mx-auto px-0;
        }
    }
</style>
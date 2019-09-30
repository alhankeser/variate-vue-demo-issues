<template>
    <main>
        <header>
            <div class="heroBackground home">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <section>
                <div class="container">
                    <div class="text-content with-image">
                        <h1>The developer-friendly A/B testing tool</h1>
                        <p>Variate makes it super easy for developers to enable components for A/B testing in Vuejs and React applications.</p> <p>Get started in less than 5 minutes:</p>
                        <div class="home-actions">
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
    .side-text {
       @apply text-center mx-auto mt-16
    }
    .side-text h2 {
        @apply text-xl uppercase font-semibold text-blue-400 
    }
    .side-text > * {
        @apply mb-8
    }
    .side-text .action a {
        @apply text-indigo-400 font-semibold
    }
    .side-text hr {
        @apply border-t-2
    }
    @screen sm {
        .side-text {
            @apply w-4/5
        }
    }
    @screen md {
        .side-text {
            @apply w-1/2
        }
        .side-text.left {
            @apply text-right ml-0 pl-1
        }
        .side-text.left hr {
            @apply ml-4
        }
        .side-text.right {
            @apply text-left ml-auto mr-0 pr-1
        }
        .side-text.left hr {
            @apply mr-4
        }
    }
    @screen lg {
        .side-text.left {
            @apply pl-32
        }
        .side-text.right {
            @apply pr-32
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
    main header .text-content {
        @apply text-center
    }
    .home-actions {
        @apply mb-8 flex flex-col items-center
    }
    @screen md {
        .home-actions {
            @apply items-start
        }
        main header .text-content {
            @apply text-left mx-auto
        }
        main header .text-content.with-image {
            max-width: 60%;
            @apply ml-0
        }
    }
    @screen lg {
        main header .text-content {
            max-width: 60%;
        }
        .home-actions {
            @apply flex-row items-center
        }
    }

    /* Hero Background */
    .heroBackground {
        @apply w-full h-full overflow-hidden block absolute shadow;
    }
    .heroBackground.home {
        background: linear-gradient(to right, #fc5c7d, #6a82fb);
        transform: skewY(-9deg);
        transform-origin: 0;
    }
    .heroBackground.home span:nth-child(1) {
        width: 200px;
        top: -31px;
        left: 50%;
        background: linear-gradient(to right, transparent, #6a82fb);
        height: 140%;
        position: absolute;
        opacity: .2;
        transform: rotate(-15deg);
    }
    .heroBackground.home span:nth-child(2) {
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
    .heroBackground.home span:nth-child(3) {
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
    .imagery {
       @apply relative w-full z-20 -mt-8
    }
    .imagery img:nth-child(1){
        transition: 0.2s;
        transform: rotate(12deg);
        margin-left: -30px;
    }
    .imagery img:nth-child(2){
        transition: 0.5s;
        transform: rotate(-6deg);
        margin-left: 20px;
    }
    .imagery img {
        @apply rounded shadow-lg;
    }
    @screen sm {
        .imagery {  
            @apply mx-auto px-16 w-4/5;
        }
        .imagery img:nth-child(2){
            margin-top: -100px; 
        }
    }
    @screen md {
        .imagery {  
            top: 350px;
            left: 60%;
            max-width: 60%;
            @apply absolute px-0;
        }
        .imagery img:nth-child(1){
            transform: rotate(18deg);
            max-width: 80%;
        }
        .imagery img:nth-child(2) {
            margin-top: 80px;
            margin-left: -20px;
        }
    }
    @screen lg {
        .imagery {  
            top: 300px;
            max-width: 50%;
        }
        .imagery img:nth-child(2) {
            margin-top: 0px;
        }
    }
    @screen xl {
        .imagery {  
            top: 200px;
            max-width: 540px;
        }
        .imagery img:nth-child(1){
            transform: rotate(18deg);
            max-width: 100%;
            margin-left: 0;
        }
    }
</style>
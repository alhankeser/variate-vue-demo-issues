<template>
    <main>
        <header>
            <div class="heroBackground home">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <section>
                <HomeHero />
            </section>
        </header>
        <section>
            <div class="home-imagery">
                <img class="special" src="../assets/code-screenshot.png">
                <img class="special" src="../assets/create-component-screenshot.png">
            </div>
        </section>
        <section>
            <div class="container">
                <div class="flex left">
                    <div class="side-text">
                        <h2>Empower your team, maintain control</h2>
                        <p>As a developer, you want your application to run smoothly and to load fast. Meanwhile, your marketers, product people and data scientists want to run A/B and MVT tests on your application. Variate gives you the keys to enable your application to be experimented on through typed attributes that only you control.</p>
                        <hr>
                        <div class="action">
                            <router-link to="docs">See how it works &rarr;</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import HomeHero from '@/components/HomeHero'
export default {
    name: 'home',
    components: { HomeHero }
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
    .side-image img {
        max-width: 100%;
    }
    @screen sm {
        .side-text {
            @apply w-4/5
        }
    }
    @screen md {
        .right .side-text, .left .side-text {
            @apply w-1/2
        }
        .left .side-text {
            @apply text-right ml-0 pl-1
        }
        .left .side-text hr {
            @apply ml-4
        }
        .right .side-text {
            @apply text-left ml-auto mr-0 pr-1
        }
        .left .side-text hr {
            @apply mr-4
        }
        .content {
            @apply flex
        }
        .side-image {
            max-width: 50%;
            @apply ml-10
        }
    }
    @screen lg {
        .left .side-text {
            @apply pl-32
        }
        .right .side-text {
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
    .heroBackground.home span:nth-child(2) {
        width: 200px;
        height: 140%;
        top: -31px;
        left: -16%;
        background: linear-gradient(to right, transparent, #fc5c7d);
        position: absolute;
        opacity: .2;
        transform: rotate(15deg);
        border-radius: 50%;
    }
    @screen md {
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
            left: 60%;
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
    }
    
    /* Section home-imagery */
    .home-imagery {
       @apply relative w-full z-20 -mt-8
    }
    .home-imagery img:nth-child(1){
        transition: 0.2s;
        transform: rotate(12deg);
        margin-left: -30px;
    }
    .home-imagery img:nth-child(2){
        transition: 0.5s;
        transform: rotate(-6deg);
        margin-left: 20px;
    }
    img.special {
        @apply rounded shadow-lg;
    }
    @screen sm {
        .home-imagery {  
            @apply mx-auto px-16 w-4/5;
        }
        .home-imagery img:nth-child(2){
            margin-top: -100px; 
        }
    }
    @screen md {
        .home-imagery {  
            top: 350px;
            left: 60%;
            max-width: 60%;
            @apply absolute px-0;
        }
        .home-imagery img:nth-child(1){
            transform: rotate(18deg);
            max-width: 80%;
        }
        .home-imagery img:nth-child(2) {
            margin-top: 80px;
            margin-left: -20px;
        }
    }
    @screen lg {
        .home-imagery {  
            top: 300px;
            max-width: 50%;
        }
        .home-imagery img:nth-child(2) {
            margin-top: 0px;
        }
    }
    @screen xl {
        .home-imagery {  
            top: 200px;
            max-width: 540px;
        }
        .home-imagery img:nth-child(1){
            transform: rotate(18deg);
            max-width: 100%;
            margin-left: 0;
        }
    }
</style>
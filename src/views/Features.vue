<template>
    <main>
        <header>
            <div class="heroBackground features">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <section>
                <div class="container">
                    <div class="text-content">
                        <div class="font-semibold uppercase">Features</div>
                        <h1>If you can dream it, you can test it</h1>
                        <p>Variate can be used to test anything within your application,
                            from API versions to image filters. If you simply want to
                            test headlines and buttons with it, go right ahead.
                        </p>
                        <p>Whatever you decide to test with it, two things will remain <strong>constant</strong>: there will never be a flicker of original content and when you iterate on a test, you will not need to involve your developers.
                        </p>
                    </div>
                </div>
            </section>
        </header>
        <section>
            <div class="container">
                <div class="content left">
                    <div class="side-text">
                        <h2>Seamless A/B Testing with Vuejs and React</h2>
                        <p> Variate is built as a plugin for applications running either Vuejs or React. 
                            It seamlessly integrates with either framework while also giving developers the freedom to choose how to integrate it. 
                            This makes it easy for developer to enable marketers and product people to run experiments.
                        </p>
                        <hr>
                        <div class="action">
                            <router-link to="docs">Read the docs &rarr;</router-link>
                        </div>
                    </div>
                    <div class="side-image">
                        <img class="special" src="../assets/component-detail-screenshot.png" alt="  ">
                    </div>
                </div>
                <div class="content">
                    <div class="side-text">
                        <h2>No Flicker of Original Content</h2>
                        <p>If you've used typical A/B testing tools, you will be familiar with the dreaded Flicker of Original Content or FOOC. Since Variate makes decisions about which variations to show prior to your pages being rendered, there is no flicker and your original content does not get loaded.</p>
                        <p>For example, using a traditional A/B testing tool, if you replace one image with another, you will not only see the original image for a split second, but also, the browser will load both images. That is costing you in page performance and likely degrading the user experience, which is not the point of A/B testing!
                        </p>
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

export default {
    name: 'features',
}
</script>

<style>
    .heroBackground.features {
        background: linear-gradient(to right, #74ebd5, #acb6e5);
        /* background: #fff; */
        transform: skewY(-7deg);
        transform-origin: 0;
    }
    .heroBackground.features span:nth-child(1) {
        width: 200px;
        top: -31px;
        left: 0%;
        background: linear-gradient(to right, transparent, #6a82fb);
        height: 140%;
        position: absolute;
        opacity: .2;
        transform: rotate(-15deg);
    }
    .heroBackground.features span:nth-child(2) {
        width: 200px;
        height: 140%;
        top: -31px;
        left: 70%;
        background: linear-gradient(to right, transparent, #fc5c7d);
        position: absolute;
        opacity: .2;
        transform: rotate(15deg);
        border-radius: 50%;
    }
</style>

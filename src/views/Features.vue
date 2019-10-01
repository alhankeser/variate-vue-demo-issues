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
                <div class="side-text left">
                    <h2>Feature #1</h2>
                    <p>Information about this feature</p>
                    <hr>
                    <div class="action">
                        <router-link to="docs">See how it works &rarr;</router-link>
                    </div>
                </div>
                <div class="side-text right">
                    <h2>Feature #2</h2>
                    <p>Information about this feature</p>
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
    name: 'features',
}
</script>

<style>
    .heroBackground.features {
        background: linear-gradient(to right, #74ebd5, #acb6e5);
        transform: skewY(-7deg);
        transform-origin: 0;
    }
    .heroBackground.features span:nth-child(1) {
        width: 200px;
        top: -31px;
        left: 50%;
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
        left: 80%;
        background: linear-gradient(to right, transparent, #fc5c7d);
        position: absolute;
        opacity: .2;
        transform: rotate(15deg);
        border-radius: 50%;
    }
</style>

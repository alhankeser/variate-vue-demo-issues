<template>
    <main>
        <header>
            <div class="heroBackground pricing">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <section>
                <div class="container">
                    <div class="text-content">
                        <div class="font-semibold uppercase">Pricing</div>
                        <h1>Low, simple pricing</h1>
                        <p>Each tier is based on monthly event caps. An event is defined as a unique visit and any custom tracked events.</p>
                        <div class="flex">
                            <div class="box">
                                <div class="header">
                                    <p class="text-center uppercase">Premium Plan</p>
                                    <p class="font-semibold">up to
                                    <span class="text-3xl">1,000,000</span></p>
                                    <p class="text-sm text-center">events per month</p>
                                </div>
                                <div class="body">
                                    <p class="price"><span>$</span><span>49.99</span></p>
                                    <p class="text-sm text-center">per month</p>
                                    <hr class="my-10">
                                    <ul class="bullets">
                                        <li>1:1 Support For First 30 Days</li>
                                        <li>Unlimited Sites</li>
                                        <li>Unlimited Experiments</li>
                                        <li>Unlimited Components</li>
                                    </ul>
                                    <hr class="my-10">
                                    <div class="footer">
                                        <a class="button" href="#">Register</a>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="box">
                                <div class="header">
                                    <p class="text-center uppercase">Enterprise Plan</p>
                                    <p class="font-semibold">
                                    <span class="text-3xl">Unlimited</span></p>
                                    <p class="text-sm text-center">events per month</p>
                                </div>
                                <div class="body">
                                    <p class="price"><span>Custom Pricing</span></p>
                                    <p class="text-sm text-center">per month</p>
                                    <hr class="my-10">
                                    <ul class="bullets">
                                        <li>1:1 Support</li>
                                        <li>Unlimited Sites</li>
                                        <li>Unlimited Experiments</li>
                                        <li>Unlimited Components</li>
                                    </ul>
                                    <hr class="my-10">
                                    <div class="footer">
                                        <a class="button" href="#">Contact Us</a>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </header>
        <!-- <section>
            <div class="container">
                <div class="content">
                    <div class="side-text">
                        <h2>FAQ 1</h2>
                        <p>...</p>
                    </div>
                </div>
            </div>
        </section> -->
    </main>
</template>


<script>

export default {
    name: 'pricing'
}
</script>

<style>

.heroBackground.pricing {
    background: linear-gradient(to right, #BEE3F8, #4299E1);
    /* background: #fff; */
    transform: skewY(-7deg);
    transform-origin: 0;
}
.heroBackground.pricing span:nth-child(1) {
    width: 200px;
    top: -31px;
    left: 15%;
    background: linear-gradient(to right, transparent, #6a82fb);
    height: 140%;
    position: absolute;
    opacity: .2;
    transform: rotate(-15deg);
}
.heroBackground.pricing span:nth-child(2) {
    width: 200px;
    height: 140%;
    top: -200px;
    left: 56%;
    background: linear-gradient(to right, transparent, #4fd2c5);
    position: absolute;
    opacity: .2;
    transform: rotate(-44deg);
}
.box {
    @apply bg-white rounded shadow text-gray-800 mr-10;
    flex-basis: 50%;
}
.box .header {
    @apply bg-teal-400 py-5 px-10 rounded-t text-white text-center
}
.box .body {
    @apply text-center p-10
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

</style>
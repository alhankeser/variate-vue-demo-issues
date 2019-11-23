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
                        <div class="sm:flex">
                            <PriceBox :plan="plan" v-for="plan in plans" :key="plan.id"/>
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

import PriceBox from '@/components/PriceBox'

export default {
    name: 'pricing',
    components: { PriceBox },
    data() {
        return {
            plans: [
                {
                    id: 0,
                    name: 'Premium Plan',
                    events: '1,000,000',
                    price: '$49.99',
                    period: 'per month',
                    features: [
                        'Priority Support',
                        'Unlimited Sites',
                        'Unlimited Experiments',
                        'Unlimited Components'
                    ],
                    buttonText: 'Register',
                    buttonLink: '/register'
                },
                {
                    id: 1,
                    name: 'Enterprise Plan',
                    events: 'Unlimited',
                    price: 'Custom Pricing',
                    period: 'per month',
                    features: [
                        'High Priority Support',
                        'CDN Hosting',
                        'Unlimited Sites',
                        'Unlimited Experiments',
                        'Unlimited Components'
                    ],
                    buttonText: 'Contact Us',
                    buttonLink: '/contact'
                }
            ]
        }
    }
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

</style>
import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'

import config from '../variate.json';
import Variate from '@variate/vue';

Vue.use(Variate, {
  debug: true,
  tracking: true,
  reporter: (event) => {
    console.log('Sending to Google Analytics: ' + event.name);
    console.log(event)
    ga('create', 'UA-82876270-6', 'auto');
    if (event.type === 'pageview') {
      // Set custom dimension
      var customDimensionSlot = '1';
      var customDimensionValue = 'Exp' + event.value.experimentId + '|Var' + event.value.variationId;
      ga('set', 'dimension' + customDimensionSlot, customDimensionValue);
      ga('send', {
        hitType: 'event',
        eventCategory: 'Variate Experiments',
        eventAction: 'qualify',
        eventLabel: 'Exp' + event.value.experimentId + '|Var' + event.value.variationId
      });
    }
    else {
      // Send event
      ga('send', {
        hitType: 'event',
        eventCategory: 'Variate Experiments',
        eventAction: event.type,
        eventLabel: event.name
      });
    }
    
    return true;
  },
  config,
});



import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

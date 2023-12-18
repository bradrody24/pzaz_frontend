import { createApp } from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import BaseCard from './components/base/BaseCard.vue';
import BaseButton from './components/base/BaseButton.vue';

const app = createApp(App)

app.use(router);
app.use(store);

app.component('BaseCard', BaseCard);
app.component('BaseButton', BaseButton);

app.mount('#app');

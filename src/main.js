import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

//import utils
import UtilFormatacaoTexto from './utils/utilFormatacaoTexto.js';

const app = createApp(App);

//Utils adicionadas
app.config.globalProperties.$formataPrimeiraLetraMaiuscula =
  UtilFormatacaoTexto.formataPrimeiraLetraMaiuscula;

app.use(store).use(router).mount('#app');

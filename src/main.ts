import Vue, { CreateElement } from 'vue';

import App from '@/App.vue';
import '@/registerServiceWorker';
import router from '@/router/router';
import store from '@/store/store';

// Import Ant Design LESS
import 'ant-design-vue/dist/antd.less';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h: CreateElement) => h(App),
}).$mount('#app');

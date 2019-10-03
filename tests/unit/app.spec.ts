import { shallowMount } from '@vue/test-utils';

import App from '@/App.vue';

describe('App.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(App, {
      propsData: {},
      components: {
        'router-view': {
          name: 'router-view',
          render: (h: any) => h('div'),
        },
      },
      stubs: ['PageHeader'],
    });
    expect(wrapper).toMatchSnapshot();
  });
});

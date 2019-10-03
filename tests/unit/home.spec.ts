import { shallowMount } from '@vue/test-utils';

import Home from '@/views/Home.vue';

describe('Home.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Home, {
      propsData: {},
      stubs: ['Logo'],
    });
    expect(wrapper).toMatchSnapshot();
  });
});

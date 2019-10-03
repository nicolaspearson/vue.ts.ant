import { shallowMount } from '@vue/test-utils';

import About from '@/views/About.vue';

describe('About.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(About, {
      propsData: {},
    });
    expect(wrapper).toMatchSnapshot();
  });
});

import { shallowMount } from '@vue/test-utils';

import PageHeader from '@/components/PageHeader.vue';

describe('PageHeader.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(PageHeader, {
      propsData: {},
      stubs: ['LogoAlt', 'NavItem'],
    });
    expect(wrapper).toMatchSnapshot();
  });
});

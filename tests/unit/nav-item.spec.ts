import { shallowMount } from '@vue/test-utils';

import NavItem from '@/components/NavItem.vue';

describe('NavItem.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(NavItem, {
      propsData: {
        navItem: {
          key: 1,
          text: 'Home',
          location: {
            name: 'home',
          },
          color: 'default',
        },
      },
      stubs: ['router-link'],
    });
    expect(wrapper).toMatchSnapshot();
  });
});

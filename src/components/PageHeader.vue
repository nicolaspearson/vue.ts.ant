<template>
  <header class="header">
    <section class="logo-alt">
      <LogoAlt />
    </section>
    <nav>
      <ul v-if="navItems">
        <li v-for="navItem in navItems" :key="`${navItem.key}`">
          <NavItem :navItem="navItem" />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import LogoAlt from '@/assets/logo-alt.svg';
import NavItem from '@/components/NavItem.vue';
import INavItem from '@/interfaces/nav-item';

@Component({ components: { LogoAlt, NavItem } })
export default class PageHeader extends Vue {
  private navItems: INavItem[] = [
    {
      key: 1,
      text: 'Home',
      location: {
        name: 'home',
      },
      color: 'default',
    },
    {
      key: 2,
      text: 'About',
      location: {
        name: 'about',
      },
      color: 'default',
    },
  ];
}
</script>

<style scoped lang="scss">
.header {
  @include gradient();
  @include shadow();
  display: grid;
  grid-template-columns: 200px 1fr 1fr;
  align-items: center;
  padding: 0.5em 2em;

  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin-bottom: 0;
  }

  li {
    display: inline-block;
    margin: 0 4px;
  }

  .logo-alt {
    justify-self: start;
    svg {
      transform: scale(0.75);
    }
  }

  h1 {
    color: white;
  }
}
</style>

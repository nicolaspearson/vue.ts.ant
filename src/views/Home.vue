<template>
  <div class="home">
    <h1>{{ "Welcome to Your Vue.js + TypeScript App" }}</h1>
    <section class="logo">
      <Logo />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Logo from '@/assets/logo.svg';

@Component({
  components: {
    Logo,
  },
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.home {
  padding-top: 2em;

  .logo {
    padding-top: 8em;
    svg {
      transform: scale(4);
    }
  }
}
</style>

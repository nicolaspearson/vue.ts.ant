<template>
  <div class="home">
    <Logo />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Logo from '@/assets/logo.svg';
import HelloWorld from '@/components/HelloWorld.vue';

@Component({
  components: {
    Logo,
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>

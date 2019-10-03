<template>
  <div class="about">
    <h1>This is an about page</h1>
    <DatePicker />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { DatePicker } from 'ant-design-vue';

@Component({
  components: {
    DatePicker,
  },
})
export default class Home extends Vue {}
</script>


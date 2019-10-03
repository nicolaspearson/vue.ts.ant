<template>
  <section class="nav-item" :class="navItem.disabled ? 'disabled' : navItem.color">
    <router-link class="link" :to="navItem.location">
      <div class="text">
        <span>{{ navItem.text }}</span>
      </div>
    </router-link>
  </section>
</template>

<script lang="ts" >
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class NavItem extends Vue {
  @Prop({ required: true, type: Object })
  private navItem!: NavItem;
}
</script>

<style lang="scss" scoped>
.nav-item {
  display: flex;
  flex-shrink: 1;
  flex-direction: row;
  width: auto;

  .link {
    display: inline-flex;
    text-decoration: none;
  }

  .text {
    display: inline-flex;
    flex-shrink: 1;
    white-space: nowrap;
    width: auto;
    font-size: medium;
    font-weight: normal;
    margin: auto 3rem auto 0.5rem;
    color: white;

    &:hover {
      color: $grey-hover;
    }
  }

  .router-link-exact-active {
    .text {
      font-weight: bold;
    }
  }

  &.disabled {
    .nav-item {
      cursor: not-allowed;
    }
    .text {
      color: $light-grey;
    }
  }

  &.primary {
    .text {
      color: $primary;
    }
  }
}
</style>

<script setup>
import TotalExperience from '@src/subviews/TotalExperience.vue'

defineProps({
  title: {
    default: '',
    type: String
  },
  subtitle: {
    default: '',
    type: String
  },
  showExperience: {
    default: true,
    type: Boolean
  }
})
</script>

<template>
  <div class="master_title section_title">
    <h1 class="title border__bottom">{{ title }}</h1>
    <h4 class="subtitle border__bottom">{{ subtitle }}</h4>
    <h4 v-if="showExperience" class="exp_years border__bottom">From Past <TotalExperience /></h4>
  </div>
</template>

<style lang="scss" scoped>
.master_title {
  position: relative;
  background-color: var(--theme-color);
  padding: 1rem 2rem;
  width: auto;
  border-width: px2rem(5) 0 px2rem(5) 0;
  border-style: double;
  border-color: var(--item-color);
  text-transform: uppercase;
  font-weight: bolder;
  margin: auto auto 2rem auto;

  .title {
    font-size: 5vw;
  }

  .subtitle {
    font-size: 2.5vw;
    padding: 0.625rem 0;
  }

  .border__bottom {
    border-bottom: px2rem(2) solid var(--item-color);

    &:last-child {
      border-bottom: none;
    }
  }

  .exp_years {
    margin-top: 0.625rem;

    * {
      font-family: var(--secondary-font-family);
      text-transform: uppercase;
    }
  }

  @include mediaQuery(mobile) {
    .title {
      font-size: 8vw;
    }

    .subtitle {
      font-size: 4vw;
    }
  }
}
</style>

<template>
  <main class="main_template">
    <div class="main__sidebar">
      <slot name="sidebar"> </slot>
    </div>
    <div class="main__content">
      <slot name="content"></slot>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main_template {
  display: grid;
  grid-template-columns: 3fr 7fr;
  width: 100vw;
  height: 100vh;

  @mixin commonCode {
    position: relative;
    height: auto;
  }
  .main {
    &__sidebar {
      @include commonCode();
      background: var(--sidebar-bg-color);
      color: var(--sidebar-txt-color);
    }

    &__content {
      @include commonCode();
      background: var(--bg-color);
      color: var(--item-color);
    }
  }
}

@include mediaQuery(mobile) {
  .main_template {
    grid-template-columns: 1fr;

    .main {
      &__sidebar,
      &__content {
        width: calc(100vw);
      }
    }
  }
}
</style>

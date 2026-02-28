<template>
  <div class="main-layout__header">
  </div>

  <div class="main-layout-header__content">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.main-layout {
  &__header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    border-bottom: 1px solid #eee;
    background: #ffffff;
  }
}
</style>
<template>
  <div class="main-layout__header">
    <div class="main-layout__logo">Mini-CMS</div>
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
    padding: 24px;
    height: 70px;
    border-bottom: 1px solid #eee;
    background: #ffffff;
  }

  &__logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
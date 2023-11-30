<template>
  <BaseHeader />
  <div class="flex main-container">
    <BaseSide />
    <div w="full" py="4">
      <router-view />
    </div>
  </div>
</template>

<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.main-container {
  height: calc(100vh - var(--ep-menu-item-height) - 3px);
}
</style>

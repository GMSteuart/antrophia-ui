<template>
  <div class="layout main-layout">
    <main-nav></main-nav>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import MainNav from '@/components/MainNav'

  export default {
    name: "MainLayout",
    components: {
      MainNav
    }
  }
</script>

<style lang="scss" scoped>
  .main-layout {
    width: 100%;

    .content {
      margin-top: $nav-height;
    }
  }
</style>
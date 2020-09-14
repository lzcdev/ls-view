<template>
  <div class="home">

    <div class="title">基础组件</div>
    <div class="components">
      <router-link to="/button">Button 按钮</router-link>
      <router-link to="/icon">Icon 图标</router-link>
    </div>

    <div class="title">表单组件</div>
    <div class="components">
      <router-link to="/rate">Rate 评分</router-link>
    </div>

    <div class="title">反馈组件</div>
    <div class="components">
      <router-link to="/loading">Loading 加载</router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="stylus" scoped>
.title {
  font-size: 20px;
  font-weight: 500;
  margin-top: 10px;
}

.components {
  display: flex;
  flex-direction: column;

  a {
    margin: 4px 0;
  }
}
</style>

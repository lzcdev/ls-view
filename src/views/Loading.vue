<template>
  <div class="loading">
    <div class="title">加载类型</div>
    <ls-loading class="loading" />
    <ls-loading class="loading" type="spinner" />

    <div class="title">自定义颜色</div>
    <ls-loading class="loading" color="#1989fa" />
    <ls-loading class="loading" type="spinner" color="#1989fa" />

    <div class="title">自定义大小</div>
    <ls-loading class="loading" color="#2FC29C" size="60" />
    <ls-loading class="loading" type="spinner" color="#2FC29C" size="60" />

    <div class="title">加载文案</div>
    <ls-loading class="loading">加载中...</ls-loading>

    <div class="title">垂直排列</div>
    <ls-loading class="loading" vertical>加载中...</ls-loading>

  </div>
</template>

<script>
import LsLoading from '../components/loading'
export default {
  components: {
    LsLoading
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="stylus" scoped>
.title {
  margin: 15px 0 10px 0;
  font-size: 20px;
  font-weight: 500;
}

.loading {
  margin: 4px 10px 4px 0;
}
</style> 

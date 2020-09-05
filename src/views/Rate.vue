<template>
  <div class="rate">
    <div class="title">基础用法</div>
    <ls-rate v-model="value1" @change='onChange'></ls-rate>

    <div class="title">自定义颜色</div>
    <ls-rate v-model="value2" color="#2C8CFA" @change='onChange'></ls-rate>

    <div class="title">自定义数量</div>
    <ls-rate v-model="value5" :count=10 color="#FCB03E" @change='onChange'></ls-rate>

    <div class="title">自定义大小</div>
    <ls-rate v-model="value3" size="60" @change='onChange'></ls-rate>

    <div class="title">图标间距</div>
    <ls-rate v-model="value3" gutter="20" @change='onChange'></ls-rate>

    <div class="title">只读</div>
    <ls-rate v-model="value7" readonly></ls-rate>

    <div class="title">禁用</div>
    <ls-rate v-model="value8" disabled></ls-rate>

    <div class="title">半星</div>
    <ls-rate v-model="value6" allow-half :count="7" size="40" color="#2FC29C" @change='onChange'></ls-rate>

  </div>
</template>

<script>
import LsRate from '../components/rate'
export default {
  components: {
    LsRate
  },
  data () {
    return {
      value1: 1,
      value2: 2,
      value3: 3,
      value4: 4,
      value5: 3,
      value6: 2.5,
      value7: 4,
      value8: 2,
      value9: 3,

    }
  },
  methods: {
    onChange (e) {
      console.log(`当前值==>${e}`)
    }
  }
}
</script>

<style scoped>
.title {
  margin-top: 20px;
}
</style>
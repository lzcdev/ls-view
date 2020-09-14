<template>
  <div class="button">
    <div class="title">按钮类型</div>
    <ls-button class="btn" type="primary" @click="click" @touchstart="touchstart">主要按钮</ls-button>
    <ls-button class="btn" type="info">信息按钮</ls-button>
    <ls-button class="btn" type="default">默认按钮</ls-button>
    <ls-button class="btn" type="danger">危险按钮</ls-button>
    <ls-button class="btn" type="warning">警告按钮</ls-button>

    <div class="title">朴素按钮</div>
    <ls-button class="btn" plain type="primary">朴素按钮</ls-button>
    <ls-button class="btn" plain type="info">信息按钮</ls-button>
    <ls-button class="btn" plain type="default">默认按钮</ls-button>
    <ls-button class="btn" plain type="danger">危险按钮</ls-button>
    <ls-button class="btn" plain type="warning">警告按钮</ls-button>

    <div class="title">细边框（暂未实现）</div>
    <ls-button class="btn" plain hairline type="warning">细边框按钮</ls-button>

    <div class="title">禁用状态</div>
    <ls-button class="btn" disabled type="primary" @click="click">禁用状态</ls-button>
    <ls-button class="btn" disabled type="info">禁用状态</ls-button>

    <div class="title">加载状态（有bug）</div>
    <ls-button class="btn" type="primary" loading></ls-button>
    <ls-button class="btn" type="primary" loading loading-type="spinner"></ls-button>
    <ls-button class="btn" type="info" loading loading-text="加载中..."></ls-button>
    <ls-button class="btn" type="warning" loading loading-type="spinner" color="#2FC29C" loading-text="加载中..." loading-size=50></ls-button>

    <div class="title">按钮形状</div>
    <ls-button class="btn" square type="primary">无圆角按钮</ls-button>
    <ls-button class="btn" round type="info">圆角按钮</ls-button>

    <div class="title">图标按钮（暂未实现）</div>
    <ls-button class="btn" type="primary">按钮</ls-button>
    <ls-button class="btn" type="info">按钮</ls-button>

    <div class="title">按钮尺寸</div>
    <ls-button class="btn" type="primary" size="large">大号按钮</ls-button>
    <ls-button class="btn" type="primary" size="normal">普通按钮</ls-button>
    <ls-button class="btn" type="primary" size="small">小型按钮</ls-button>
    <ls-button class="btn" type="primary" size="mini">迷你按钮</ls-button>

    <div class="title">块级元素</div>
    <ls-button class="btn" type="primary" block>块级元素</ls-button>
    <ls-button class="btn" type="info" block>块级元素</ls-button>

    <div class="title">页面导航（暂未实现）</div>
    <ls-button class="btn" type="primary">URL 跳转</ls-button>
    <ls-button class="btn" type="info">路由跳转</ls-button>

    <div class="title">自定义颜色</div>
    <ls-button class="btn" color="#7232dd">单色按钮</ls-button>
    <ls-button class="btn" color="#7232dd" plain>单色按钮</ls-button>
    <ls-button class="btn" color="linear-gradient(to right, #ff6034, #ee0a24)">渐变色按钮</ls-button>

  </div>
</template>

<script>
import LsButton from '../components/button'
export default {
  components: {
    LsButton
  },
  data () {
    return {

    }
  },
  methods: {
    click () {
      console.log('点击click')
    },
    touchstart () {
      console.log('点击touchstart')

    }
  }
}
</script>

<style lang="stylus" scoped>
.title {
  margin: 15px 0 10px 0;
  font-size: 20px;
  font-weight: 500;
}

.btn {
  margin: 4px 10px 4px 0;
}
</style> 

<template>
  <div class="demo">
    <div class="demo_title">基础用法</div>
    <ls-icon class="demo_component" name="chat-o" />
    <ls-icon class="demo_component" name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />

    <div class="demo_title">徽标提示</div>
    <ls-icon class="demo_component" name="chat-o" dot />
    <ls-icon class="demo_component" name="chat-o" badge="9" />
    <ls-icon class="demo_component" name="chat-o" badge="99+" />

    <div class="demo_title">图标颜色</div>
    <ls-icon class="demo_component" name="chat-o" color="#1989fa" />
    <ls-icon class="demo_component" name="chat-o" color="#07c160" />

    <div class="demo_title">图标大小</div>
    <ls-icon class="demo_component" name="chat-o" size="40" />
    <ls-icon class="demo_component" name="chat-o" size="3rem" />

    <div class="demo_title">点击事件</div>
    <ls-icon class="demo_component" name="chat-o" size="60"  color="#E5BC2A" @click="onClick" />

  </div>
</template>

<script>
import LsIcon from '../components/icon'
export default {
  components: {
    LsIcon
  },
  data () {
    return {

    }
  },
  methods: {
    onClick () {
      console.log('点击click')
    }
  }
}
</script>

<style lang="stylus" scoped></style> 

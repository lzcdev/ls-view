<template>
  <div class="demo">
    <div class="demo_title">基础用法</div>
    <ls-image class="demo_component" width="10rem" height="10rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />

    <div class="demo_title">填充模式</div>
    <p>contain: 等比例缩放</p>
    <p>cover: 裁剪</p>
    <p>fill: 拉伸</p>
    <p>none: 保留原尺寸</p>
    <p>scale-down: 内容的尺寸与 none 或 contain 中的一个相同，取决于它们两个之间谁得到的对象尺寸会更小一些</p>
    <ls-image class="demo_component" width="100" height="100" fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    <ls-image class="demo_component" width="100" height="100" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    <ls-image class="demo_component" width="100" height="100" fit="fill" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    <ls-image class="demo_component" width="100" height="100" fit="none" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    <ls-image class="demo_component" width="100" height="100" fit="scale-down" src="https://img.yzcdn.cn/vant/cat.jpeg" />

    <div class="demo_title">圆形图片</div>
    <ls-image class="demo_component" round width="100" height="100" fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    <ls-image class="demo_component" round width="100" height="100" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    <ls-image class="demo_component" round width="100" height="100" fit="fill" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    <ls-image class="demo_component" round width="100" height="100" fit="none" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    <ls-image class="demo_component" round width="100" height="100" fit="scale-down" src="https://img.yzcdn.cn/vant/cat.jpeg" />

    <div class="demo_title">加载中提示</div>
    <ls-image class="demo_component" width="100" height="100"></ls-image>
    <ls-image class="demo_component" width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg">
      <template v-slot:loading>
        <ls-loading type="spinner" size="20" />
      </template>
    </ls-image>

    <ls-image class="demo_component" width="100" height="100">
      <template v-slot:loading>
        <ls-loading type="spinner" size="20" />
      </template>
    </ls-image>
  </div>
</template>

<script>
import LsImage from '../components/image'
import LsLoading from '../components/loading'

export default {
  components: {
    LsImage,
    LsLoading
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

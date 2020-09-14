<template>
  <i :class="classes" :style="{color: this.color, fontSize: fontSize}" @click="onClick">
    <div :class="badgeClass">
      {{badge}}
    </div>
    <img v-show="showUrlIcon" class="vant-icon__image" :src="name" alt="">
  </i>
</template>

<script>
export default {
  props: {
    name: String,
    color: String,
    dot: Boolean,
    badge: [Number, String],
    size: {
      type: [String, Number],
      default: '32',
    }
  },
  data () {
    return {
      showUrlIcon: false
    }
  },
  mounted () {
    if (this.isUrl(this.name)) {
      this.showUrlIcon = true
    }

  },
  computed: {
    classes () {
      return [
        'vant-icon',
        `van-icon-${this.name}`
      ]
    },
    badgeClass () {
      return [
        'ls-info',
        this.dot ? 'ls-info-dot' : ''
      ]
    },
    fontSize () {
      return this.size.substr(this.size.length - 1, 1) === 'm' ? this.size : `${this.size}px`
    }
  },
  methods: {
    isUrl (url) {
      var Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
      var objExp = new RegExp(Expression)
      if (objExp.test(url) == true) {
        return true
      } else {
        return false
      }
    },
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="stylus" scoped>
vant-icon-default-margin = 16px 0 16px;
vant-icon-default-color = #323233;
vant-icon-default-size = 32px;

.vant-icon {
  margin: vant-icon-default-margin;
  color: vant-icon-default-color;
  font-size: vant-icon-default-size;

  &__image {
    width: 1em;
    height: 1em;
    object-fit: contain;
  }

  .ls-info {
    position: absolute;
    top: 0;
    right: 0;
    box-sizing: border-box;
    min-width: 16px;
    padding: 0 3px;
    color: #fff;
    font-weight: 500;
    font-size: 12px;
    font-family: -apple-system-font, Helvetica Neue, Arial, sans-serif;
    line-height: 1.2;
    text-align: center;
    background-color: #ee0a24;
    border: 1px solid #fff;
    border-radius: 16px;
    -webkit-transform: translate(50%, -50%);
    transform: translate(50%, -50%);
    -webkit-transform-origin: 100%;
    transform-origin: 100%;

    &-dot {
      width: 8px;
      min-width: 0;
      height: 8px;
      background-color: #ee0a24;
      border-radius: 100%;
    }
  }
}
</style>

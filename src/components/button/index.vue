<template>
  <button class="ls-button ls-button--normal" :class="classes" :style="{background:buttonBackground,color: buttonColor,borderColor:this.color}" disabled="disabled" @click="onClick" @touchstart="onTouchStart">
    <ls-loading v-show="loading" :style="{margin: `${loadingSize/3}px 0`}" :type="loadingType" color="#fff" :size="loadingSize">{{loadingText}}</ls-loading>
    <ls-icon v-show="icon" :name="icon" color="#fff" />
    <div class="ls-button--text">
      <slot></slot>
    </div>

  </button>
</template>

<script>
import LsLoading from '../loading'
import LsIcon from '../icon'


export default {
  components: {
    LsLoading,
    LsIcon
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    },
    icon: String,
    text: String,
    color: String,
    plain: Boolean,
    hairline: Boolean,
    disabled: Boolean,
    loading: Boolean,
    loadingType: String,
    loadingText: String,
    loadingSize: [String, Number],
    square: Boolean,
    round: Boolean,
    block: Boolean
  },
  data () {
    return {

    }
  },
  mounted () {
  },
  computed: {
    classes () {
      return [
        `ls-button--${this.type}`,
        `ls-button--${this.size}`,
        this.plain ? 'ls-button--plain' : '',
        this.hairline ? 'ls-button--hairline' : '',
        this.disabled ? 'ls-button--disabled' : '',
        this.square ? 'ls-button--square' : '',
        this.round ? 'ls-button--round' : '',
        this.block ? 'ls-button--block' : '',
      ]
    },
    buttonColor () {
      return this.plain ? this.color : (this.type !== 'default' || this.color ? '#fff' : '#323233')
    },
    buttonBackground () {
      return this.plain ? '#fff' : this.color
    }
  },
  methods: {
    onClick () {
      if (!this.disabled) return
      this.$emit('click')
    },
    onTouchStart () {
      if (this.disabled) return
      this.$emit('click')
      this.$emit('touchstart')
    }
  }
}
</script>

<style lang="stylus" scoped>
changeType(color, bgColor, borderColor) {
  color: color;
  background-color: bgColor;
  border: 1px solid borderColor;
}

.ls-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-height: 44px;
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 1.2;
  text-align: center;
  border-radius: 2px;
  cursor: pointer;
  color: #fff;
  -webkit-transition: opacity 0.2s;
  transition: opacity 0.2s;
  -webkit-appearance: none;
  outline: none;
  border: 1px solid red;

  &:active::before {
    opacity: 0.1;
  }

  &--large {
    width: 100%;
    height: 50px;
  }

  &--large {
    width: 100%;
    height: 50px;
  }

  &--normal {
    padding: 0 15px;
    font-size: 14px;
  }

  &--small {
    height: 32px;
    padding: 0 8px;
    font-size: 12px;
  }

  &--mini {
    height: 24px;
    padding: 0 4px;
    font-size: 10px;
  }

  &--default {
    changeType(#323233, #fff, #ebedf0);
  }

  &--primary {
    changeType(#fff, #07c160, #07c160);
  }

  &--info {
    changeType(#fff, #1989fa, #1989fa);
  }

  &--danger {
    changeType(#fff, #ee0a24, #ee0a24);
  }

  &--warning {
    changeType(#fff, #ff976a, #ff976a);
  }

  &--plain {
    background-color: #fff;

    .ls-button--default {
      changeType(#ebedf0, #fff, #ebedf0);
    }

    &.ls-button--primary {
      changeType(#07c160, #fff, #07c160);
    }

    &.ls-button--info {
      changeType(#1989fa, #fff, #1989fa);
    }

    &.ls-button--danger {
      changeType(#ee0a24, #fff, #ee0a24);
    }

    &.ls-button--warning {
      changeType(#ff976a, #fff, #ff976a);
    }
  }

  &--hairline {
    // width: 200%;
    // height: 100%;
    // // font-size: ;
    // transform: scale(0.5);
    // line-height: 100%;
    // transform-origin: left top;
  }

  &--text {
    margin-left: 5px;
  }

  &--disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &--square {
    border-radius: 0;
  }

  &--round {
    border-radius: 999px;
  }

  &--block {
    display: block;
  }
}
</style>

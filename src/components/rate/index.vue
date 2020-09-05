<template>
  <div class="rate-container">
    <div class="rate" ref="items" v-for="(item,index) in list" :key="index" @touchstart="onTouchStart($event)" @touchmove="onTouchMove($event)">
      <span :class="['iconfont',item.class]" :style="{width: `${size}px`, color: item.color, fontSize: `${size}px`, marginRight: `${gutter}px`, cursor: disabled ? 'not-allowed' : ''}"></span>
      <span class="half" :class="['iconfont',item.halfClass]" :style="{width: `${size/2}px`,overflow: 'hidden', color: item.halfColor, fontSize: `${size}px`, marginRight: `${gutter}px`, cursor: disabled ? 'not-allowed' : ''}"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 1
    },
    count: {
      type: [String, Number],
      default: 5
    },
    size: {
      type: [String, Number],
      default: 20
    },
    gutter: {
      type: [String, Number],
      default: 0
    },
    color: {
      type: String,
      default: '#ee0a24'
    },
    voidColor: {
      type: String,
      default: '#c8c9cc'
    },
    disabledColor: {
      type: String,
      default: '#c8c9cc'
    },
    icon: {
      type: String,
      default: 'icon-full'
    },
    voidIcon: {
      type: String,
      default: 'icon-empty'
    },
    allowHalf: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    touchable: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      currentValue: this.value,
      oldValue: 0
    }
  },
  computed: {
    list () {
      const fullList = []
      for (let i = 0; i < this.count; i++) {
        fullList.push(this.getRateValue(this.value, i, this.allowHalf))
      }
      return fullList
    }
  },
  methods: {
    getRateValue (value, index, allowHalf) {
      if (Math.floor(value) > index) {
        return {
          class: 'icon-full',
          halfClass: '',
          color: this.disabled ? this.disabledColor : this.color
        }
      }
      if (Math.ceil(value) > index && allowHalf) {
        return {
          class: 'icon-empty',
          halfClass: 'icon-full',
          color: this.voidColor,
          halfColor: this.color
          // color: this.disabled ? this.disabledColor : (this.color)
        }
      }
      return {
        class: 'icon-empty',
        color: this.voidColor
      }
    },
    onTouchStart (event) {
      this.select(event)
    },
    onTouchMove (event) {
      this.select(event)
    },
    select (event) {
      if (this.readonly || this.disabled || !this.touchable) return
      const { clientX } = event.touches[0]
      // console.log(event.touches[0])
      // let left = this.$refs.items.getBoundingClientRect()
      // console.log(left)
      // const s = this.allowHalf
      // const count = clientX / (this.size + Number(this.gutter))
      // this.count * (this.size + Number(this.gutter))
      const count = clientX / this.size
      const floorCount = Math.floor(count)

      if (this.allowHalf && count > floorCount && count < (floorCount + 0.5)) {
        this.currentValue = floorCount + 0.5
      } else {
        this.currentValue = floorCount + 1
      }
      if (this.currentValue < 0) {
        this.currentValue = 0
      }
      if (this.currentValue > this.count) {
        this.currentValue = this.count
      }

      if (this.oldValue !== this.currentValue) {
        this.oldValue = this.currentValue
        this.$emit('input', this.currentValue)
        this.$emit('change', this.currentValue)
      }

    },
    // handleClick (event) {
    //  this.select(event)
    // if (this.readonly && this.disabled) return
    // if (!this.allowHalf && this.index + 1 == this.value) return
    // if (this.allowHalf && this.currentValue > this.value) return
    // }
  }
}
</script>

<style  scoped>
.rate-container {
  display: flex;
}
.rate {
  display: flex;
  flex-direction: column;
  position: relative;
}
.half {
  position: absolute;
  left: 0;
  top: 0;
}
</style>
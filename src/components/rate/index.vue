<template>
  <div class="rate-container" ref="container" @touchmove="onTouchMove($event)">
    <div ref="items" class="rate" v-for="(item,index) in list" :key="index" @touchstart="onTouchStart($event, index)">
      <span :class="['vant-icon',item.class]" :style="{width: `${size}px`, color: item.color, fontSize: `${size}px`, marginRight: `${gutter}px`, cursor: disabled ? 'not-allowed' : ''}"></span>
      <span class="half" :class="['vant-icon',item.halfClass]" :style="{width: `${size/2}px`,overflow: 'hidden', color: item.halfColor, fontSize: `${size}px`, marginRight: `${gutter}px`, cursor: disabled ? 'not-allowed' : ''}"></span>
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
      default: 'van-icon-star'
    },
    voidIcon: {
      type: String,
      default: 'van-icon-star-o'
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
          class: 'van-icon-star',
          halfClass: '',
          color: this.disabled ? this.disabledColor : this.color
        }
      }
      if (Math.ceil(value) > index && allowHalf) {
        return {
          class: 'van-icon-star-o',
          halfClass: 'van-icon-star',
          color: this.voidColor,
          halfColor: this.color
          // color: this.disabled ? this.disabledColor : (this.color)
        }
      }
      return {
        class: 'van-icon-star-o',
        color: this.voidColor
      }
    },
    onTouchStart (event, index) {
      if (this.readonly || this.disabled || !this.touchable) return
      const { clientX } = event.touches[0]
      const left = this.$refs.items[index].getBoundingClientRect().left
      if (this.allowHalf && (clientX - left) <= this.size / 2) {
        this.currentValue = index + 0.5
      } else {
        this.currentValue = index + 1
      }
      this.select(this.currentValue)
    },
    onTouchMove (event) {
      const left = this.$refs.container.getBoundingClientRect().left
      const { clientX } = event.touches[0]
      const c = clientX - left
      const s = parseInt(this.size) + parseInt(this.gutter)
      const count = c / s
      const floorCount = Math.floor(c / s)
      if (this.allowHalf && count > floorCount && count < (floorCount + 0.5)) {
        this.currentValue = floorCount + 0.5
      } else {
        this.currentValue = floorCount + 1
      }
      this.select(this.currentValue)
    },
    select (value) {
      if (this.allowHalf && value < 1) {
        this.currentValue = 0.5
      }
      if (!this.allowHalf && value < 1) {
        this.currentValue = 1
      }
      if (value > this.count) {
        this.currentValue = this.count
      }
      if (this.oldValue !== this.currentValue) {
        this.oldValue = this.currentValue
        this.$emit('input', this.currentValue)
        this.$emit('change', this.currentValue)
      }
    }
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

<template>
  <div class="ls-image" :class="classes" :style="{width: imgWidth, height: imgHeight }">
    <img v-show="src" class="ls-image__img" :style="{objectFit: this.fit}" :src="src" alt="">
    <div v-show="!src" class="ls-image__loading">
      <!-- <slot name="loading"></slot> -->
      <slot v-show="showSlot" name="loading">
        <ls-icon class="ls-image__loading-icon" name="photo"></ls-icon>
      </slot>
    </div>
  </div>
</template>

<script>
import LsIcon from '../icon'

export default {
  components: {
    LsIcon
  },
  props: {
    src: String,
    width: [String, Number],
    height: [String, Number],
    round: Boolean,
    fit: {
      type: String,
      default: 'fill'
    },
    showLoading: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      loading: true,
      showSlot: false
    }
  },
  mounted () {
    console.log(this.loading)
    if (this.loading && this.showLoading) {
      this.showSlot = true
    }
  },
  watch: {
    src () {
      this.loading = false
    }
  },
  computed: {
    classes () {
      return this.round ? 'ls-image__round' : ''
    },
    imgWidth () {
      return !isNaN(Number(this.width)) ? `${this.width}px` : this.width
    },
    imgHeight () {
      return !isNaN(Number(this.height)) ? `${this.height}px` : this.height
    },
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="stylus" scoped>
ls-image-size = 100px;

.ls-image {
  position: relative;
  display: inline-block;

  &__img {
    width: 100%;
    height: 100%;
  }

  &__round {
    border-radius: 50%;
    overflow: hidden;
  }

  &__loading {
    position: absolute;
    top: 0;
    left: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    color: #969799;
    font-size: 14px;
    background-color: #f7f8fa;
    height: 100%;
    width: 100%;

    &-icon {
      color: #dcdee0;
      font-size: 32px;
    }
  }
}
</style>

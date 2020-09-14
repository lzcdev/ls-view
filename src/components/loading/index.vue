<template>
  <div :class="clasess">
    <span :class="iconClasses" :style="{width: `${size}px`, height: `${size}px` }">
      <svg v-if="type === 'circular'" class="ls-loading__circular" viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20" fill="none" :style="{stroke: color}" />
      </svg>
      <template v-if="type === 'spinner'">
        <i v-for="index in 12" :key='index' :style="{'--color': color}"></i>
      </template>
    </span>
    <span class="ls-loading__text" :style="{fontSize: `${size}px`, color: color}">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#c9c9c9',
    },
    type: {
      type: String,
      default: 'circular',
    },
    size: {
      type: [String, Number],
      default: '20',
    },
    vertical: {
      type: Boolean,
      default: false,
    }
  },
  data () {
    return {

    }
  },
  mounted () {

  },
  computed: {
    clasess () {
      return [
        this.vertical ? 'ls-loading--vertical' : '',
        'ls-loading',
        `ls-loading--${this.type}`
      ]
    },
    iconClasses () {
      return [
        'ls-loading__spinner',
        `ls-loading__spinner--${this.type}`
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="stylus" scoped>
loading-spinner-color = #c9c9c9;
loading-spinner-size = 20px;
loading-spinner-animation-duration = 1.5s;
currentColor = #c9c9c9;
padding-xs = 8px;
loading-text-color = #969799;
loading-text-font-size = 14px;

.ls-loading {
  position: relative;
  color: loading-spinner-color;
  font-size: 0;
  display: inline-block;
  vertical-align: middle;

  &__spinner {
    position: relative;
    display: inline-block;
    width: loading-spinner-size;
    max-width: 100%;
    height: loading-spinner-size;
    max-height: 100%;
    vertical-align: middle;
    -webkit-animation: ls-rotate loading-spinner-animation-duration linear infinite;
    animation: ls-rotate loading-spinner-animation-duration linear infinite;

    &--spinner {
      animation-timing-function: steps(12);

      i {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        &::before {
          display: block;
          width: 2px;
          height: 25%;
          margin: 0 auto;
          background-color: var(--color);
          border-radius: 40%;
          content: ' ';
        }
      }
    }

    &--circular {
      animation-duration: 2s;
    }
  }

  &__circular {
    display: block;
    width: 100%;
    height: 100%;

    circle {
      animation: ls-circular 1.5s ease-in-out infinite;
      stroke: currentColor;
      stroke-width: 3;
      stroke-linecap: round;
    }
  }

  &__text {
    display: inline-block;
    margin-left: padding-xs;
    color: loading-text-color;
    font-size: loading-text-font-size;
    vertical-align: middle;
  }

  &--vertical {
    display: inline-flex;
    flex-direction: column;
    align-items: center;

    .ls-loading__text {
      margin: padding-xs 0 0;
    }
  }
}

@keyframes ls-rotate {
  0% {
    transform: rotateZ(0deg);
  }

  100% {
    transform: rotateZ(360deg);
  }
}

@keyframes ls-circular {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40;
  }

  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120;
  }
}

for i in 1 .. 12 {
  .ls-loading__spinner--spinner i:nth-of-type({i}) {
    transform: rotate(i * 30deg);
    opacity: 1 - (0.75 / 12) * (i - 1);
  }
}
</style>

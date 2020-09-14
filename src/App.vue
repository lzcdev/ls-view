<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="stylus">
@import '../src/assets/css/iconfont.styl';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  .demo {
    &_title {
      margin: 15px 0 10px 0;
      font-size: 20px;
      font-weight: 500;
    }

    &_component {
      margin: 4px 10px 4px 0;
    }
  }
}
</style>

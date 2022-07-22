<template>
  <div id="app" >
    <transition name="fade" mode="in-out" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  /*margin-top: 60px;*/
}

html{
  height: 100%;
  width: 100%;
}

body{
  height: 100%;
  width: 100%;
  margin: 0px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter,.fade-leave-active {
  opacity: 0;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

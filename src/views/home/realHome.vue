<template>
  <div>

    <div class="mainBox">
      <div class="header">
        <img width="64" height="64" src="https://avatars.githubusercontent.com/u/74953343?v=4">
        <div>
          L·Z·H
        </div>
      </div>
      <div class="sidebarAndMain">
        <div class="sidebar">
          <div class="sidebar-list" v-for="(items,index) in itemSons" :key="index">
            <div class="sidebar-small-list" >
              <p v-for="(item,key) in items" :key="key">
                {{ item }}
              </p>
            </div>
          </div>

        </div>
        <div class="main">

        </div>
      </div>
    </div>

    <!--  跳转到该页面的跟动画效果，点击后消失  -->
    <RaalHomeAppearance></RaalHomeAppearance>
  </div>
</template>

<script>
import RaalHomeAppearance from "@/components/realHome/raalHomeAppearance";

export default {
  name: "realHome",
  components: {
    RaalHomeAppearance
  },
  data() {
    return {
      itemSons: [
        [1, 3, 8],
        [7, 5, 6, 4],
        [],
        [3, 4],
        [1, 0, 3],
        [8, 2, 6],
        [9],
      ]
    }
  },
  methods: {}


}
</script>

<style scoped>

div {
  display: flex;
}

.mainBox {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header {
  position: fixed;
  padding: 0 15% 0;
  width: 100%;
  align-items: center;
  border-top: 0;
  border-bottom: bisque solid 1px;
  backdrop-filter: saturate(50%) blur(8px);
}

.sidebarAndMain {
  margin-top: 64px;
}

.sidebar {
  display: flex;
  height: 897px;
  width: 20%;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  border-right: bisque 1px solid;
}

.sidebar-list {
  height: 65px;
  width: 200px;
  text-align: left;
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.sidebar-small-list{
  display: inline-block;
}

p {
  padding-left: 100px;
  width: 100%;

}

::-webkit-scrollbar-button {
  height: 1px;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb {
  border-radius: 3px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  background-color: #555;
}

::-webkit-scrollbar {
  width: 16px;
  height: 16px;
  background-color: #F5F5F5;

}
</style>
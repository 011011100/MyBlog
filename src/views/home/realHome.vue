<template>
  <div>

    <div class="mainBox">
      <div class="header" @mousemove="onMousemove" @mouseleave="onMouseleave" :style="{ width:this.width }">
        <img width="64" height="64" src="https://avatars.githubusercontent.com/u/74953343?v=4">
        <div>
          L·Z·H
        </div>
      </div>
      <div class="main">

        <div class="sidebar-list" v-for="(items,index) in itemSons" :key="index">
          <div class="sidebar-small-list">
            <p class="list-p" @click="changClass($event)" v-for="(item,key) in items" :key="key">
              <el-card style="height: 500px">
                {{ item }}
              </el-card>
            </p>
          </div>
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
      width: "10%",
      itemSons: [
        ['', '', '', ''],
        ['', '', ''],
        ['', '', '', ''],
        [''],
        ['', '', ''],
        ['', ''],
      ]
    }
  },
  methods: {
    changClass(event) {
      console.log(event)
    },
    onMousemove() {
      this.width= "100%"
    },
    onMouseleave() {
      this.width= "10%"
    }
  }


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
  justify-content: flex-start;
  align-items: center;
}

.header {
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  border-top: 0;
  border-bottom: bisque solid 3px;
  backdrop-filter: saturate(50%) blur(8px);

  transition: all 0.8s ease;
}

.main {
  width: 70%;
  margin-top: 64px;
  display: flex;
  flex-wrap: wrap;
}

.sidebar-list {
  width: 100%;
  font-size: 50px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.sidebar-small-list {
  width: 100%;
  display: flex;
}

p {
  text-align: center;
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
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
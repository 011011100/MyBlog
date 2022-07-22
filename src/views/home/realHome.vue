<template>
  <div>

    <div class="mainBox">
      <div class="header">
        <img src="https://avatars.githubusercontent.com/u/74953343?v=4">
        <div>
          L·Z·H
        </div>
      </div>
      <div class="sidebarAndMain">
        <div class="sidebar" >
          <div class="sidebarList" v-for="item in items" :key="item">
            {{ item }}
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
  data(){
    return{
      items:[
          1,2,3
      ]
    }
  },
  methods: {

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

}

.header {
  width: 100%;
  align-items: center;
}

.sidebar{
  display: flex;
  flex-direction: column;
}

.sidebarList{
  text-align: center;
  width: 100%;
  height: 150px;
  font-size: 50px;

}

</style>
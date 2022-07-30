<template>
  <div>

    <div class="mainBox" v-show="showMain">
      <!--      @mousemove="onMousemove" @mouseleave="onMouseleave"-->
      <div class="header-placeholder"></div>
      <div class="header" @mousemove="changHeader" @mouseleave="changBackHeader" :style="{ width:this.width }">
        <img width="64" height="64" src="https://avatars.githubusercontent.com/u/74953343?v=4">
        <div>
          L·Z·H
        </div>
      </div>
      <div class="main">
        <div class="sidebar-list" v-for="(items,indexes) in itemSons" :key="indexes">
          <div class="sidebar-small-list" @mouseenter="changText(indexes,index)" @mouseleave="changBackText"
               @click="jockClick"
               v-for="(item,index) in items" :key="index">
            <el-card>
              {{ item }}
            </el-card>
          </div>
        </div>

      </div>
    </div>

    <!--  跳转到该页面的跟动画效果，点击后消失  -->
    <div @click="showMain= true">
      <RaalHomeAppearance></RaalHomeAppearance>
    </div>
  </div>
</template>

<script>
import RaalHomeAppearance from "@/components/realHome/realHomeAppearance";
import Vue from "vue";

export default {
  name: "realHome",
  components: {
    RaalHomeAppearance
  },
  data() {
    return {
      itemSons: [
        ['hello world！', 'XD', '你猜', ''],
        ['', '这是一个让人难受的卡片列表', '(Ю:|||】', '但我猜你没有这么多的精力'],
        ['(@_@)', '要问为什么', '下面要去让强迫症折磨的地方', ''],
        ['', '？', '====>', ''],
      ],
      width: "10%",
      showMain: false,
    }
  },
  methods: {
    changText(indexes, index) {
      if (indexes === 3 && index === 2) {
        Vue.set(this.itemSons[3], 2, "NEXT")
      }
    },
    changBackText() {
      Vue.set(this.itemSons[3], 2, "====>")
    },
    changHeader() {
      this.width = "100%"
    },
    changBackHeader() {
      this.width = "10%"
    },
    delay(i, j) {
      console.log(2)
      Vue.set(this.itemSons[i], j, '啊哈'+ <br></br> +'你上当了')
    },
    jockClick() {
      console.log(1)
      for (let i = 0; i < this.itemSons.length; i++) {
        for (let j = 0; j < this.itemSons[i].length; j++) {
          setTimeout(()=>{
            this.delay(i, j)
          } ,(3*i+j)*100 )

        }
      }
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

.header-placeholder {
  width: 100%;
  height: 64px;
  position: fixed;
  backdrop-filter: saturate(50%) blur(8px);
}

.header {
  font-weight: bolder;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  border-top: 0;
  border-bottom: #7172cc solid 3px;

  transition: all 0.8s ease;
}

.main {
  width: 70%;
  margin-top: 64px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}

.sidebar-list {
  width: 24.5%;
  font-size: 50px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.sidebar-small-list {
  width: 100%;
  margin-bottom: 5px;
  display: flex;
  flex-wrap: wrap;
}

.el-card {
  color: #F5F5F5;
  background: -webkit-linear-gradient(0deg, #8876ff 25%, #5ca6dc);
  width: 100%;
}

</style>
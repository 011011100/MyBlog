<script>
import RaalHomeAppearance from '@/components/realHome/realHomeAppearance'

export default {
  name: 'RealHome',
  components: {
    RaalHomeAppearance,
  },
  data() {
    return {
      itemSons: [
        ['HelloWorld！', 'XD', '你猜', ''],
        [
          '',
          '这是一个让人难受的卡片列表',
          '(Ю:|||】',
          'YES!!!!!!!!',
        ],
        ['(@_@)', '要问为什么', '下面要去让强迫症折磨的地方', ''],
        ['', '？', '====>', ''],
      ],
      width: '10%',
      showMain: false,
    }
  },
  methods: {
    changBeRadius(event) {
      event.target.style.borderRadius = '50px'
    },
    changBackRadius(event) {
      event.target.style.borderRadius = '50px'
    },
    changText(indexes, index) {
      if (indexes === 3 && index === 2)
        this.itemSons[3][2] = 'NEXT'
    },
    changBackText() {
      this.itemSons[3][2] = '====>'
    },
    changHeader() {
      this.width = '100%'
    },
    changBackHeader() {
      this.width = '10%'
    },
    delay(i, j) {
      this.itemSons[i][j] = '啊哈!你上当了!'
    },
    jockClick(indexes, index) {
      if (indexes === 3 && index === 2) {
        for (let i = 0; i < this.itemSons.length; i++) {
          for (let j = 0; j < this.itemSons[i].length; j++) {
            setTimeout(() => {
              this.delay(i, j)
            }, (3 * j + i) * 100)
          }
        }
      }
    },
  },
}
</script>

<template>
  <div>
    <div v-show="showMain" class="mainBox">
      <!--      @mousemove="onMousemove" @mouseleave="onMouseleave"-->
      <div class="header-placeholder" />
      <div
        class="header"
        :style="{ width: width }"
        @mousemove="changHeader"
        @mouseleave="changBackHeader"
      >
        <img
          width="64"
          height="64"
          src="https://avatars.githubusercontent.com/u/74953343?v=4"
        >
        <div>L·Z·H</div>
      </div>
      <div class="main">
        <div
          v-for="(items, indexes) in itemSons"
          :key="indexes"
          class="sidebar-list"
        >
          <div
            v-for="(item, index) in items"
            :key="index"
            class="sidebar-small-list"
            @mousemove="changBeRadius($event)"
            @mouseenter="changText(indexes, index)"
            @mouseleave="changBackText, changBackRadius($event)"
            @click="jockClick(indexes, index)"
          >
            <el-card>
              {{ item }}
            </el-card>
          </div>
        </div>
      </div>
    </div>

    <!--  跳转到该页面的跟动画效果，点击后消失  -->
    <div @click="showMain = true">
      <RaalHomeAppearance />
    </div>
  </div>
</template>

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
  border-radius: 10px;
  color: #f5f5f5;
  background: -webkit-linear-gradient(0deg, #8876ff 25%, #5ca6dc);
  width: 100%;
  transition: all 0.8s ease;
}
</style>

<template>
  <div>
    <div @click="show=!show" style="display: flex;width: 100%; height: 100%;">
      <transition name="el-fade-in-linear" mode="duration" >
        <div v-show="show" class="transition-box" >
          <b>
            WELCOME TO MY<br>
            <div class="countryColor">
              <span class="country">COUNTRY</span>
            </div>
          </b>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "realHome",
  data() {
    return {
      randomList: ["#", "@", "$", "%", "^", "?", "&", "*", "!", "0"],
      show: false,
      titleMsg: "",
      duration:10
    }
  },
  mounted() {
    this.show=!this.show
    this.changTitle()
  },
  methods: {
    scrollTitle() {
      this.titleMsg = ''
      for (let i = 0; i < 6; i++) {
        this.titleMsg += this.randomList[Math.floor(Math.random() * 10)];
        if (i === 2) {
          this.titleMsg += " 欢迎光临 "
        }
      }
      document.title = this.titleMsg
    },
    changTitle() {
      setInterval(this.scrollTitle, 200)
    }
  },
  beforeDestroy() {
    window.clearInterval()
  }

}
</script>

<style scoped>

::v-deep .transition-box {
  top: 0px;
  left: 0;
  height: 100%;
  width: 100%;

  background-color: #409EFF;
  color: #fff8ed;
  font-size: 100px;

  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  margin-right: 20px;
}
.country{
  font-family: Calibri;
  font-size: 190px;
  background: -webkit-linear-gradient(315deg, #fa7bbb 25%, #fc4b4b);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}


</style>
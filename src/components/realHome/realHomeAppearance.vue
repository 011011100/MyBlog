<template>
  <div @mousemove="watchMyMouse">
    <div @click="show = !show" style="display: flex; width: 100%; height: 100%">
      <transition name="el-fade-in-linear" mode="in-out">
        <div v-show="show" class="transition-box">
          <div class="word">
            <b>
              WELCOME TO MY<br />
              <div class="countryColor">
                <span class="country">COUNTRY</span>
              </div>
            </b>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'realHomeAppearance',
  data() {
    return {
      randomList: ['#', '@', '$', '%', '^', '?', '&', '*', '!', '0'],
      show: false,
      titleMsg: '',
      duration: 10,
    }
  },
  mounted() {
    this.show = !this.show
    this.changTitle()
  },
  methods: {
    watchMyMouse(e) {
      let x = e.offsetX //相对元素的X偏移量
      let y = e.offsetY //相对元素的Y偏移量
      let img = document.querySelector('.word')
      let x1 = img.offsetWidth //元素的宽度
      let y1 = img.offsetHeight //元素的高度
      document.querySelector('.word').style.cssText += 'will-change: transform'
      document.querySelector(
        '.word'
      ).style.cssText += `transform:perspective(1000px) rotateY(${
        -(x1 - x) / 40
      }deg) rotateX(${(y1 / 2 - y) / 20}deg) scale3d(1.1,1.1,1.1)`
    },
    scrollTitle() {
      this.titleMsg = ''
      for (let i = 0; i < 6; i++) {
        this.titleMsg += this.randomList[Math.floor(Math.random() * 10)]
        if (i === 2) {
          this.titleMsg += ' 欢迎光临 '
        }
      }
      document.title = this.titleMsg
    },
    changTitle() {
      setInterval(this.scrollTitle, 200)
    },
  },
  beforeUnmount() {
    window.clearInterval()
  },
}
</script>

<style scoped>
::v-deep .transition-box {
  top: 0px;
  left: 0;
  height: 100%;
  width: 100%;
  background: -webkit-linear-gradient(
    318deg,
    #c7defc 1%,
    #409eff,
    #409eff,
    #409eff
  );
  color: #fff8ed;
  font-size: 100px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-right: 20px;
}
.country {
  font-family: Calibri;
  font-size: 190px;
  background: -webkit-linear-gradient(315deg, #fa7bbb 25%, #fc4b4b);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}
</style>

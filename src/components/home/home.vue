<template>
  <div>
    <p>
      这是我独立完成的第一个html页面，很普通。<br>
      但是我希望我以后可以继续完善它<br>
    </p>
    <div class="jump-trap" @click="jumpReal">
      <transition name="el-fade-in-linear">
        <p @mouseenter="this.changShow" v-show="show">NEXT</p>
      </transition>
      <transition name="el-fade-in-linear">
        <p @mouseleave="this.changShow" v-show="!show">====></p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      show: true,
    }
  },
  methods: {
    jumpReal() {
      this.$router.push("/realHome")
    },
    changShow() {
      this.show = !this.show
    }
  }
}
</script>

<style scoped>

div {
  text-align: center;
}

.jump-trap {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20%;
}

.jump-trap p {
  height: 100px;
  width: 400px;
  font-size: 100px;
  color: #ffddb4;
}

span {
  color: #fa2d2d;
  font-size: 30px;
}

</style>
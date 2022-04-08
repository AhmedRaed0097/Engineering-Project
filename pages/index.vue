<template>
  <div class="home-wrapper">
    <v-btn to="/enteries" class="start-btn" outlined>إبدأ</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>
<style lang="scss" >
.home-wrapper {
  width: 100vw;
  height: 100vh;
  // background-image: url('../assets/images/header-image.jpg');
  background-size: cover;
  background-position: center;
  .start-btn {
    
    width: 100px;
    height: 50px;
    // position: absolute;
    // bottom: 160px;
    // right: 126px;
    position: absolute;
    margin: auto;
    top: 63%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 1;
    font-size: 19px;
    font-weight: bold;
    color: #fff;
    background: #00000069;
    border-color: #939393;
  }
}
</style>

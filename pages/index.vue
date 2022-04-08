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
.start-btn {
  width: 120px;
  height: 50px;
  position: relative;
  top: 60vh;
  text-align: center;
  z-index: 1;
  font-size: 19px;
  font-weight: bold;
  color: #fff !important;
  background: #00000069;
  border-color: #939393;
}
</style>

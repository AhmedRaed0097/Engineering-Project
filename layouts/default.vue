<template>
  <v-app>
    <v-app-bar height="70" app class="app-bar">
      <span>
        {{ app_bar_text }}
      </span>
      <img
        width="38"
        v-if="$route.name !== 'index'"
        @click="$router.back()"
        class="back-icon"
        src="../assets/images/back.svg"
        alt=""
      />
    </v-app-bar>

    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      app_bar_text: '',
    }
  },
  watch: {
    '$route.name': {
      handler() {
        if (this.$route.name === 'index') {
          this.app_bar_text = 'الرئيسية'
        } else if (this.$route.name === 'enteries') {
          this.app_bar_text = 'مواصفات المبنى'
        } else if (this.$route.name === 'prices') {
          this.app_bar_text = 'الأسعار'
        } else if (this.$route.name === 'results') {
          this.app_bar_text = 'التكاليف'
        }
      },
    },
  },
  mounted() {},
  created() {
    if (process.client) {
    }
    if (this.$route.name === 'index') {
      this.app_bar_text = 'الرئيسية'
    } else if (this.$route.name === 'enteries') {
      this.app_bar_text = 'مواصفات المبنى'
    } else if (this.$route.name === 'prices') {
      this.app_bar_text = 'الأسعار'
    } else if (this.$route.name === 'results') {
      this.app_bar_text = 'التكاليف'
    }
  },
  beforeCreate() {
    this.$vuetify.rtl = true
  },
}
</script>
<style lang="scss">
* {
  font-family: 'AJannatLT';
}
body {
  direction: rtl;
}
.v-main {
  max-width: 100%;
  margin: 0 auto;
  background-image: url('../assets/images/svg-background.svg');
  background-size: cover;
}
.v-select__selection {
  height: 22px;
  display: flex;
  align-items: center;
}
.app-bar {
  max-height: 80px;
  background: #7b7e87 !important;
  .v-toolbar__content {
    display: flex;
    justify-content: space-between;
  }
  .v-toolbar__content {
    font-size: 27px;
    display: flex;
    align-items: center;
    height: 100% !important;
    color: #fff;
  }
}
.back-icon {
  margin-left: 0px;
}

.v-application--wrap {
  overflow: hidden;
}
</style>

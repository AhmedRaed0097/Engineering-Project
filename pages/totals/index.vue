<template>
  <v-row class="mt-10 mr-2">
    <v-col cols="12">
      <div class="result-container">
        <span class="resulr-title">إجمالي كمية الخرسانة</span>
        <span class="result-value">20</span>
      </div>
    </v-col>
    <v-col cols="12">
      <div class="result-container">
        <span class="resulr-title">إجمالي كمية الحديد</span>
        <span class="result-value">20</span>
      </div>
    </v-col>
    <v-col cols="12">
      <div class="result-container">
        <span class="resulr-title">إجمالي كمية عمال البناء</span>
        <span class="result-value">20</span>
      </div>
    </v-col>
      <v-col cols="12">
          <center>
            <v-btn @click="backToHome" outlined rounded>الرجوع للصحفة الرئيسية </v-btn>
          </center>
        </v-col>
  </v-row>
</template>

<script>
export default {

    methods:{
        backToHome(){
            this.$router.push('/')
        }
    }
}
</script>

<style>
</style>
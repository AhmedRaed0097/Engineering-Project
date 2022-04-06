<template>
  <v-row class="mt-10 mr-2">
    <v-col cols="12">
      <div class="result-container">
        <span class="resulr-title">كمية خرسانة وحديد القواعد</span>
        <span class="result-value">20</span>
      </div>
    </v-col>
    <v-col cols="12">
      <div class="result-container">
        <span class="resulr-title">كمية خرسانة وحديد الرقاب</span>
        <span class="result-value">20</span>
      </div>
    </v-col>
    <v-col cols="12">
      <div class="result-container">
        <span class="resulr-title">كمية خرسانة وحديد الميدة</span>
        <span class="result-value">20</span>
      </div>
    </v-col>
    <v-col cols="12">
      <div class="result-container">
        <span class="resulr-title">كمية خرسانة وحديد الأعمدة</span>
        <span class="result-value">20</span>
      </div>
    </v-col>
    <v-col cols="12">
      <div class="result-container">
        <span class="resulr-title">كمية خرسانة وحديد السقف</span>
        <span class="result-value">20</span>
      </div>
    </v-col>
    <v-col cols="12">
      <div class="result-container">
        <span class="resulr-title">كمية خرسانة وحديد السلم</span>
        <span class="result-value">20</span>
      </div>
    </v-col>
      <v-col cols="12">
          <center>
            <v-btn @click="calculateTotal" outlined rounded>حساب الكمية والتكلفة الإجمالية</v-btn>
          </center>
        </v-col>
  </v-row>
</template>

<script>
export default {

    methods:{
        calculateTotal(){
            this.$router.push('/totals')
        }
    }
}
</script>

<style>
</style>
<template>
  <v-row class="mt-10 mr-2">
    <v-col cols="12">
      <div class="result-container">
        <span class="resulr-title">كمية الخرسانة العادية </span>
        <span class="result-value">{{qtys.normal_concrete_qty}}</span>
      </div>
    </v-col>
    <v-col cols="12">
      <div class="result-container">
        <span class="resulr-title">كمية الخرسانة المسلحة </span>
        <span class="result-value">{{qtys.reinforces_concrete_qty}}</span>

      </div>
    </v-col>
    <v-col cols="12">
      <div class="result-container">
        <span class="resulr-title">كمية الحديد</span>
        <span class="result-value">{{qtys.iron_qty}}</span>

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

  computed:{
    qtys(){
      return this.$store.state.qtys
    }
  },

    methods:{
        calculateTotal(){
            this.$router.push('/totals')
        }
    }
}
</script>

<style>
</style>
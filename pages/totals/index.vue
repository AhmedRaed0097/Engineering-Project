<template>
  <v-row class="mt-10 mr-2">
        <v-col cols="12">
      <div class="result-container">
        <span class="resulr-title">إجمالي تكلفة الخرسانة العادية </span>
        <span class="result-value">{{costs.normal_concrete_cost}}</span>
      </div>
    </v-col>
    <v-col cols="12">
      <div class="result-container">
        <span class="resulr-title">إجمالي تكلفة الخرسانة المسلحة </span>
        <span class="result-value">{{costs.reinforces_concrete_cost}}</span>

      </div>
    </v-col>
    <v-col cols="12">
      <div class="result-container">
        <span class="resulr-title">إجمالي تكلفة الحديد</span>
        <span class="result-value">{{costs.iron_cost}}</span>

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


 computed:{
    costs(){
      return this.$store.state.costs
    }
  },
    methods:{
        backToHome(){
            this.$router.push('/')
        }
    }
}
</script>

<style>
</style>
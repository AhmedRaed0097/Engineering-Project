<template>
  <v-container>

  <v-row class="mt-10 mr-2">
        <v-col cols="12">
      <!-- <div class="result-container">
        <span class="resulr-title">الخرسانة العادية</span>
        <span class="result-value">{{costs.normal_concrete_cost}}</span>
      </div>
    </v-col>
    <v-col cols="12">
      <div class="result-container">
        <span class="resulr-title">الخرسانة المسلحة</span>
        <span class="result-value">{{costs.reinforces_concrete_cost}}</span>

      </div>
    </v-col>
    <v-col cols="12">
      <div class="result-container">
        <span class="resulr-title">الحديد</span>
        <span class="result-value">{{costs.iron_cost}}</span>

      </div> -->
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th>العنصر</th>
                <th>التكلفة الإجمالية</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>خرسانة النظافة للقواعد</td>
                <td>{{costs.normal_concrete_cost}}</td>
              </tr>
              <tr>
                <td>خرسانة المسلحة للقواعد</td>
                <td>{{costs.reinforces_concrete_cost}}</td>
              </tr>
              <tr>
                <td>حديد القواعد</td>
                <td>{{costs.iron_cost}}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
    </v-col>
      <v-col cols="12">
          <center>
            <v-btn class="next-btn" @click="backToHome" outlined >الرجوع للصحفة الرئيسية </v-btn>
          </center>
        </v-col>
  </v-row>
  </v-container>
</template>

<script>
export default {


 computed:{
    costs(){
      return this.$store.state.costs
    },
    enteries(){
      return this.$store.state.enteries
    },
  },
    methods:{
        backToHome(){
            this.$router.push('/')
        }
    },
    created(){
    if(this.enteries === null){
      this.$router.push('/enteries')
    }
    }
}
</script>

<style>
</style>

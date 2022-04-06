<template>
  <v-form ref="form">
    <v-container>
      <v-row class="mt-10">
        <v-col cols="6">
          <v-text-field
          v-model="form.iron_ton"
            label="سعر(طن) الحديد"
            placeholder="سعر (طن) الحديد"
            outlined
            :rules="requiredRules"
          >
          </v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
          v-model="form.concrete"
            label="سعر الخرسانة (م^3)"
            placeholder="سعر الخرسانة (م^3)"
            outlined
            :rules="requiredRules"
          >
          </v-text-field>
        </v-col>
        <v-col cols="6">
              <v-text-field
          v-model="form.blocks"
            label="سعر البلك (هدد)"
            placeholder="سعر البلك (هدد)"
            outlined
            :rules="requiredRules"
          >
          </v-text-field>
        </v-col>
        <v-col cols="6">
                <v-text-field
          v-model="form.cement"
            label="سعر الأسمنت"
            placeholder="سعر الأسمنت"
            outlined
            :rules="requiredRules"
          >
          </v-text-field>
        </v-col>

        <v-col cols="12">
          <center>
            <v-btn @click="sendPrices" outlined rounded>التالي</v-btn>
          </center>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
          iron_ton:'',
          concrete:'',
          blocks:'',
          cement:'',

      },
      requiredRules: [(v) => !!v || 'الحالة مطلوب'],
    }
  },
  methods: {
    sendPrices() {
        if(this.$refs.form.validate()){
         this.$store.dispatch('storePrices',this.form)
         this.$router.push('/results')
        }
    },
  },
  computed:{
    enteries(){
      return this.$store.state.enteries
    },
    prices(){
      return this.$store.state.prices
    }
  },
  created(){
    if(this.enteries === null){
      this.$router.push('/enteries')
    }
    if(this.prices!== null){
      this.form={...this.prices}
    }

  }
}
</script>

<style>
</style>
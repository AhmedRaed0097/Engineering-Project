<template>
  <v-form ref="form" :class="{ 'small-form': $vuetify.breakpoint.smAndDown }">
    <v-container>
      <v-row>
        <v-col cols="12" class="mb-8">
          <h2 class="text-center">الأسعار</h2>
        </v-col>
        <v-col cols="6">
          <v-text-field
            outlined
            v-model.number="form.reinforces_concrete"
            label=" الخرسانة المسلحة (م^3)"
            placeholder=" الخرسانة المسلحة (م^3)"
            :rules="requiredRules"
            color="black"
          >
          </v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            outlined
            v-model.number="form.normal_concrete"
            label="الخرسانة العادية (م^3)"
            placeholder="الخرسانة العادية (م^3)"
            :rules="requiredRules"
            color="black"
          >
          </v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            outlined
            v-model.number="form.iron_ton"
            label="الحديد (طن)"
            placeholder="الحديد (طن)"
            :rules="requiredRules"
            color="black"
          >
          </v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            outlined
            v-model.number="form.blocks"
            label="بلك السقف الهوردي (الحبة)"
            placeholder="بلك السقف الهوردي (الحبة)"
            :rules="requiredRules"
            color="black"
          >
          </v-text-field>
        </v-col>
        <v-col cols="6">
            <v-select
            v-model="form.curency"
            :items="curecesList"
            label="إختر العملة"
            placeholder="إختر العملة"
            outlined
            :rules="fieldNumberRules"
            :no-data-text="'لاتوجد بيانات'"
            color="black"
          >
          </v-select>
        </v-col>

        <v-col cols="12">
          <center>
            <v-btn class="option-btn" @click="sendPrices" outlined shaped
              >حساب الكميات</v-btn
            >
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
        iron_ton: '',
        reinforces_concrete: '',
        normal_concrete: '',
        blocks: '',
        // cement:'',
      },
      curecesList:[
        'ريال سعودي',
        'ريال يمني',
        'درهم إماراتي',
        'ريال قطري',
        'دينار كويتي',
        'دولار امريكي'
      ],
      requiredRules: [
        (v) => !!v || 'الحقل مطلوب',
        (v) => /^(\d+(?:\.\d+)?)$/.test(v) || 'يجب ان يكون المدخل ارقام',
      ],
    }
  },
  methods: {
    sendPrices() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('storePrices', this.form)
        this.$router.push('/results')
      }
    },
  },
  computed: {
    prices() {
      return this.$store.state.prices
    },
    enteries() {
      return this.$store.state.enteries
    },
  },
  created() {
    if (this.enteries === null) {
      this.$router.push('/enteries')
    }
    if (this.prices !== null) {
      this.form = { ...this.prices }
    }
  },
}
</script>

<style lang='scss'>
</style>

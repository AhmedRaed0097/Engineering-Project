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
            v-model="form.reinforces_concrete"
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
            v-model="form.normal_concrete"
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
            v-model="form.iron_ton"
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
            v-model="form.blocks"
            label="البلك (الحبة)"
            placeholder="البلك (الحبة)"
            :rules="requiredRules"
            color="black"
          >
          </v-text-field>
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

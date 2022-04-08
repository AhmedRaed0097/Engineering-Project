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
            label="سعر الخرسانة المسلحة (م^3)"
            placeholder="سعر الخرسانة المسلحة (م^3)"
            :rules="requiredRules"
            color="black"
          >
          </v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            outlined
            v-model="form.normal_concrete"
            label="سعر الخرسانة العادية (م^3)"
            placeholder="سعر الخرسانة العادية (م^3)"
            :rules="requiredRules"
            color="black"
          >
          </v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            outlined
            v-model="form.iron_ton"
            label="سعر(طن) الحديد"
            placeholder="سعر (طن) الحديد"
            :rules="requiredRules"
            color="black"
          >
          </v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            outlined
            v-model="form.blocks"
            label="سعر البلك"
            placeholder="سعر البلك"
            :rules="requiredRules"
            color="black"
          >
          </v-text-field>
        </v-col>

        <v-col cols="12">
          <center>
            <v-btn class="next-btn" @click="sendPrices" outlined shaped
              >التالي</v-btn
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
        (v) => /^\d+$/.test(v) || 'يجب ان يكون المدخل ارقام',
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

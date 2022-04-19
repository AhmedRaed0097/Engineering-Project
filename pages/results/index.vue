<template>
  <v-container>
    <v-row :class="!selectedOption ? 'options-row' : 'mt-6'">
      <v-col cols="12">
        <v-select
          v-model="selectedOption"
          :items="options"
          item-text="title"
          item-value="value"
          label="إختر الإجراء"
          placeholder="إختر الإجراء"
          outlined
          :rules="requiredRules"
          :no-data-text="'لاتوجد بيانات'"
          color="black"
        >
        </v-select>
      </v-col>
    </v-row>
    <bases-table v-if="selectedOption === 'bases'"></bases-table>
    <total-table v-if="selectedOption === 'all'"></total-table>
    <v-row v-if="selectedOption !== null">
      <v-col cols="12">
          <v-btn class="next-btn" @click="backToEnteries" outlined
            >الرجوع لصحفة المدخلات
          </v-btn>
      </v-col>
      <v-col cols="6">
          <v-btn class="next-btn" @click="computeNew" outlined>حساب جديد</v-btn>
      </v-col>
      <v-col cols="6">
          <v-btn class="next-btn" @click="onGeneratePDF" outlined>تحميل PDF</v-btn>
      </v-col>
    </v-row>
    <basesPDF v-if="selectedOption === 'bases'"  @pdfGenerated="onPDFGenerated" :generatePdf="generatePDF"></basesPDF>
    <totalPDF  v-if="selectedOption === 'all'" @pdfGenerated="onPDFGenerated" :generatePdf="generatePDF"></totalPDF>
  </v-container>
</template>

<script>
import basesPDF from '~/components/basesPDF.vue'
import totalPDF from '~/components/totalPDF.vue'
export default {
  components: { basesPDF ,totalPDF},
  data() {
    return {
      generatePDF:false,
      selectedOption: null,
      options: [
        {
          title: 'حساب الكميات والتكلفة للقواعد',
          value: 'bases',
        },
        {
          title: 'حساب إجمالي الكميات والتكلفة',
          value: 'all',
        },
      ],
      requiredRules: [(v) => !!v || 'الحقل مطلوب'],
    }
  },

  methods: {
    onGeneratePDF(){
      this.generatePDF = true
    },
    computeNew() {
      this.$store.commit('CLEARALL')
      this.$router.push('/enteries')
    },
    backToEnteries() {
      this.$router.push('/enteries')
    },
    onPDFGenerated(){
      this.generatePDF = false
    }

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
    if (this.enteries === null || this.prices === null) {
      this.$router.push('/enteries')
    }
  },
}
</script>

<style lang="scss">
.container {
  height: 100%;
  .options-row {
    height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>

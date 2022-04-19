<template>
  <div>
    <vue-html2pdf
      :show-layout="false"
      :float-layout="true"
      :enable-download="true"
      :paginate-elements-by-height="1400"
      :filename="filename"
      :pdf-quality="2"
      :manual-pagination="false"
      pdf-format="a4"
      pdf-orientation="landscape"
      pdf-content-width="100%"
      @progress="onProgress($event)"
      ref="totalPdf"
    >
      <section slot="pdf-content">
        <center>
          <v-row>
            <v-col cols="12">
              <h3 class="text-center mb-5">
                مساحة الدور المتكرر {{ totalArea }} م^2
              </h3>
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
                      <td>{{ costs.normal_concrete_cost }}</td>
                    </tr>
                    <tr>
                      <td>خرسانة المسلحة للقواعد</td>
                      <td>{{ costs.reinforces_concrete_cost }}</td>
                    </tr>
                    <tr>
                      <td>حديد القواعد</td>
                      <td>{{ costs.iron_cost }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
          </v-row>
        </center>
      </section>
    </vue-html2pdf>
    <v-overlay :value="showProgress">
      <div>
        <p>جارٍ التزيل...</p>
        <v-progress-linear :value="progressValue"></v-progress-linear>
      </div>
    </v-overlay>
  </div>
</template>

<script>
export default {
  props: {
    generatePdf: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      filename: '',
      showProgress: false,
      progressValue: 0,
    }
  },
  watch: {
    generatePdf(val) {
      if (val === true) {
        this.generateReport()
      }
    },
  },
  computed: {
    totalArea() {
      return this.$store.state.total_area
    },
    costs() {
      return this.$store.state.costs
    },
    enteries() {
      return this.$store.state.enteries
    },
  },
  methods: {
    async generateReport() {
      await this.$refs.totalPdf.generatePdf()
      this.$emit('pdfGenerated')

    },
     onProgress(e) {
      if (e === 100) {
        this.progressValue = e
        setTimeout(() => {
          this.showProgress = false

        }, 500);
      } else {
        this.showProgress = true
        this.progressValue = e
      }
    },
  },
  mounted() {
    const date = new Date()
    this.filename = `(الإجمالي)تقرير جديد ${date}`
  },
}
</script>
<style></style>

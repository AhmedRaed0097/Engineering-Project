<template>
  <div>
    <vue-html2pdf
      :show-layout="false"
      :float-layout="true"
      :enable-download="true"
      :preview-modal="false"
      :paginate-elements-by-height="1400"
      :filename="filename"
      :pdf-quality="2"
      :manual-pagination="false"
      pdf-format="a4"
      pdf-orientation="landscape"
      pdf-content-width="100%"
      @progress="onProgress($event)"
      ref="basesPdf"
    >
      <section slot="pdf-content">
        <center>
          <v-row>
            <v-col cols="12" class="mb-10">
              <h3 class="text-center mb-10">
                مساحة الدور المتكرر {{ totalArea }} م^2
              </h3>
              <br />
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th>العنصر</th>
                      <th>الكمية</th>
                      <th>الوحدة</th>
                      <th>سعر الوحدة</th>
                      <th>التكلفة الإجمالية</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>كمية الخرسانة للأسقف</td>
                      <td>{{ qtys.roof_concrete_qty }}</td>
                      <td>م^3</td>
                      <td>{{ prices.normal_concrete }}</td>
                      <td>{{ costs.roof_concrete_cost }}</td>
                    </tr>
                    <tr>
                      <td>كمية الحديد للأسقف</td>
                      <td>{{ qtys.roof_iron_qty }}</td>
                      <td>طن</td>
                      <td>{{ prices.iron_ton }}</td>
                      <td>{{ costs.roof_iron_cost }}</td>
                    </tr>
                    <tr>
                      <td>كمية خرسانة الجسور</td>
                      <td>{{ qtys.bridge_concrete_qty }}</td>
                      <td>م^3</td>
                      <td>{{ prices.normal_concrete }}</td>
                      <td>{{ costs.bridge_concrete_cost }}</td>
                    </tr>
                    <tr>
                      <td>كمية حديد الجسور</td>
                      <td>{{ qtys.reinforces_concrete_qty }}</td>
                      <td>م^3</td>
                      <td>{{ prices.normal_concrete }}</td>
                      <td>{{ costs.bridge_iron_cost }}</td>
                    </tr>
                    <tr>
                      <td>كمية خرسانة البلاطة</td>
                      <td>{{ qtys.slab_concrete_qty }}</td>
                      <td>م^3</td>
                      <td>{{ prices.normal_concrete }}</td>
                      <td>{{ costs.iron_cost }}</td>
                    </tr>
                    <tr>
                      <td>كمية حديد البلاطة</td>
                      <td>{{ qtys.iron_qty }}</td>
                      <td>طن</td>
                      <td>{{ prices.iron_ton }}</td>
                      <td>{{ costs.iron_cost }}</td>
                    </tr>
                    <tr>
                      <td>كمية البلك الهوردي</td>
                      <td>{{ qtys.iron_qty }}</td>
                      <td>طن</td>
                      <td>{{ prices.iron_ton }}</td>
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
    qtys() {
      return this.$store.state.qtys
    },
    prices() {
      return this.$store.state.prices
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
      await this.$refs.basesPdf.generatePdf()
      this.$emit('pdfGenerated')
    },
    onProgress(e) {
      if (e === 100) {
        this.progressValue = e
        setTimeout(() => {
          this.showProgress = false
        }, 500)
      } else {
        this.showProgress = true
        this.progressValue = e
      }
    },
  },
  mounted() {
    const date = new Date()
    this.filename = `(للأسقف)تقرير جديد ${date}`
  },
}
</script>

<style></style>

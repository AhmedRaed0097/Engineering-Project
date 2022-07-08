<template>
  <div>
    <vue-html2pdf
      :show-layout="true"
      :float-layout="false"
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
          <v-row>
            <v-col cols="11" class="mb-10">
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
                      <td>خرسانة الجسور</td>
                      <td>{{ qtys.bridge_concrete_qty }}</td>
                      <td>م^3</td>
                      <td>{{ prices.reinforces_concrete }}</td>
                      <td>{{ costs.bridge_concrete_cost }}</td>
                    </tr>
                    <tr>
                      <td>حديد الجسور</td>
                      <td>{{ qtys.bridge_iron_qty }}</td>
                      <td>طن</td>
                      <td>{{ prices.iron_ton }}</td>
                      <td>{{ costs.bridge_iron_cost }}</td>
                    </tr>
                    <tr>
                      <td>خرسانة البلاطة</td>
                      <td>{{ qtys.slab_concrete_qty }}</td>
                      <td>م^3</td>
                      <td>{{ prices.reinforces_concrete }}</td>
                      <td>{{ costs.slab_concrete_cost }}</td>
                    </tr>
                    <tr>
                      <td>حديد البلاطة</td>
                      <td>{{ qtys.slab_iron_qty }}</td>
                      <td>طن</td>
                      <td>{{ prices.iron_ton }}</td>
                      <td>{{ costs.slab_iron_cost }}</td>
                    </tr>
                    <tr>
                      <td>البلك الهوردي</td>
                      <td>{{ qtys.block_qty }}</td>
                      <td>بلكة</td>
                      <td>{{ prices.blocks }}</td>
                      <td>{{ costs.block_cost }}</td>
                    </tr>
                    <tr>
                      <td>إجمالي الخرسانة للسقف</td>
                      <td>{{ qtys.roof_concrete_qty }}</td>
                      <td>م^3</td>
                      <td>{{ prices.reinforces_concrete }}</td>
                      <td>{{ costs.roof_concrete_cost }}</td>
                    </tr>
                    <tr>
                      <td>إجمالي الحديد للسقف</td>
                      <td>{{ qtys.roof_iron_qty }}</td>
                      <td>طن</td>
                      <td>{{ prices.iron_ton }}</td>
                      <td>{{ costs.roof_iron_cost }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
          </v-row>
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
      this.filename = `(للأسقف)تقرير جديد ${new Date()
        .getTime()
        .toString()
        .slice(new Date().getTime().toString().length / 2)}`

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
    this.filename = `(للأسقف)تقرير جديد ${new Date()
      .getTime()
      .toString()
      .slice(new Date().getTime().toString().length / 2)}`
  },
}
</script>

<style></style>

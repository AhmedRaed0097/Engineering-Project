<template>
  <div>
    <vue-html2pdf
      :show-layout="false"
      :float-layout="true"
      :enable-download="true"
      :preview-modal="true"
      :paginate-elements-by-height="1400"
      filename="hee hee"
      :pdf-quality="2"
      :manual-pagination="false"
      pdf-format="a4"
      pdf-orientation="landscape"
      pdf-content-width="800px"
      @progress="onProgress($event)"
      ref="html2Pdf"
    >
      <!--
        @hasStartedGeneration="hasStartedGeneration()"
        @hasGenerated="hasGenerated($event)" -->
      <section slot="pdf-content">
        <!-- PDF Content Here -->
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          voluptatum blanditiis nesciunt quae accusantium cupiditate nobis,
          laboriosam quaerat eveniet cumque maxime odio minus impedit ea sit non
          est quod natus.
        </p>
      </section>
    </vue-html2pdf>
    <v-btn class="start-btn" @click="generateReport" outlined>تحميل</v-btn>

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
  data() {
    return {
      showProgress: false,
      progressValue: 0,
    }
  },
  methods: {
    generateReport() {
      console.log(this.$refs.html2Pdf)
      this.$refs.html2Pdf.generatePdf()
    },
    onProgress(e) {
      if (e === 100) {
        this.showProgress = false
      } else {
        this.showProgress = true
        this.progressValue = e
      }
    },
  },
}
</script>

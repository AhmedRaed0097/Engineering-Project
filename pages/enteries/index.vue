<template>
  <v-form ref="form" :class="{ 'small-form': $vuetify.breakpoint.smAndDown }">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 class="text-center">مواصفات المبنى</h2>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model.number="form.height"
            label="الطول"
            placeholder="الطول"
            outlined
            :rules="fieldNumberRules"
            color="black"
          >
          </v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model.number="form.width"
            label="العرض"
            placeholder="العرض"
            outlined
            :rules="fieldNumberRules"
            color="black"
          >
          </v-text-field>
        </v-col>
        <v-col cols="6">
          <v-select
            v-model="form.projection_number"
            :items="projections_number"
            label="عدد البروزات"
            placeholder="عدد البروزات"
            outlined
            :rules="fieldNumberRules"
            :no-data-text="'لاتوجد بيانات'"
            color="black"
          >
          </v-select>
        </v-col>
        <v-col cols="6">
          <v-select
            v-model="form.projections_size"
            :items="projections_size"
            label="مساحة البروز (متر)"
            placeholder="مساحة البروز (متر)"
            outlined
            :rules="fieldNumberRules"
            :no-data-text="'لاتوجد بيانات'"
            color="black"
          >
          </v-select>
        </v-col>
        <v-col cols="6">
          <v-select
            v-model="form.floor_number"
            :items="floors_number"
            label="عدد الأدوار"
            placeholder="عدد الأدوار"
            outlined
            :rules="fieldNumberRules"
            :no-data-text="'لاتوجد بيانات'"
            color="black"
          >
          </v-select>
        </v-col>

        <v-col cols="6">
          <v-select
            v-model="form.soil_type"
            :disabled="form.floor_number === null ? true : false"
            :items="soil_types"
            item-text="title"
            item-value="value"
            label="نوع التربة"
            placeholder="نوع التربة"
            outlined
            :rules="requiredRules"
            :no-data-text="'لاتوجد بيانات'"
            color="black"
          >
          </v-select>
        </v-col>
        <v-col cols="6">
          <v-select
            v-model="form.roof_type"
            :items="roof_types"
            item-text="title"
            item-value="value"
            label="نوع السقف"
            placeholder="نوع السقف"
            outlined
            :rules="requiredRules"
            :no-data-text="'لاتوجد بيانات'"
            color="black"
          >
          </v-select>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model.number="form.floor_area"
            label="مساحة الدور المتكرر (إختياري)"
            placeholder="مساحة الدور المتكرر (إختياري)"
            outlined
            hide-details
            color="black"
          >
          </v-text-field>
          <small :class="{ 'small-text': $vuetify.breakpoint.mdAndDown }">
            <strong>
              في حالة عدم إدخال مساحة الدور المتكرر سيتم حسابها من المدخلات
            </strong>
          </small>
        </v-col>
        <v-col cols="12">
          <center>
            <v-btn class="option-btn" @click="sendEnteries" outlined shaped
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
        projection_size: 0,
        projection_number: '',
        floor_number: null,
        floor_area: null,
        roof_type: '',
        soil_type: '',
        height: '',
        width: '',
      },
      projections_size: [1, 1.2, 1.4, 1.6],
      projections_number: [1, 2, 3, 4],
      floors_number: [2, 3, 4, 5],
      soil_types: [
        {
          title: 'قوية',
          value: 'strong',
        },
        {
          title: 'متوسطة',
          value: 'intermediate',
        },
        {
          title: 'ضعيفة',
          value: 'weak',
        },
      ],
      roof_types: [
        {
          title: 'هوردي',
          value: 'hordy',
        },
      ],
      roof_types: [
        {
          title: 'هوردي',
          value: 'hordy',
        },
      ],
      fieldNumberRules: [
        (v) => !!v || 'الحقل مطلوب',
        (v) => /^(\d+(?:\.\d+)?)$/.test(v) || 'يجب ان يكون المدخل ارقام',
      ],
      requiredRules: [(v) => !!v || 'الحقل مطلوب'],
    }
  },
  watch: {
    'form.floor_number'(val) {
      if (val === 4) {
        this.soil_types = [
          {
            title: 'متوسطة',
            value: 'intermediate',
          },
        ]
      } else if (val === 5) {
        this.soil_types = [
          {
            title: 'قوية',
            value: 'strong',
          },
          {
            title: 'متوسطة',
            value: 'intermediate',
          },
        ]
      } else {
        this.soil_types = [
          {
            title: 'قوية',
            value: 'strong',
          },
          {
            title: 'متوسطة',
            value: 'intermediate',
          },
          {
            title: 'ضعيفة',
            value: 'weak',
          },
        ]
      }
    },
  },
  computed: {
    enteries() {
      return this.$store.state.enteries
    },
  },
  methods: {
    sendEnteries() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('storeEnteries', this.form)
        this.$router.push('/prices')
      }
    },
  },
  created() {
    if (this.enteries !== null) {
      this.form = { ...this.enteries }
    }
  },
}
</script>

<style>
</style>

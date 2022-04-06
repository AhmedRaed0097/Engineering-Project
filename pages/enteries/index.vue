<template>
  <v-form ref="form">
    <v-container>
      <v-row class="mt-10">
        <v-col cols="6">
          <v-text-field
          v-model="form.height"
            label="الطول"
            placeholder="الطول"
            outlined
            :rules="requiredRules"
          >
          </v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
          v-model="form.width"
            label="العرض"
            placeholder="العرض"
            outlined
            :rules="requiredRules"
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
            :rules="requiredRules"
            :no-data-text="'لاتوجد بيانات'"
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
            :rules="requiredRules"
            :no-data-text="'لاتوجد بيانات'"
          >
          </v-select>
        </v-col>

        <v-col cols="6">
          <v-select
          v-model="form.soil_type"
          :items="soil_types"
          item-text="title"
          item-value="value"
            label="نوع التربة"
            placeholder="نوع التربة"
            outlined
            :rules="requiredRules"
            :no-data-text="'لاتوجد بيانات'"
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
          >
          </v-select>
        </v-col>
        <v-col cols="12">
          <center>
            <v-btn @click="sendEnteries" outlined rounded>التالي</v-btn>
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
          projection_number:'',
          floor_number:'',
          roof_type:'',
          soil_type:'',
          height:'',
          width:'',

      },
      projections_number:[1,2,3,4],
      floors_number:[1,2,3,4,5],
      soil_types:[
          {
              title:'قوية',
              value:'strong'
          },
          {
              title:'متوسطة',
              value:'intermediate'
          },
          {
              title:'ضعيفة',
              value:'weak'
          }
      ],
      roof_types:[
          {
              title:'هردي',
              value:'hordy'
          },
          {
            title:'عادي ',
            value:'normal'
          }
      ],
      requiredRules: [(v) => !!v || 'الحالة مطلوب'],
    }
  },
  methods: {
    sendEnteries() {
        if(this.$refs.form.validate()){
         this.$store.dispatch('storeEnteries',this.form)
         this.$router.push('/prices')
        }
    },
  },
}
</script>

<style>
</style>
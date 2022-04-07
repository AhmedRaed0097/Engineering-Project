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
          :disabled="form.floor_number === null ? true : false"
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
          floor_number:null,
          roof_type:'',
          soil_type:'',
          height:'',
          width:'',

      },
      projections_number:[1,2,3,4],
      floors_number:[3,4,5],
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
              title:'هوردي',
              value:'hordy'
          }
      ],
      requiredRules: [(v) => !!v || 'الحالة مطلوب'],
    }
  },
  watch:{
    'form.floor_number'(val){
      if(val === 4){
        this.soil_types = [
            
           {
              title:'متوسطة',
              value:'intermediate'
          },
        ]
      }else if(val === 5){
        this.soil_types = [
           {
              title:'قوية',
              value:'strong'
          },
           {
              title:'متوسطة',
              value:'intermediate'
          },
        ]
      }else{
        this.soil_types = [
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
        ]
      }
    }
  },
    computed:{
    enteries(){
      return this.$store.state.enteries
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
    created(){
    if(this.enteries!== null){
      this.form={...this.enteries}
    }

  }
}
</script>

<style>
</style>
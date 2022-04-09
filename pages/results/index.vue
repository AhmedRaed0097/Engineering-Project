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
        <center>
          <v-btn class="next-btn" @click="backToEnteries" outlined
            >الرجوع للصحفة المدخلات
          </v-btn>
        </center>
      </v-col>
      <v-col cols="12">
        <center>
          <v-btn class="next-btn" @click="computeNew" outlined>حساب جديد</v-btn>
        </center>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
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
    computeNew() {
      this.$store.commit('CLEARALL')
      this.$router.push('/enteries')
    },
    backToEnteries() {
      this.$router.push('/enteries')
    },
  },
  created() {
    if (this.enteries === null) {
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

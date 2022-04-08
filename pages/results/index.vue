<template>
  <v-container>
    <v-row class="mt-10 mr-2">
      <v-col cols="12">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th>العنصر</th>
                <th>الكمية</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>كمية الخرسانة العادية</td>
                <td>{{ qtys.normal_concrete_qty }}</td>
              </tr>
              <tr>
                <td>كمية الخرسانة المسلحة</td>
                <td>{{ qtys.reinforces_concrete_qty }}</td>
              </tr>
              <tr>
                <td>كمية الحديد</td>
                <td>{{ qtys.iron_qty }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>

      <v-col cols="12">
        <center>
          <v-btn class="next-btn" @click="calculateTotal" outlined>
            حساب التكلفة الإجمالية
          </v-btn>
        </center>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    qtys() {
      return this.$store.state.qtys
    },
    enteries() {
      return this.$store.state.enteries
    },
  },

  methods: {
    calculateTotal() {
      this.$router.push('/totals')
    },
  },
  created() {
    if (this.enteries === null) {
      this.$router.push('/enteries')
    }
  },
}
</script>

<style>
</style>

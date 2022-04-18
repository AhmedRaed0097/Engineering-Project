<template>
  <v-row>
    <v-col cols="12">
      <h3 class="text-center mb-5">مساحة الدور المتكرر {{ totalArea }} م^2</h3>
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
              <td>خرسانة النظافة للقواعد</td>
              <td>{{ qtys.normal_concrete_qty }}</td>
              <td>م^3</td>
              <td>{{ prices.normal_concrete }}</td>
              <td>{{ costs.normal_concrete_cost }}</td>
            </tr>
            <tr>
              <td>خرسانة المسلحة للقواعد</td>
              <td>{{ qtys.reinforces_concrete_qty }}</td>
              <td>م^3</td>
              <td>{{ prices.reinforces_concrete }}</td>
              <td>{{ costs.reinforces_concrete_cost }}</td>
            </tr>
            <tr>
              <td>حديد القواعد</td>
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

</template>

<script>
export default {
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
}
</script>

<style>
</style>

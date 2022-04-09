<template>
  <v-row>
    <v-col cols="12">
      <h3 class="text-center mb-5">مساحة الدور المتكرر {{ totalArea }} م^2</h3>
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
</template>

<script>
export default {
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
}
</script>

<style>
</style>

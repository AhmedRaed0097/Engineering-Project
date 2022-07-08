export const state = () => ({
  reinforces_concrete_qty_factor: null,
  normal_concrete_qty_factor: null,
  iron_qty_factor: null,
  total_area: null,
  enteries: null,
  prices: null,
  // الإخراجات(الكميات)
  qtys: {
    bases_reinforces_concrete_qty: null,
    bases_normal_concrete_qty: null,
    roof_concrete_qty: null,
    slab_concrete_qty: null,
    slab_iron_qty: null,
    // كمية خرسانة الجسور
    bridge_concrete_qty: null,
    bridge_iron_qty: null,
    roof_iron_qty: null,
    bases_iron_qty: null,
    block_qty: null,
  },
  costs: {
    bases_reinforces_concrete_cost: null,
    bases_normal_concrete_cost: null,
    roof_concrete_cost: null,
    roof_iron_cost: null,
    bases_iron_cost: null,
    bridge_concrete_cost: null,
    bridge_iron_cost: null,
    slab_concrete_cost: null,
    slab_iron_cost: null,
    block_cost: null,

  },
})

export const mutations = {
  STOREENTERIES(state, payload) {
    state.enteries = payload
    if (payload.projection_number === 1) {
      state.total_area =
        ((payload.width + payload.projections_size) * payload.height).toFixed(2)
    } else if (payload.projection_number === 2) {
      state.total_area =
        ((payload.width + payload.projections_size) *
          (payload.height + payload.projections_size)).toFixed(2)
    } else if (payload.projection_number === 3) {
      state.total_area =
        ((payload.width + payload.projections_size) *
          (payload.height + 2 * payload.projections_size)).toFixed(2)
    } else if (payload.projection_number === 4) {
      state.total_area =
        ((payload.width + 2 * payload.projections_size) *
          (payload.height + 2 * payload.projections_size)).toFixed(2)
    }

    // ================= 3 FLOOR ============================

    if (payload.floor_number == 3 && payload.soil_type == 'weak') {
      state.reinforces_concrete_qty_factor = 0.195
      state.normal_concrete_qty_factor = 0.04
      state.iron_qty_factor = 0.082
    } else if (
      payload.floor_number == 3 &&
      payload.soil_type == 'intermediate'
    ) {
      state.reinforces_concrete_qty_factor = 0.134
      state.normal_concrete_qty_factor = 0.025
      state.iron_qty_factor = 0.08
    } else if (payload.floor_number == 3 && payload.soil_type == 'strong') {
      state.reinforces_concrete_qty_factor = 0.099
      state.normal_concrete_qty_factor = 0.028
      state.iron_qty_factor = 0.08
    }
    // =============== //3FLOOR  ===========================

    // ================= 4 FLOOR ============================
    else if (payload.floor_number == 4 && payload.soil_type == 'intermediate') {
      state.reinforces_concrete_qty_factor = 0.225
      state.normal_concrete_qty_factor = 0.046
      state.iron_qty_factor = 0.07
    }

    // ================= //4 FLOOR =========================

    // ================= 5 FLOOR =========================
    else if (payload.floor_number == 5 && payload.soil_type == 'intermediate') {
      state.reinforces_concrete_qty_factor = 0.27
      state.normal_concrete_qty_factor = 0.052
      state.iron_qty_factor = 0.07
    } else if (payload.floor_number == 5 && payload.soil_type == 'strong') {
      state.reinforces_concrete_qty_factor = 0.166
      state.normal_concrete_qty_factor = 0.037
      state.iron_qty_factor = 0.07
    }

    // ================= //5 FLOOR =========================

    // ===================== COMPUTE qtys ===================================

    state.qtys.bases_reinforces_concrete_qty = parseFloat((
      state.reinforces_concrete_qty_factor * state.total_area
    ).toFixed(2))
    state.qtys.bases_normal_concrete_qty = parseFloat((
      state.normal_concrete_qty_factor * state.total_area
    ).toFixed(2))
    state.qtys.bases_iron_qty = parseFloat((
      state.iron_qty_factor * state.qtys.bases_reinforces_concrete_qty
    ).toFixed(2))

    // ===================== COMPUTE roofs qtys ===================================
    // حساب كمية الخرسانة للأسقف
    if (
      state.total_area <= 150 ||
      (state.total_area >= 150 && state.total_area < 250)
    ) {
      state.qtys.roof_concrete_qty = (0.212 * state.total_area).toFixed(2)
    } else if (
      state.total_area >= 250 &&
      state.total_area < 400
    ) {
      state.qtys.roof_concrete_qty = (0.222 * state.total_area).toFixed(2)
    } else if (state.total_area >= 400) {
      state.qtys.roof_concrete_qty = (0.233 * state.total_area).toFixed(2)
    }

    // حساب كمية الحديد للأسقف
    if (
      state.total_area <= 150 ||
      (state.total_area >= 150 && state.total_area < 250)
    ) {
      state.qtys.roof_iron_qty = (0.14 * state.qtys.roof_concrete_qty).toFixed(2)
    } else if (
      state.total_area >= 250 &&
      state.total_area < 400
    ) {
      state.qtys.roof_iron_qty = (0.142 * state.qtys.roof_concrete_qty).toFixed(2)
    } else if (state.total_area >= 400) {
      state.qtys.roof_iron_qty = (0.162 * state.qtys.roof_concrete_qty).toFixed(2)
    }

    // حساب كمية خرسانة الجسور

    if (
      state.total_area <= 150 ||
      (state.total_area >= 150 && state.total_area < 250)
    ) {
      state.qtys.bridge_concrete_qty = (0.67 * state.qtys.roof_concrete_qty).toFixed(2)
    } else if (
      state.total_area >= 250 &&
      state.total_area < 400
    ) {
      state.qtys.bridge_concrete_qty = (0.69 * state.qtys.roof_concrete_qty).toFixed(2)
    } else if (state.total_area >= 400) {
      state.qtys.bridge_concrete_qty = (0.72 * state.qtys.roof_concrete_qty).toFixed(2)
    }

    // حساب كمية خرسانة البلاطة

    if (
      state.total_area <= 150 ||
      (state.total_area >= 150 && state.total_area < 250)
    ) {
      state.qtys.slab_concrete_qty = (0.33 * state.qtys.roof_concrete_qty).toFixed(2)
    } else if (
      state.total_area >= 250 &&
      state.total_area < 400
    ) {
      state.qtys.slab_concrete_qty = (0.31 * state.qtys.roof_concrete_qty).toFixed(2)
    } else if (state.total_area >= 400) {
      state.qtys.slab_concrete_qty = (0.28 * state.qtys.roof_concrete_qty).toFixed(2)
    }

    // حساب كمية حديد الجسور

    if (
      state.total_area <= 150 ||
      (state.total_area >= 150 && state.total_area < 250)
    ) {
      state.qtys.bridge_iron_qty = (0.65 * state.qtys.roof_iron_qty).toFixed(2)
    } else if (
      state.total_area >= 250 &&
      state.total_area < 400
    ) {
      state.qtys.bridge_iron_qty = (0.68 * state.qtys.roof_iron_qty).toFixed(2)
    } else if (state.total_area >= 400) {
      state.qtys.bridge_iron_qty = (0.28 * state.qtys.roof_iron_qty).toFixed(2)
    }

    // حساب كمية حديد البلاطة

    if (
      state.total_area <= 150 ||
      (state.total_area >= 150 && state.total_area < 250)
    ) {
      state.qtys.slab_iron_qty = (0.35 * state.qtys.roof_iron_qty).toFixed(2)
    } else if (
      state.total_area >= 250 &&
      state.total_area < 400
    ) {
      state.qtys.slab_iron_qty = (0.32 * state.qtys.roof_iron_qty).toFixed(2)
    } else if (state.total_area >= 400) {
      state.qtys.slab_iron_qty = (0.27 * state.qtys.roof_iron_qty).toFixed(2)
    }

    // حساب كمية البلك الهوردي
    if (
      state.total_area <= 150 ||
      (state.total_area >= 150 && state.total_area < 250)
    ) {
      state.qtys.block_qty = ((0.088 * state.total_area) / 0.016).toFixed(2)
    } else if (
      state.total_area >= 250 &&
      state.total_area < 400
    ) {
      state.qtys.block_qty = ((0.078 * state.total_area) / 0.016).toFixed(2)
    } else if (state.total_area >= 400) {
      state.qtys.block_qty = ((0.067 * state.total_area) / 0.016).toFixed(2)
    }
  },
  STOREPRICES(state, payload) {
    state.prices = payload

    // =========================   حساب تكاليف القواعد    ===========================
    state.costs.bases_reinforces_concrete_cost = parseFloat((
      state.qtys.bases_reinforces_concrete_qty * payload.reinforces_concrete
    ).toFixed(2))

    state.costs.bases_normal_concrete_cost = parseFloat((
      state.qtys.bases_normal_concrete_qty * payload.normal_concrete
    ).toFixed(2))

    state.costs.bases_iron_cost = parseFloat((
      state.qtys.bases_iron_qty * payload.iron_ton
    ).toFixed(2))
    // =================================================================================



    // =========================   حساب تكاليف الأسقف    ===========================
    // خرسانة الاسقف
    state.costs.roof_concrete_cost = parseFloat((state.qtys.roof_concrete_qty * payload.reinforces_concrete)).toFixed(2)
    // حديد الاسقف
    state.costs.roof_iron_cost = parseFloat((state.qtys.roof_iron_qty * payload.iron_ton)).toFixed(2)

    // خرسانة الجسور  
    state.costs.bridge_concrete_cost = parseFloat((state.qtys.bridge_concrete_qty * payload.reinforces_concrete)).toFixed(2)

    // حديد الجسور  
    state.costs.bridge_iron_cost = parseFloat((state.qtys.bridge_iron_qty * payload.iron_ton)).toFixed(2)


    // خرسانة البلاطة  
    state.costs.slab_concrete_cost = parseFloat((state.qtys.slab_concrete_qty * payload.reinforces_concrete)).toFixed(2)

    // حديد البلاطة  
    state.costs.slab_iron_cost = parseFloat((state.qtys.slab_iron_qty * payload.iron_ton)).toFixed(2)

    // البلك الهوردي  
    state.costs.block_cost = parseFloat((state.qtys.block_qty * payload.blocks)).toFixed(2)



    // =================================================================================



  },
  CLEARALL(state) {
    state.reinforces_concrete_qty_factor = null
    state.normal_concrete_qty_factor = null
    state.iron_qty_factor = null
    state.total_area = null

    for (const key in state.enteries) {
      state.enteries[key] = null
    }
    for (const key in state.prices) {
      state.prices[key] = null
    }
    for (const key in state.qtys) {
      state.qtys[key] = null
    }
    for (const key in state.costs) {
      state.costs[key] = null
    }
  },
}
export const actions = {
  storeEnteries({ commit }, payload) {
    commit('STOREENTERIES', payload)
  },
  storePrices({ commit }, payload) {
    commit('STOREPRICES', payload)
  },
}

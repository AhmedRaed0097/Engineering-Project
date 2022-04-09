export const state = () => ({
    reinforces_concrete_qty_factor: null,
    normal_concrete_qty_factor: null,
    iron_qty_factor: null,
    total_area: null,
    enteries: null,
    prices: null,
    // الإخراجات(الكميات)
    qtys: {
        reinforces_concrete_qty: null,
        normal_concrete_qty: null,
        iron_qty: null,
    },
    costs: {
        reinforces_concrete_cost: null,
        normal_concrete_cost: null,
        iron_cost: null,
    }
})

export const mutations = {
    STOREENTERIES(state, payload) {
        state.enteries = payload
        state.total_area = ((parseFloat(payload.width) + payload.projection_number) * parseFloat(payload.height))

        // ================= 3 FLOOR ============================

        if (payload.floor_number == 3 && payload.soil_type == 'weak') {

            state.reinforces_concrete_qty_factor = 0.195
            state.normal_concrete_qty_factor = 0.04
            state.iron_qty_factor = 0.082

        } else if (payload.floor_number == 3 && payload.soil_type == 'intermediate') {

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
        }

        else if (payload.floor_number == 5 && payload.soil_type == 'strong') {

            state.reinforces_concrete_qty_factor = 0.166
            state.normal_concrete_qty_factor = 0.037
            state.iron_qty_factor = 0.07
        }

        // ================= //5 FLOOR =========================

        // ===================== COMPUTER qtys ===================================

        state.qtys.reinforces_concrete_qty = (state.reinforces_concrete_qty_factor * state.total_area).toFixed(2)
        state.qtys.normal_concrete_qty = (state.normal_concrete_qty_factor * state.total_area).toFixed(2)
        state.qtys.iron_qty = (state.iron_qty_factor * state.qtys.reinforces_concrete_qty).toFixed(2)

    },
    STOREPRICES(state, payload) {
        state.prices = payload

        state.costs.reinforces_concrete_cost = (state.qtys.reinforces_concrete_qty * parseFloat(payload.reinforces_concrete)).toFixed(2)

        state.costs.normal_concrete_cost = (state.qtys.normal_concrete_qty * parseFloat(payload.normal_concrete)).toFixed(2)

        state.costs.iron_cost = (state.qtys.iron_qty * parseFloat(payload.iron_ton)).toFixed(2)


    },
    CLEARALL(state){
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
    }


}
export const actions = {
    storeEnteries({ commit }, payload) {
        commit('STOREENTERIES', payload)
    },
    storePrices({ commit }, payload) {
        commit('STOREPRICES', payload)

    }

}


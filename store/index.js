export const state = () => ({
    enteries: null,
    prices: null
})


export const mutations = {
    STOREENTERIES(state, payload) {
        state.enteries = payload
    },
    STOREPRICES(state, payload) {
        state.prices = payload
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


export const state = () => ({
    type: 'is-primary'
})

export const mutations = {
    setType(state, value) {
        state.type = value
    }
}

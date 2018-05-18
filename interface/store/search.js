import { search } from 'store/search-results'

export const SEARCH_TYPE = 'SEARCH'

export default {
  state: {
    input: '',
    normalized: ''
  },
  getters: {
    input: state => state.input,
    normalized: state => state.normalized
  },
  mutations: {
    change: (state, input) => {
      state.input = input
      state.normalized = input.trim().toLowerCase()
    }
  },
  actions: {
    [SEARCH_TYPE]: (context, input) => {
      context.commit('change', input)
      context.dispatch(search.TYPE)
    }
  }
}
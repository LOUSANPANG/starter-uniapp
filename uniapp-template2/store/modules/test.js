const state = {
	// 使用 store.state.staTest
  staTest: 'test store'
}

const getters = {
	getTest: (state, getters) => {
		//state ：可以访问数据
		//getters：访问其他函数，等同于 store.getters
		return state.staTest.length
	}
}

const mutations = {
  mutTest(state, value) {
    state.staTest = value
  }
}

const actions = {
	actTest(context, payload) {
		setTimeout(() => {
			context.commit('mutTest', payload)
		}, 1000)
	}
}

export default {
  namespaced: true,
  state,
  mutations,
	actions
}

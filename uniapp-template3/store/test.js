import { defineStore } from 'pinia'

export const useTestStore = defineStore('test', {
	state: () => ({
		staTest: 'test store'
	}),

	getters: {
		getTest: (state) => {
			return state.staTest.length
		}
	},

	mutations: {
		mutTest(state, value) {
			state.staTest = value
		}
	},

	actions: {
		actTest(context, payload) {
			setTimeout(() => {
				context.commit('mutTest', payload)
			}, 1000)
		}
	}
})

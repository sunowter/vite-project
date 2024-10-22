import { defineStore } from "pinia";	
export const useStore = defineStore('store', {
	state: () => ({
		numRect: {},
		studentInfo: {},
	
	}),
	getters: {

	},
	actions: {
		getNumReact(obj) {
			this.numRect = obj
			console.log('this.numRect', this.numRect)
		},
		getStudentInfo(obj) {
			this.studentInfo = obj
		},

	}
	
})
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    //  TODO：操作state的值只能使用mutation方法
    state: {
        num: 0,
        optionData: []
    },
    mutations: {
        setOptionData(state, val) {
            state.optionData.push(val)
            localStorage.setItem('option', JSON.stringify(state.optionData))
        },
        resetOptionData(state, val) {
            state.optionData = []
            state.optionData = val
        },
        setNum(state) {
            state.num++
        }
    },
    //  TODO: 用来做HTTP请求
    actions: {
        setOption(context, val) {
            if (!context.state.num) {
                const data = JSON.parse(localStorage.getItem('option'))
                if (context.state.optionData.length === 0 && data) {
                    context.commit('resetOptionData', data)
                    context.commit('setNum')
                }
            }
        }
    },
    getters: {}
})

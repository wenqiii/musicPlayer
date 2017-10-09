import Vue from 'vue'
// 数据流管理 思想 架构
import Vuex from 'vuex'
// this.$store
import ApiService from './ApiService'
import NotifyService from './NotifyService'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        ApiService,
        NotifyService,
    }
})


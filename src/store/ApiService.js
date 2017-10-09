import Vue from 'vue'
import Vuex from 'vuex'
// 集中API请求模块
// api 共性
import API from '../config/api'
function apiFactory (api) {
    // 统一发出请求
    // jsonp js 跨域请求
    return (id = null) => Vue.http.jsonp(
        api.url,
        {
            params: api.params(id),
            jsonp: api.jsonp
        }
    )
}
export default {
    actions: {
        getRecommands({}) {
            return apiFactory(API.first_page_data)()
        },
        search({},key) {
            return apiFactory(API.search)(key)
        },
        getHotKey({}) {
            return apiFactory(API.hotkey)()
        }
    }
}
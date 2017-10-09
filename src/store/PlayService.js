import * as def from '../config/def'

export default {
    state: {
        index: 0,
        playList: []
    },
    mutations: {
        setPlayList (state,playList) {
            state.playList = playList.list
            state.index = playList.index
            state.song = state.playList[state.index]  
        }
    }
}
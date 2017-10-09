import Rx from 'rxjs/Rx'
export default {
    state: {
        actionSheet: {
            show: false,
            menus: {},
            subject: null
        },
        playingList: {
            show: false
        }
    },
    actions: {
        notifyActionSheet({commit, state}, options){
            state.actionSheet.subject = new Rx.AsyncSubject()
            state.actionSheet.subject.subscribe({
              next: (v) => options.handler[v](),
              complete: () => commit('closeActionSheet')
            })
            commit('showActionSheet', options.menus)
        }
    },
    mutations: {
        showActionSheet(state, menus){
            state.actionSheet.menus = menus
            state.actionSheet.show = true
          },
          closeActionSheet(state){
            state.actionSheet.show = false
          }
    }
}
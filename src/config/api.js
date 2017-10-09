export default {
    first_page_data: {
        url: 'https://c.y.qq.com/v8/fcg-bin/fcg_first_yqq.fcg',
        params() {
            return {
                ormat:'jsonp',
                tpl:'v12',
                page:'other',
                rnd:0,
                g_tk:new Date().getTime(),
                loginUin:0,
                hostUin:0,
                inCharset:'utf8',
                outCharset:'GB2312',
                notice:0,
                platform:'yqq',
                needNewCode:0
            }
        },
        jsonp: 'jsonpCallback'
    },
    search: {
        url: 'https://c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg',
        params: (key) => {
          return {
            is_xml: 0,
            format: 'jsonp',
            key: key,
            g_tk: 5381,
            loginUin: 0,
            hostUin: 0,
            inCharset: 'utf8',
            outCharset: 'utf-8',
            notice: 0,
            platform: 'yqq',
            needNewCode: 0
          }
        },
        jsonp: 'jsonpCallback'
      },
      hotkey: {
        url: 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg',
        params: () => {
          return {
            g_tk: 5381,
            loginUin: 0,
            hostUin: 0,
            format: 'jsonp',
            inCharset: 'utf8',
            outCharset: 'utf-8',
            notice: 0,
            platform: 'yqq',
            needNewCode: 0
          }
        },
        jsonp: 'jsonpCallback'
      }
}
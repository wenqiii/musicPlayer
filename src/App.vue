<template>
  <div id="app">
    <search v-show="!blurBgShow"
            @searchshow="rankshow=false"
            @searchhide="rankshow=true">
    </search>
  
    <div class="content-warper" v-show="rankshow&&!blurBgShow">
      <swiper :options="swiperOption" class="swiper-box">
        <swiper-slide class="swiper-item">
          <recommand></recommand>
        </swiper-slide>
        <swiper-slide class="swiper-item">
          <rank></rank>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!-- <div id="play-bar">
      <audio src=""></audio>
      <div class="play-bar-image-container">
      </div>
    </div> -->
  </div>
</template>

<script>
import Search from './components/Search'
import 'swiper/dist/css/swiper.min.css'
import Recommand from './components/Recommand.vue'
import Rank from './components/Rank.vue'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
const TAB_NAME = ['推荐', '排行榜']
export default {
  name: 'app',
  data () {
    return {
      rankshow: true,
      blurBgShow: false,
      // coverImgUrl: 'http://y.gtimg.cn/music/common/upload/t_focus_info_iphone/140646.jpg',
      swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          paginationBulletRender(swiper, index, className) {
            return `<span class="${className} swiper-pagination-bullet-custom">${TAB_NAME[index]}</span>`
            // return '<span class="' + className + ' swiper-pagination-bullet-custom' + '">' + (index + 1) + '</span>';
          }
        }
    }
  },
  components: {
    Search,
    swiper,
    swiperSlide,
    Recommand,
    Rank
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html {
  overflow-x: hidden;
  background: #EEEEEE;
}
body {
  display: flex;
  overflow-x: hidden;
}
#app {
  font-family: sans-serif;
  width: 100%;
  height: 100%;
}
  .content-warper {
    margin-top: 60px;
  }
  .swiper-box {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  .swiper-item {
    height: 100%;
  }
   .swiper-pagination-bullet-custom {
    width: 100% !important;
    height: 100% !important;
    margin: 0 !important;
    text-align: center;
    line-height: 50px;
    color: #999999;
    border-radius: 0 !important;
    background: #fff !important;
    opacity: 1 !important;
  }
  .swiper-pagination-bullet-custom.swiper-pagination-bullet-active {
    color: #000;
  }
  .swiper-pagination {
    top: 0;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }

</style>

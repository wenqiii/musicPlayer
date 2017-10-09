<template>
    <div class="recommand">
        <div class="loading" v-if="loading">
            {{loadingState}}
        </div>
        <!-- <div class="content">
            <swiper>
                <swiper-slide v-for="s in slider">
                    <img v-lazy="s.pic" @click="jump(s)" class="recommand-swiper-img" />
                </swiper-slide>
            </swiper>
            <div class="hotlist">
                <div class="list-title">
                    <p>热门歌单</p>
                </div>
                <div class="list-content">
                    <div class="list-item" v-for="item in songList"></div>
                </div>
            </div>
            <div class="mvlist">
                <mvitem v-for="item in mvList"></mvitem>
            </div>
        </div> -->
        <p>热门歌单</p>
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    components: {
        swiper,
        swiperSlide
    },
    data() {
        return {
            slider: [],
            songList: [],
            mvList: [],
            loading:false,
            loadingState: null
        }
    },
    methods: {
        jump(s) {

        }
    },
    created: function() {
        //   ajax
        //   数据API QQ,集合数据请求统一管理
        // dispatch 没有数据
        // 委托一下
        this.$store.dispatch('getRecommands')
            .then((response) => {
                console.log(response)
            })
    }
}
</script>
<style>
 .recommand {
    margin-top: 50px;
    width: 100%;
 }
</style>



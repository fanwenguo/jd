<template>
    <div class="banner">
        <mt-swipe :auto="4000">
            <mt-swipe-item>
                <img src="https://m.360buyimg.com/mobilecms/s828x404_jfs/t16885/314/1296648748/83328/370fb73b/5ac47decNad058aa6.jpg!cr_1125x549_0_72!q70.jpg.dpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="https://img1.360buyimg.com/da/s828x404_jfs/t16960/288/1654997120/112908/8bdadab9/5ad86c49Nbd82d9db.jpg!cr_1125x549_0_72.dpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="https://m.360buyimg.com/mobilecms/s828x404_jfs/t17263/59/1819098790/59845/c0b2555d/5ad7ef6eN9e686113.jpg!cr_1125x549_0_72!q70.jpg.dpg" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
    import Vue from 'vue'
    import { Swipe, SwipeItem } from 'mint-ui';
    import 'mint-ui/lib/style.css'
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);

</script>
<style scoptd>
    .banner{
        width: 100%;
        height: 4rem;
        position: relative;
    }
    .banner img{
        width: 100%;
        height: 4rem;
    }
    .mint-swipe-item{
        display: inline-block
    }
</style>

<template>
    <div id="JDHead">
        <div class="head">
            <i class="iconfont icon-gengduo-2"></i>
            <input type="text" value="JD">
            <span class="login">登录</span>
        </div>
        <mt-swipe :auto="4000">
            <mt-swipe-item>
                <img src="https://img1.360buyimg.com/da/s750x366_jfs/t18739/96/1634082190/375987/cc200266/5ad0d3ceNa178fa5f.jpg!cr_1125x549_0_72.dpg" alt=""/>
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="https://img1.360buyimg.com/da/s750x366_jfs/t17392/198/1782463544/81894/a6243d40/5ad83d5aN93d83065.jpg!cr_1125x549_0_72.dpg" alt=""/>
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="https://img1.360buyimg.com/da/jfs/t17254/110/1740117086/148306/6ef3ff27/5ad6b493N1b56d01e.jpg!cr_1125x549_0_72" alt=""/>
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="https://m.360buyimg.com/mobilecms/s750x366_jfs/t19036/362/1564212025/136211/41ed9e28/5acf1a7aNb0bda576.jpg!cr_1125x549_0_72!q70.jpg.dpg" alt=""/>
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="https://m.360buyimg.com/mobilecms/s750x366_jfs/t19036/362/1564212025/136211/41ed9e28/5acf1a7aNb0bda576.jpg!cr_1125x549_0_72!q70.jpg.dpg" alt=""/>
            </mt-swipe-item>
        </mt-swipe>
        <div class="nav">
            <div v-for="(i,index) in data" :key="index">
                <img :src='i.img' alt="">
                <span>{{i.name}}</span>
            </div>
        </div>
        <div class="surprise">
            <img src="https://m.360buyimg.com/mobilecms/jfs/t19093/233/1805281125/82944/50fa7e83/5ad99623Nd1486b0a.jpg!q70.jpg" alt="">
        </div>
    </div>
    
</template>

<script>
    import Vue from 'vue'
    import 'mint-ui/lib/style.css'
    import { Swipe, SwipeItem } from 'mint-ui';
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);
    export default{
        name:'JDHead',
        data(){
            return{
                data:null
            }
        },
        beforeCreate(){
            this.$http("/api/nav").then((data)=>{
                this.data=data.data
                console.log(data)
            })
        }
    }
</script>
<style>
    #JDhead{
        width:100%;
        height:100%;
    }
    .head{
        height:3rem;
        width:100%;
        z-index:99;
        position:fixed;
        top:0;
        left:0;
        background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,.4),rgba(0,0,0,.3),rgba(0,0,0,.1),rgba(0,0,0,0));
        display:flex;
        justify-content:space-around;;
        align-items:center;
        color:#fff; 
    }
    .head i{
        font-size:2rem;
        width:15%;
        text-align:center;
    }
    .head input{
        width:60%;
        height:1.8rem;
        border-radius:1rem;
        border:none;
        padding-left:1rem;
        font-size:1rem;
        font-weight:bold;
        color:red;
    }
    .head span{
        width:15%;
        text-align:center;
        font-size:1rem;
        font-weight:bold;
    }
    .mint-swipe{
        width: 100%;
        height: 10rem;
        
    }
    .mint-swipe-item{
        width:100%;
        height:100%;
        display: inline-block;
    }
    .mint-swipe-item img{
        width:100%;
        height:100%;
    }
    .nav{
        width: 100%;
        height: 9rem;
        display: flex;
        flex-wrap: wrap;
        /* margin-top:-.5rem;
        border-top-left-radius:10rem;
        border-top-right-radius:10rem;
        z-index:99; */
    }
    .nav div{
        width: 20%;
        height: 3rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        margin-top:.5rem;
    }
    .nav div img{
       width: 2.6rem;
       height: 2.6rem;

    }
    .nav div span{
        width:100%;
        height:1rem;
        font-size:.5rem;
        text-align:center;
        margin-top:.1rem;
    }
    .surprise{
        width:100%;
        height:20%;
    }
    .surprise img{
        width:100%;
        height:100%;
    }
</style>

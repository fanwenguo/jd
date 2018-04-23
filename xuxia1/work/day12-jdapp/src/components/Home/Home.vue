<template>
    <div>
        <Header />
        <Swiper />
        <NavList class="navList">
            <NavChild 
                v-for="(item,index) in list" 
                :key="index"
                :item="item"
            ></NavChild>
        </NavList>
        <img src="https://m.360buyimg.com/mobilecms/jfs/t17536/31/1694362579/168463/ef33e94a/5ad412c3Ne38005f5.jpg!q70.jpg" alt="">
        <NavList class="floor">
            <NavChild 
                v-for="(item,index) in floor" 
                :key="index"
                :item="item"
            ></NavChild>
        </NavList>
        <Container :listArr="listArr"></Container>
    </div>
</template>
<script>
    import Swiper from './Swiper/swiper.vue'
    import Header from '../Header/header.vue'
    import Container from './Container/container.vue'
    export default{
        data(){
            return{
                list:null,
                floor:null,
                listArr:null
            }
        },
        components: {
            Header,
            Swiper,
            Container
        },
        beforeCreate(){
            this.$http('/api/navList')
            .then((data)=>{
                this.list=data.data.data
            }) 
            this.$http('/api/floorList')
            .then((data)=>{
                this.floor=data.data.data
            }) 
            this.$http('/api/floor1')
            .then((data)=>{
                this.listArr=data.data
            }) 
        }
    }
</script>
<style scoped>
    div>img{
        width: 100%;
        margin-top:.5rem;
    }
    .floor{
        margin-top: .2rem;
        height: 5.05rem;
    }
    .tit{
        width:100%;
        height: .8rem;
        background: #f6f6f6;
        text-align: center;
    }
    .tit img{
        width: auto;
        height: .8rem;
        margin: 0 auto;
    }
</style>

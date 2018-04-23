<template>
    <div class="floor-container">
        <img :src="listArr.titImg" alt="">
        <ul
            v-for="(item,index) in listArr.cont"
            :key="index"
        >
        {{pair}}
        </ul>
    </div>
</template>
<script>
    export default{
        props:['listArr'],
        computed:{
            pair(){
                this.listArr.cont.filter((i)=>{
                    if(i.number==='pair'){
                        return i
                    }
                })
            }
        }
    }
</script>
<style scoped>
    .floor-container{
        width: 100%;
    }
    div>img{
        width:100%;
    }
</style>

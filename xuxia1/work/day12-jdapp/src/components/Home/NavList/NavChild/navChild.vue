<template>
    <div class="navChild">
        <img :src="item.img" alt="">
        <span>{{item.name}}</span>
    </div>
</template>
<script>
    export default{
        props:['item']
    }
</script>
<style scoped>
    .navChild{
        width: 20%;
        text-align: center;
        margin:.2rem 0;
    }
    .navChild img{
        width: 0.8rem;
        height: 0.8rem;
    }
    .navChild span{
        display: block;
        font-size: .26rem;
    }
    .floor .navChild{
        margin: 0;
        width: 25%;
        border:.5px solid #ccc;
        box-sizing: border-box;
        height:2.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .floor .navChild img{
        width: 1rem;
        height: 1.3rem;
    }
    .floor .navChild span{
        font-size: .34rem;
        color:turquoise;
    }
</style>


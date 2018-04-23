<template>
    <div class="header top_header">
        <span>〓</span>
        <p>
            <span>JD</span>
            <input type="text" placeholder="京东">
        </p>
        <button type="button">登录</button>
    </div>
</template>
<style scoped>
    .top_header{
        background: #de181b;
    }
    .header{
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top:0;
        left:0;
        z-index: 999;
    }
    span,button{
        width: 50px;
        height: 100%;
        text-align: center;
        line-height: 1rem;
        color:#fff;
        font-size: .32rem;
    }
    .header p{
        flex:1;
        position: relative;
    }
    .header p span{
        position: absolute;
        left:0;
        top:-.2rem;
        z-index: 99;
        color:red;
        font-weight: 800;
    }
    .header p input{
        width: 85%;
        height:.6rem;
        border-radius: .3rem;
        border:none;
        padding-left:15%;
    }
    button{
        background: transparent;
        border:none;
    }
</style>


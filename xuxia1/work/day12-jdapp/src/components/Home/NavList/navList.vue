<template>
    <div>
        <div class="navList_wrap">
            <slot></slot>
        </div>
        
    </div>
</template>
<style scoped>
    .navList_wrap{
        width: 100%;
        height: 3rem;
        display: flex;
        flex-wrap: wrap;
        margin-top:-.2rem;
        border-radius: 15px 15px 0 0;
        position: relative;
        z-index: 666;
        background: #fff;
    }
    
</style>

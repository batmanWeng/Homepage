<template>
    <div class="fixed_top">
        <mu-appbar :title='commData.title'>
            <mu-icon-button v-show="commData.isBack" onclick="window.history.go(-1)" icon="close" slot="left"/>
        </mu-appbar>
    </div>
</template>
<script>
    export  default{
        data(){
            return{
            }
        },
        props:{
            commData:{
                type:Object
            }
        }
    }
</script>
<style>
    .mu-appbar{
        height: 55px;
    }
</style>

/**
 * Created by baird on 2017/1/4.
 */
import Vue from 'vue'
//显示loading
Vue.prototype.showLoadingText = function(text){
    this.$store.commit('COMM_LOADING_STATUS',{
        isLoading:true,
        loadingText:text
    });
}
//loading隐藏
Vue.prototype.showLoadingDissmiss = function(){
    this.$store.commit('COMM_LOADING_STATUS',{
        isLoading:false,
        loadingText:''
    });
}
//显示吐司
Vue.prototype.showToastText = function(text){
    var weak_this = this;
    this.$store.commit('COMM_TOAST_STATUS',{
        isToast:true,
        toastText:text
    });
    setTimeout(function (){
        weak_this.$store.commit('COMM_TOAST_STATUS',{
            isToast:false,
            toastText:''
        });
    },1000);
}


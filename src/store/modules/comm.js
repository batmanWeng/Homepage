/**
 * Created by baird on 2016/12/30.
 */
import * as types from '../mutation';
const state = {
    isBack:false,   //是否显示返回
    title:'',  //显示标题内容
    isFooter:false,  //是否显示底部
    isLoading:false,  //是否显示loading
    loadingText:'正在加载', //Loading文字
    isToast:false,//是否显示toast。
    toastText:'完成',//toast文字。
    selectIndex:'tab1',//当前选择
    tab1:'育儿期',//底部tab文字1
    tab2:'阅读',//底部tab文字2
    tab3:'我'//底部tab文字3
};
const actions  = {
    commConf({commit},settings){
        commit(types.COMM_CONF,settings);
    },
    loadingConf({commit},settings){
        commit(types.COMM_LOADING_STATUS,settings);
    }
};
const getters = {
    commConf : state => state,
    loadingConf :state => state
};

const mutations = {
    [types.COMM_CONF](state,settings){
        state = Object.assign(state,settings);
    },
    [types.COMM_LOADING_STATUS](state,settings){
        state = Object.assign(state,settings);
    },
    [types.COMM_TOAST_STATUS](state,settings){
        state = Object.assign(state,settings);
    }
};
export default {
    state,
    actions,
    getters,
    mutations
}
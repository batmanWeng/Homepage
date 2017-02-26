/**
 * Created by baird on 2017/1/4.
 */
import * as types from '../mutation';
import api from '../../api/api';
const state = {
    info:{
    }
}
const actions ={
    getRegister:function ({commit},parameter){
        api.getRegister(parameter,function (){
            commit(types.USER_REGEST,{Text:'注册成功',result:1});
        },function(error){
            if (error.response){
                var message = error.response.data['message'];
                if (message){
                    commit(types.USER_REGEST,{Text:message,result:0});
                }
                else{
                    commit(types.USER_REGEST,{Text:'网络异常',result:0});
                }
            }
            else{
                commit(types.USER_REGEST,{Text:'网络异常',result:0});
            }
        });
    }
}
const mutations = {
    [types.USER_REGEST](state,res){
        state.info = res
    }
}
const getters = {
    getRegister : state => state.info
}
export default  {
    actions,
    mutations,
    getters,
    state
}
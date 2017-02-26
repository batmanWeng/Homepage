/**
 * Created by baird on 2016/12/30.
 */
import * as types from '../mutation';
import api from '../../api/api';
const state = {
    info:{
    }
}
const actions ={
    getnewToken:function ({commit},parameter){
        api.getnewToken(parameter,function (res){
            var access_token = res['access_token'];
            if (access_token){
                window.localStorage.setItem('access_token',access_token);
                commit(types.APP_GET_TOKEN,{Text:'登录成功',result:1});
            }
            else{
                var message = res['message'];
                commit(types.APP_GET_TOKEN,{Text:message,result:0});
            }
        },function(error){
            if (error.response){
                var message = error.response.data['message'];
                if (message){
                    commit(types.APP_GET_TOKEN,{Text:message,result:0});
                }
                else{
                    commit(types.APP_GET_TOKEN,{Text:'网络异常',result:0});
                }
            }
            else{
                 commit(types.APP_GET_TOKEN,{Text:'网络异常',result:0});
            }
        });
    }
}
const mutations = {
    [types.APP_GET_TOKEN](state,res){
        state.info = res
    }
}
const getters = {
    getnewToken : state => state.info
}
export default  {
    actions,
    mutations,
    getters,
    state
}
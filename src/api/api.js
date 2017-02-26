/**
 * Created by baird on 2016/12/30.
 */
import axios from 'axios';

export  default {
    /*
    * 输入password跟username
    * */
    getnewToken:function (parameter,block,errorblock){
        var URL = window.HOST_NAME+'/api/oauth/token';
        var Obj = {
            grant_type:'password',
            client_id:'10001',
            client_secret:'4xLCReLDuQRN13wLUlnUctJKbO36qiiY0n45NYWm',
        };
        for(var tem in parameter){
            Obj[tem] = parameter[tem];
        }
        axios.post(URL, Obj).then((response) => {
            block(response.data);
        }).catch(function (error){
            errorblock(error);
        });
    },
    /*
    * 用户注册 mobile,passwrod,key。
    * */
    getRegister:function (parameter,block,errorblock){
        var URL = window.HOST_NAME+'/api/auth/register';
        axios.post(URL, parameter).then((response) => {
            block(response.data);
        }).catch(function (error){
            errorblock(error);
        });
    },
    /*
    * 获取用户资料。
    * */
    getprofileInfo:function(parameter,block,errorblock){
        var URL = window.HOST_NAME + '/api/profile/me';
        var access_token = window.localStorage.getItem('access_token');
        axios.defaults.headers.common['Authorization'] = 'Bearer '+access_token;
        axios.get(URL).then((response) => {
            block(response.data);
        }).catch(function (error) {
            errorblock(error);
        });
    }
}
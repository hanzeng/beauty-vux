import { AjaxPlugin } from 'vux'
Vue.use(AjaxPlugin)
require('es6-promise').polyfill()

// let base = 'http://192.168.3.125:7012';
let base = 'http://checkcode.72change.net';
let instance = axios.create({  //跨域请求需要加上请求头  headers: {'content-type': 'application/json;charset=UTF-8'}
    headers: {'content-type': 'application/x-www-form-urlencoded'}
});

// 登录
export const requestLogin = params => { return instance.post(`${base}/api/admin/login`, qs.stringify(params)).then(res => res.data); };
// 获取七牛token接口
export const getQiniuToken = params => { return instance.get(`${base}/api/cust/getQiniuToken`,{ params: params }).then(res => res.data); };
//生成CDkey
export const createCdKeyBat = params => { return instance.post(`${base}/api/createCdKeyBat`, qs.stringify(params)).then(res => res.data); };
// CDkey列表
export const getCdCodeList = params => { return instance.get(`${base}/api/getCdCodeList`,{ params: params }).then(res => res.data); };
// 故事列表
export const getStoryFactoryList = params => { return instance.get(`${base}/api/getStoryFactoryList`,{ params: params }).then(res => res.data); };
// 新增故事
export const addStory = params => { return instance.post(`${base}/api/addStory`, qs.stringify(params)).then(res => res.data); };
// 修改故事
export const editStory = params => { return instance.post(`${base}/api/editStory`, qs.stringify(params)).then(res => res.data); };
//推送故事
export const addStoryPush = params => { return instance.post(`${base}/api/addStoryPush`, qs.stringify(params)).then(res => res.data); };
//获取正在推送的故事列表
export const getStoryPushListByParams = params => { return instance.get(`${base}/api/getStoryPushListByParams`,{ params: params }).then(res => res.data); };
//修改推送的故事
export const editStoryPush = params => { return instance.post(`${base}/api/editStoryPush`, qs.stringify(params)).then(res => res.data); };


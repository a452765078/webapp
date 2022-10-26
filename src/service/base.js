import axios from 'axios'

const STATUS_OK = 0

function get(url,params) {
    return axios.get(url,params).then( res => {
        const data = res.data
        if(data.code == STATUS_OK) {
            return Promise.resolve(data.result)
        }else {
            return Promise.reject("访问失败")
        }
    }).catch(err=>{
        return Promise.reject(err)
    })
}

export default {
    get
}
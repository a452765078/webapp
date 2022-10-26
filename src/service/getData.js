import service from './base'


function getRecommend() {
    return service.get('/api/getRecommend').then(res=>{
        return res
    })
}

export default {
    getRecommend
}
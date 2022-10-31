import service from './base'


function getRecommend() {
    return service.get('/api/getRecommend').then(res=>{
        return res
    })
}

function getSingerList() {
    return service.get('/api/getSingerList')
}

export default {
    getRecommend,
    getSingerList
}
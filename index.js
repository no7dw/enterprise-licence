'use strict'

module.exports = function(code) {
    let pattern = /^([0-9ABCDEFGHJKLMNPQRTUWXY]{2})([0-9]{6})([0-9ABCDEFGHJKLMNPQRTUWXY]{9})([0-9Y])$/
    if(RegExp(pattern).test(code))
        return {valid: false}
    else if(code.length == 15)
        return {valid: true, type:enterType15(code) }
    else if(code.length == 18)
        return {valid: true, type:enterType18(code) }
}
function enterType15 (code) {
    let d7 = code.substr(6, 1)
    let mapT = {
        '0':'全民所有制企业、集体所有制企业、联营企业、股份合作制企业',
        '1':'国有独资、法人独资、国有控股、法人投资或控股的有限责任公司和股份有限公司',
        '2':'自然人独资、自然人投资或控股的有限责任公司及自然人发起设立的股份有限公司',
        '3':'其他非公司企业（包括个人独资企业、合伙企业、农民专业合作社）'
    }
    return mapT[d7+'']
}  
function enterType18 (code) {
    let d1 = code.substr(0, 1)
    let d2 = code.substr(1, 1)
    let mapT = {}
    if(d1 == 9){//工商    
        mapT = {
            '1':'企业',
            '2':'个体工商户',
            '3':'农民专业合作社'
        }
       return mapT[d2+''] 
    }
    else if(d1 == 5){//民政
        mapT = {
            '0':'社会团体',
            '1':'民办非企业单位',
            '2':'基金会',
            '3':'其他'
    }
       return mapT[d2+''] 
    }
    else if(d1 == 1){//机构编制
        mapT = {
            '1':'机关',
            '2':'事业单位',
            '3':'中央编办直接管理机构编制的群众团体',
            '9':'其他'
    }
       return mapT[d2+''] 
    }
    else if(d1 == 'Y'){
        return '其他'
    }
}  
function codeMean(code) {
    return {
        orgzCode: code.substr(8, 9),
        bizCode: code.substr(2, 15) 
    }
}

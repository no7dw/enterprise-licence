'use strict'

module.exports = function(code) {
    let pattern = /^([0-9ABCDEFGHJKLMNPQRTUWXY]{2})([0-9]{6})([0-9ABCDEFGHJKLMNPQRTUWXY]{9})([0-9Y])$/
    if(RegExp(pattern).test(code))
        return {valid: false}
    else
        return {valid: true}
}
function enterType (code) {
    d7 = code.substr(6, 1)
    d8 = code.substr(7, 1)
    mapT = {
        '0':'全民所有制企业、集体所有制企业、联营企业、股份合作制企业',
        '1':'国有独资、法人独资、国有控股、法人投资或控股的有限责任公司和股份有限公司',
        '2':'自然人独资、自然人投资或控股的有限责任公司及自然人发起设立的股份有限公司',
        '3':'其他非公司企业（包括个人独资企业、合伙企业、农民专业合作社）'
    }
}

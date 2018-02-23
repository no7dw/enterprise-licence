'use strict'

module.exports = function(code) {
    let pattern = /^([0-9ABCDEFGHJKLMNPQRTUWXY]{2})([0-9]{6})([0-9ABCDEFGHJKLMNPQRTUWXY]{9})([0-9Y])$/
    if(RegExp(pattern).test(code))
        return {valid: false}
    else
        return {valid: true}
}


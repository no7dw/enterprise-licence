'use strict'
const validate = require('../index')
const should = require('should')
describe('validate', function(){
    it('should valid true', function(){
        let code = '99540604560888933Q'
        validate(code).valid.should.be.equal(true)
    })
    it('should valid type', function(){
        let code = '91440101321036511E'
        validate(code).type.should.be.equal('企业')
    })
})


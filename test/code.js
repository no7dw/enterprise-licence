'use strict'
const validate = require('../index')
const should = require('should')
describe('validate', function(){
    it('should valid true', function(){
        let code = '99540604560888933Q'
        validate(code).valid.should.be.equal(true)
    })
})


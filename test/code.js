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
    it('should valid false', function(){
        let code = '914401011031E'
        console.log(validate(code))
        validate(code).valid.should.be.equal(false)
    })
    it('should valid are', function(){
        let code = '91440101321036511E'
        let index = validate(code).area.indexOf('广东省 广州市')
        index.should.be.aboveOrEqual(0)
        code = '91440184321036511E'
        index = validate(code).area.indexOf('广东省 广州市 从化市')
        index.should.be.aboveOrEqual(0)
    })

})


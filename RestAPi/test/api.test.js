let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);

describe('Testing my RestAPII',()=>{
    it('Should test / endpoint',(done) =>{
        chai
            .request('http://localhost:9000')
            .get('/')
            .then((res) =>{
                expect(res).to.have.status(200)
                done()
            })
            .catch((err) => {
                throw err
            })
    })
    it('Should test /abc endpoint',(done) =>{
        chai
            .request('http://localhost:9000')
            .get('/abc')
            .then((res) =>{
                expect(res).to.have.status(200)
                done()
            })
            .catch((err) => {
                throw err
            })
    })
    it('Should test /abc endpoint',(done) =>{
        chai
            .request('http://localhost:9000')
            .post('/addUser')
            .send({'id':353,'name':'abc','city':'test','phone':'334325','isActive':true})
            .then((res) =>{
                expect(res).to.have.status(200)
                done()
            })
            .catch((err) => {
                throw err
            })
    })
    
})
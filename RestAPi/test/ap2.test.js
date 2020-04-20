let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);

describe('Testing my RestAPII222',()=>{
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
})
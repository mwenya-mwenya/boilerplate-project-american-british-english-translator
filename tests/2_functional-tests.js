const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');


suite('Functional Tests - API posts', function () {

    test('Translation with text and locale fields: POST request to /api/translate', function (done) {
        const testObj = {
            text: "Paracetamol takes up to an hour to work.",
            locale: "british-to-american"
        };

        const expectedResult = {
            text: "Paracetamol takes up to an hour to work.",
            translation: '<span class="highlight">Tylenol</span> takes up to an hour to work.'
        };

        chai
            .request(server)
            .keepOpen()
            .post('/api/translate')
            .send(testObj)
            .end(function (err, res) {
                const actualResult = res.body;
                assert.strictEqual(res.status, 200)
                assert.isObject(actualResult);
                assert.property(actualResult, 'text');
                assert.property(actualResult, 'translation')
                assert.deepEqual(actualResult, expectedResult);
                done();
            });

    });

    test('Translation with text and invalid locale field: POST request to /api/translate', function (done) {
        const testObj = {
            text: "INVALID",
            locale: "INVALID"
        };

        const expectedResult = {
            "error": "Invalid value for locale field"
        }

        chai
            .request(server)
            .keepOpen()
            .post('/api/translate')
            .send(testObj)
            .end(function (err, res) {
                const actualResult = res.body;
                assert.strictEqual(res.status, 200)
                assert.isObject(actualResult);
                assert.property(actualResult, 'error');                
                assert.deepEqual(actualResult, expectedResult);
                done();
            });

    });

    test('Translation with missing text field: POST request to /api/translate', function (done) {
        const testObj = {            
            locale: "british-to-american"
        };

        const expectedResult = {
            "error": "Required field(s) missing"
        };

        chai
            .request(server)
            .keepOpen()
            .post('/api/translate')
            .send(testObj)
            .end(function (err, res) {
                const actualResult = res.body;
                assert.strictEqual(res.status, 200)
                assert.isObject(actualResult);
                assert.property(actualResult, 'error');              
                assert.deepEqual(actualResult, expectedResult);
                done();
            });

    });
    test('Translation with missing locale field: POST request to /api/translate', function (done) {
        const testObj = {
            text: "Paracetamol takes up to an hour to work."
            
        };

        const expectedResult = {
            "error": "Required field(s) missing"
        };

        chai
            .request(server)
            .keepOpen()
            .post('/api/translate')
            .send(testObj)
            .end(function (err, res) {
                const actualResult = res.body;
                assert.strictEqual(res.status, 200)
                assert.isObject(actualResult);
                assert.property(actualResult, 'error');              
                assert.deepEqual(actualResult, expectedResult);
                done();
            });

    });

    test('Translation with text and locale fields: POST request to /api/translate', function (done) {
        const testObj = {
            text: "",
            locale: "british-to-american"
        };

        const expectedResult = {
            "error": "No text to translate"
        };

        chai
            .request(server)
            .keepOpen()
            .post('/api/translate')
            .send(testObj)
            .end(function (err, res) {
                const actualResult = res.body;
                assert.strictEqual(res.status, 200)
                assert.isObject(actualResult);
                assert.property(actualResult, 'error');               
                assert.deepEqual(actualResult, expectedResult);
                done();
            });

    });

    test('Highlight translation in Paracetamol takes up to an hour to work..', function (done) {

        const testObj = {
            text: "Tylenol takes up to an hour to work.",
            locale: "british-to-american"
        };

        const expectedResult = {
            text: "Tylenol takes up to an hour to work.",
            translation: "Everything looks good to me!"
        };


        chai
            .request(server)
            .keepOpen()
            .post('/api/translate')
            .send(testObj)
            .end(function (err, res) {
                const actualResult = res.body;
                assert.strictEqual(res.status, 200)
                assert.isObject(actualResult);
                assert.property(actualResult, 'text');
                assert.property(actualResult, 'translation');
                assert.equal(actualResult.translation, expectedResult.translation)
                assert.deepEqual(actualResult, expectedResult);
                done();
            });
    });

});

const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const Translator = require('../components/translator.js');
let translate = new Translator

suite('Unit Tests', () => {

        test('Mangoes are my favorite fruit.', function (done) {
           const testObj = {
               text: 'Mangoes are my favorite fruit.',
               locale: 'american-to-british'
           }
   
           const expectedResult = {
               text: 'Mangoes are my favorite fruit.',
               translation: 'Mangoes are my <span class="highlight">favourite</span> fruit.'
           }
   
           const actualResult = translate.translate(testObj)
   
           assert.isObject(actualResult);
           assert.property(actualResult, 'text');
           assert.property(actualResult, 'translation')
           assert.deepEqual(actualResult, expectedResult);
           done();
   
       });
   
       test('I ate yogurt for breakfast.', function (done) {
           const testObj = {
               text: 'I ate yogurt for breakfast.',
               locale: 'american-to-british'
           }
   
           const expectedResult = {
               text: 'I ate yogurt for breakfast.',
               translation: 'I ate <span class="highlight">yoghurt</span> for breakfast.'
           }
   
           const actualResult = translate.translate(testObj)
   
           assert.isObject(actualResult);
           assert.property(actualResult, 'text');
           assert.property(actualResult, 'translation')
           assert.deepEqual(actualResult, expectedResult);
           done();
   
       });
       test("We had a party at my friend's condo.", function (done) {
           const testObj = {
               text: "We had a party at my friend's condo.",
               locale: "american-to-british"
           }
   
           const expectedResult = {
               text: "We had a party at my friend's condo.",
               translation: 'We had a party at my friend\'s <span class="highlight">flat</span>.'
           }
   
           const actualResult = translate.translate(testObj)
   
           assert.isObject(actualResult);
           assert.property(actualResult, 'text');
           assert.property(actualResult, 'translation')
           assert.deepEqual(actualResult, expectedResult);
           done();
   
       });
   
       test("Can you toss this in the trashcan for me?", function (done) {
           const testObj = {
               text: "Can you toss this in the trashcan for me?",
               locale: "american-to-british"
           }
   
           const expectedResult = {
               text: "Can you toss this in the trashcan for me?",
               translation: 'Can you toss this in the <span class="highlight">bin</span> for me?'
           }
   
           const actualResult = translate.translate(testObj)
   
           assert.isObject(actualResult);
           assert.property(actualResult, 'text');
           assert.property(actualResult, 'translation')
           assert.deepEqual(actualResult, expectedResult);
           done();
   
       });
       test("The parking lot was full.", function (done) {
           const testObj = {
               text: "The parking lot was full.",
               locale: "american-to-british"
           }
   
           const expectedResult = {
               text: "The parking lot was full.",
               translation: 'The <span class="highlight">car park</span> was full.'
           }
   
           const actualResult = translate.translate(testObj)
   
           assert.isObject(actualResult);
           assert.property(actualResult, 'text');
           assert.property(actualResult, 'translation')
           assert.deepEqual(actualResult, expectedResult);
           done();
   
       });
   
       test('should translate "Like a high tech Rube Goldberg machine." from American to British English', function(done) {
           const testObj = {
               text: "Like a high tech Rube Goldberg machine.",
               locale: "american-to-british"
           };
   
           const expectedResult = {
               text: "Like a high tech Rube Goldberg machine.",
               translation: 'Like a high tech <span class="highlight">Heath Robinson device</span>.'
           };
   
           const actualResult = translate.translate(testObj);
   
           assert.isObject(actualResult);
           assert.property(actualResult, 'text');
           assert.property(actualResult, 'translation');
           assert.deepEqual(actualResult, expectedResult);
           done();
       });
   
       test('should translate "To play hooky means to skip class or work." from American to British English', function(done) {
           const testObj = {
               text: "To play hooky means to skip class or work.",
               locale: "american-to-british"
           };
   
           const expectedResult = {
               text: "To play hooky means to skip class or work.",
               translation: 'To <span class="highlight">bunk off</span> means to skip class or work.'
           };
   
           const actualResult = translate.translate(testObj);
   
           assert.isObject(actualResult);
           assert.property(actualResult, 'text');
           assert.property(actualResult, 'translation');
           assert.deepEqual(actualResult, expectedResult);
           done();
       });
   
       test('should translate "No Mr. Bond, I expect you to die." from American to British English', function(done) {
           const testObj = {
               text: "No Mr. Bond, I expect you to die.",
               locale: "american-to-british"
           };
   
           const expectedResult = {
               text: "No Mr. Bond, I expect you to die.",
               translation: 'No <span class="highlight">Mr</span> Bond, I expect you to die.'
           };
   
           const actualResult = translate.translate(testObj);
   
           assert.isObject(actualResult);
           assert.property(actualResult, 'text');
           assert.property(actualResult, 'translation');
           assert.deepEqual(actualResult, expectedResult);
           done();
       });
   
       test('should translate "Dr. Grosh will see you now." from American to British English', function(done) {
           const testObj = {
               text: "Dr. Grosh will see you now.",
               locale: "american-to-british"
           };
   
           const expectedResult = {
               text: "Dr. Grosh will see you now.",
               translation: '<span class="highlight">Dr</span> Grosh will see you now.'
           };
   
           const actualResult = translate.translate(testObj);
   
           assert.isObject(actualResult);
           assert.property(actualResult, 'text');
           assert.property(actualResult, 'translation');
           assert.deepEqual(actualResult, expectedResult);
           done();
       });
   
       test('should translate "Lunch is at 12:15 today." from American to British English', function(done) {
           const testObj = {
               text: "Lunch is at 12:15 today.",
               locale: "american-to-british"
           };
   
           const expectedResult = {
               text: "Lunch is at 12:15 today.",
               translation: 'Lunch is at <span class="highlight">12.15</span> today.'
           };
   
           const actualResult = translate.translate(testObj);
   
           assert.isObject(actualResult);
           assert.property(actualResult, 'text');
           assert.property(actualResult, 'translation');
           assert.deepEqual(actualResult, expectedResult);
           done();
       });
   
       test('should translate "We watched the footie match for a while." from American to British English', function(done) {
           const testObj = {
               text: "We watched the footie match for a while.",
               locale: "british-to-american"
           };
   
           const expectedResult = {
               text: "We watched the footie match for a while.",
               translation: 'We watched the <span class="highlight">soccer</span> match for a while.'
           };
   
           const actualResult = translate.translate(testObj);
   
           assert.isObject(actualResult);
           assert.property(actualResult, 'text');
           assert.property(actualResult, 'translation');
           assert.deepEqual(actualResult, expectedResult);
           done();
       });
   
       test('should translate "Paracetamol takes up to an hour to work." from British to American English', function(done) {
           const testObj = {
               text: "Paracetamol takes up to an hour to work.",
               locale: "british-to-american"
           };
   
           const expectedResult = {
               text: "Paracetamol takes up to an hour to work.",
               translation: '<span class="highlight">Tylenol</span> takes up to an hour to work.'
           };
   
           const actualResult = translate.translate(testObj);
   
           assert.isObject(actualResult);
           assert.property(actualResult, 'text');
           assert.property(actualResult, 'translation');
           assert.deepEqual(actualResult, expectedResult);
           done();
       });
   
       test('should translate "First, caramelise the onions." from British to American English', function(done) {
           const testObj = {
               text: "First, caramelise the onions.",
               locale: "british-to-american"
           };
   
           const expectedResult = {
               text: "First, caramelise the onions.",
               translation: 'First, <span class="highlight">caramelize</span> the onions.'
           };
   
           const actualResult = translate.translate(testObj);
   
           assert.isObject(actualResult);
           assert.property(actualResult, 'text');
           assert.property(actualResult, 'translation');
           assert.deepEqual(actualResult, expectedResult);
           done();
       });
   
       test('should translate "I spent the bank holiday at the funfair." from British to American English', function(done) {
           const testObj = {
               text: "I spent the bank holiday at the funfair.",
               locale: "british-to-american"
           };
   
           const expectedResult = {
               text: "I spent the bank holiday at the funfair.",
               translation: 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.'
           };
   
           const actualResult = translate.translate(testObj);
   
           assert.isObject(actualResult);
           assert.property(actualResult, 'text');
           assert.property(actualResult, 'translation');
           assert.deepEqual(actualResult, expectedResult);
           done();
       });
   
       test('should translate "I had a bicky then went to the chippy." from British to American English', function(done) {
           const testObj = {
               text: "I had a bicky then went to the chippy.",
               locale: "british-to-american"
           };
   
           const expectedResult = {
               text: "I had a bicky then went to the chippy.",
               translation: 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.'
           };
   
           const actualResult = translate.translate(testObj);
   
           assert.isObject(actualResult);
           assert.property(actualResult, 'text');
           assert.property(actualResult, 'translation');
           assert.deepEqual(actualResult, expectedResult);
           done();
       });
   
       test('should translate "I\'ve just got bits and bobs in my bum bag." from British to American English', function(done) {
           const testObj = {
               text: "I've just got bits and bobs in my bum bag.",
               locale: "british-to-american"
           };
   
           const expectedResult = {
               text: "I've just got bits and bobs in my bum bag.",
               translation: 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.'
           };
   
           const actualResult = translate.translate(testObj);
   
           assert.isObject(actualResult);
           assert.property(actualResult, 'text');
           assert.property(actualResult, 'translation');
           assert.deepEqual(actualResult, expectedResult);
           done();
       });
   
       test('should translate "The car boot sale at Boxted Airfield was called off." from British to American English', function(done) {
           const testObj = {
               text: "The car boot sale at Boxted Airfield was called off.",
               locale: "british-to-american"
           };
   
           const expectedResult = {
               text: "The car boot sale at Boxted Airfield was called off.",
               translation: 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.'
           };
   
           const actualResult = translate.translate(testObj);
   
           assert.isObject(actualResult);
           assert.property(actualResult, 'text');
           assert.property(actualResult, 'translation');
           assert.deepEqual(actualResult, expectedResult);
           done();
       });
   
       test('Have you met Mrs Kalyani?" from British to American English', function(done) {
           const testObj = {
               text: "Have you met Mrs Kalyani?",
               locale: "british-to-american"
           };
   
           const expectedResult = {
               text: "Have you met Mrs Kalyani?",
               translation: 'Have you met <span class="highlight">Mrs.</span> Kalyani?'
           };
   
           const actualResult = translate.translate(testObj);
   
           assert.isObject(actualResult);
           assert.property(actualResult, 'text');
           assert.property(actualResult, 'translation');
           assert.deepEqual(actualResult, expectedResult);
           done();
       });
       test('Prof Joyner of King\'s College, London. from British to American English', function(done) {
           const testObj = {
               text: "Prof Joyner of King's College, London.",
               locale: "british-to-american"
           };
   
           const expectedResult = {
               text: "Prof Joyner of King's College, London.",
               translation: '<span class="highlight">Prof.</span> Joyner of King\'s College, London.'
           };
   
           const actualResult = translate.translate(testObj);
   
           assert.isObject(actualResult);
           assert.property(actualResult, 'text');
           assert.property(actualResult, 'translation');
           assert.deepEqual(actualResult, expectedResult);
           done();
       });
       test('Tea time is usually around 4 or 4.30. from British to American English', function(done) {
           const testObj = {
               text: "Tea time is usually around 4 or 4.30.",
               locale: "british-to-american"
           };
   
           const expectedResult = {
               text: "Tea time is usually around 4 or 4.30.",
               translation: 'Tea time is usually around 4 or <span class="highlight">4:30</span>.'
           };
   
           const actualResult = translate.translate(testObj);
   
           assert.isObject(actualResult);
           assert.property(actualResult, 'text');
           assert.property(actualResult, 'translation');
           assert.deepEqual(actualResult, expectedResult);
           done();
       }); 






    test('Highlight translation in Mangoes are my favorite fruit.', function (done) {

        const testObj = {
            text: 'Mangoes are my favorite fruit.',
            locale: 'american-to-british'
        };

        const expectedResult = {
            text: 'Mangoes are my favorite fruit.',
            translation: 'Mangoes are my <span class="highlight">favourite</span> fruit.'
        }

        chai
            .request(server)
            .keepOpen()
            .post('/api/translate')
            .send(testObj)
            .end(function (err, res) {
                const actualResult = res.body
                assert.strictEqual(res.status, 200)
                assert.isObject(actualResult);
                assert.property(actualResult, 'text');
                assert.property(actualResult, 'translation')
                assert.deepEqual(actualResult, expectedResult);
                done();
            });
    });

    test('Highlight translation in I ate yogurt for breakfast.', function (done) {

        const testObj = {
            text: 'I ate yogurt for breakfast.',
            locale: 'american-to-british'
        };

        const expectedResult = {
            text: 'I ate yogurt for breakfast.',
            translation: 'I ate <span class="highlight">yoghurt</span> for breakfast.'
        }

        chai
            .request(server)
            .keepOpen()
            .post('/api/translate')
            .send(testObj)
            .end(function (err, res) {
                const actualResult = res.body
                assert.strictEqual(res.status, 200)
                assert.isObject(actualResult);
                assert.property(actualResult, 'text');
                assert.property(actualResult, 'translation')
                assert.deepEqual(actualResult, expectedResult);
                done();
            });
    });

    test('Highlight translation in We watched the footie match for a while.', function (done) {

        const testObj = {
            text: "We watched the footie match for a while.",
            locale: "british-to-american"
        };

        const expectedResult = {
            text: "We watched the footie match for a while.",
            translation: 'We watched the <span class="highlight">soccer</span> match for a while.'
        };

        chai
            .request(server)
            .keepOpen()
            .post('/api/translate')
            .send(testObj)
            .end(function (err, res) {
                const actualResult = res.body
                assert.strictEqual(res.status, 200)
                assert.isObject(actualResult);
                assert.property(actualResult, 'text');
                assert.property(actualResult, 'translation')
                assert.deepEqual(actualResult, expectedResult);
                done();
            });
    });

    test('Highlight translation in Paracetamol takes up to an hour to work..', function (done) {

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

});

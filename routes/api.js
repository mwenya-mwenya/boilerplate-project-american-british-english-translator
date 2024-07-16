'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {

      let data = req.body;         
      let result = translator.translate(data);
      
      res.status(200).json(result)
    });
};

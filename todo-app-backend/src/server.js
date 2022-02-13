'use strict';

const express = require('express');
const db = require('./db');
const config = require('./config');
const routes = require('./routes');
const app = express();
app.use(express.json());
app.use(routes);

// eslint-disable-next-line wrap-iife
(function start() {
  db.connect()
    .then(() => {
      console.info('Database connection poo. successfully!');
      app.listen(config.app.PORT, () => {
        // eslint-disable-next-line no-console
        console.info(
          `Application start on http://localhost:${config.app.PORT}`
        );
      });
    })
    // eslint-disable-next-line no-console
    .catch((err) => console.error(err));
})();

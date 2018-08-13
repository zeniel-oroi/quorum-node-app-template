const debug = require('debug')('DEBUG');

import createError from 'http-errors';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import proxyquire from 'proxyquire';
import supertest from 'supertest';
import chai from 'chai';

describe('Default routes test', () => {
  let app, request, defaultRouter;

  beforeEach(() => {
    app = express();
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    const DefaultRouter = proxyquire('../../src/api/routes/default-routes.js', {});

    defaultRouter = new DefaultRouter({});
    defaultRouter.register(app);
    request = supertest(app);
  });

  describe('POST / test', () => {
    it('should return 200', (done) => {
      request.post('/')
      .send({
        lang: 'ko',
        message: 'hi'
      })
      .set('Accept', 'application/json')
      .expect(200)
      .then(res => {
        debug('res body %s', JSON.stringify(res.body));
        done();
      }).catch(err => {
        done(err);
      });
    });

  });

  describe('GET / test', () => {
    it('should return 200', (done) => {
      request.get('/')
      .set('Accept', 'application/json')
      .expect(200)
      .then(res => {
        debug('res body %s', JSON.stringify(res.body));
        done();
      }).catch(err => {
        done(err);
      });
    });

  });

});

import { Router } from 'express';

export default function() {

  var api = Router();

  api.get('/greet', (req, res, next) => {
    res.json({
      message: 'Hello'
    });
  });

  return api;

}

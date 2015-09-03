import { Router } from 'express';

export default function() {

  var api = Router();

  api.get('/', (req, res, next) => {
    res.json({
      message: 'Welcome !'
    });
  });

  return api;

}

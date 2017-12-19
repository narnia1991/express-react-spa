/*
* @Author: Narnia
* @Date:   2017-12-09 01:31:05
* @Last Modified by:   Junar Alinsub
* @Last Modified time: 2017-12-19 23:25:18
*/
import { baseURL } from '../config';
import cors from 'cors';
import express from 'express';
import fs from 'fs';

const router = express.Router();

/* GET home page. */
router.get('/', cors(), async (req, res, next) => {
  //functions to return the data\
  const files = fs.readdirSync('frontend/src/Sections');
  res.json({
    status: 200,
    results: files
  });
});

module.exports = router;

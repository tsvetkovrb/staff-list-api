import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { baseRouter } from './api';

const app = express();

const VERSIONS = {
  V1: 'v1',
};

const baseUrl = `/api/${VERSIONS.V1}`;

app.set('port', process.env.PORT || 5000);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(baseUrl, baseRouter);

app.listen(app.get('port'), () =>
  console.log(`http://localhost:${app.get('port')}`),
);

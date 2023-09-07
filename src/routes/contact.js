const express = require('express');
const router = express.Router();

import Create from '../controllers/contact';

router.post('/', Create);

export default router;

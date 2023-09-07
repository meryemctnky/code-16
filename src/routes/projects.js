import express from 'express';
const router = express.Router();

import Projects from '../controllers/projects';

router.get('/', Projects.GetProjectList);
router.get('/:project_id', Projects.GetProject);

export default router;

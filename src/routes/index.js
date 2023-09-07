import { Router } from 'express';

// routes
import auth from './auth';
import projects from './projects';
import contact from './contact';

const router = Router();

router.get('/', (req, res) => {
  res.end('hey');
});

router.use('/auth', auth);
router.use('/projects', projects);
router.use('/contact', contact);

export default router;

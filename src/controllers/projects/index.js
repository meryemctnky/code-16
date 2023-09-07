import Boom from 'boom';
import Projects from '../../models/projects';

const GetProjectList = async (req, res, next) => {
  try {
    const projects = await Projects.find({}).sort({ createdAt: -1 });
    res.json(projects);
  } catch (e) {
    next(e);
  }
};

const GetProject = async (req, res, next) => {
  const { project_id } = req.params;

  try {
    const projects = await Projects.findById(project_id);

    if (!projects) {
      throw Boom.notFound('Projects not found.');
    }

    res.json(projects);
  } catch (e) {
    next(e);
  }
};

export default {
  GetProjectList,
  GetProject,
};

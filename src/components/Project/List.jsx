import { ProjectCard, Loading } from '../../components';
import { useProject } from '../../contexts';

const ProjectList = () => {
  const { projects, loading, openModal } = useProject();
  return (
    <>
      <div className='col-12 text-center py-3'>
        <h2 className='fw-bold text-uppercase mb-md-2 py-md-2 position-relative'>Projects</h2>
      </div>
      {loading && <Loading />}
      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2 g-lg-3 mb-md-5 mb-3'>
        {projects.map((project) => (
          <div className='col' key={project._id}>
            <ProjectCard {...project} openModal={openModal} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectList;

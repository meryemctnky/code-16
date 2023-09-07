import { ProjectList, ProjectModal } from '../components';
import { useProject } from '../contexts';

const Projects = () => {
  const { isModalOpen, closeModal } = useProject();

  return (
    <main className='projects container'>
      <div className='row'>
        <ProjectList />
        {isModalOpen && <ProjectModal closeModal={closeModal} />}
      </div>
    </main>
  );
};

export default Projects;

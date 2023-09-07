import { createContext, useContext, useEffect, useState } from 'react';
import { getProjectList } from '../services';

const ProjectContext = createContext();

export const useProject = () => useContext(ProjectContext);

const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [modalData, setModalData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const projectList = await getProjectList();
      setProjects(projectList);
      setLoading(false);
    };
    fetchData();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const contextValue = {
    projects,
    loading,
    isModalOpen,
    openModal,
    closeModal,
    modalData,
    setModalData,
  };

  return <ProjectContext.Provider value={contextValue}>{children}</ProjectContext.Provider>;
};

export default ProjectProvider;

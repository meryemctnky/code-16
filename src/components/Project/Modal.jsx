import { Modal } from 'react-bootstrap';
import { useProject } from '../../contexts';

const ProjectModal = () => {
  const { isModalOpen, closeModal, modalData } = useProject();

  return (
    <Modal show={isModalOpen} onHide={closeModal} centered backdrop='static' keyboard={false} className='modal-overlay'>
      <Modal.Header closeButton className='fw-bold fs-5 bg-body-tertiary'>
        {modalData.title}
      </Modal.Header>
      <Modal.Body>
        <div className='custom-card border-0'>
          <div>
            <img src={modalData.img} className='card-img-top img-fluid object-fit-cover' alt='' />
          </div>
          <div className='card-body d-flex flex-column justify-content-between'>
            <h5 className='fw-bold pt-3'>{modalData.title}</h5>
            <p className='card-text fw-light'>{modalData.desc}</p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectModal;

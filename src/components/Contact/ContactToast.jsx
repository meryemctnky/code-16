import { useEffect } from 'react';

const ContactToast = ({ message, onClose }) => {
  useEffect(() => {
    const toastTimeout = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(toastTimeout);
  }, [onClose]);

  return (
    <div
      className='position-fixed top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100'
      style={{ zIndex: 5, minWidth: '200px' }}
    >
      <div className='toast show bg-success text-white' role='alert' aria-live='assertive' aria-atomic='true'>
        <div className='toast-header'>
          <strong className='me-auto'>Success</strong>
          <button type='button' className='btn-close' data-bs-dismiss='toast' aria-label='Close' onClick={onClose}></button>
        </div>
        <div className='toast-body'>{message}</div>
      </div>
    </div>
  );
};

export default ContactToast;

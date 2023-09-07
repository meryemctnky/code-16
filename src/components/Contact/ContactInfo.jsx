const ContactInfo = ({ icon, title, content }) => (
  <div className='d-flex align-items-start pb-3'>
    <div className='icon-circle bg-success rounded-circle d-flex justify-content-center align-items-center me-2'>{icon}</div>
    <div className='d-flex flex-column text-start ms-3 justify-content-center'>
      <h4 className='fw-bold'>{title}:</h4>
      <p className='fw-light'>{content}</p>
    </div>
  </div>
);

export default ContactInfo;

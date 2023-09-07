const ContactMap = () => {
  return (
    <section className='contact-map zoom-in'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.430662753815!2d29.049848475705737!3d40.199482168833576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca3e1ccebd059f%3A0xfd60cceeeec7dae9!2sMerinos%20AKKM!5e0!3m2!1sen!2str!4v1691578755260!5m2!1sen!2str'
        height='300'
        style={{ border: '0', width: '100%' }}
        loading='lazy'
      ></iframe>
    </section>
  );
};

export default ContactMap;

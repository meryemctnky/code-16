import { ContactTitle, ContactMap, ContactInfo, ContactForm } from '../components';
import { contactInfoData } from '../constants';

const Contact = () => {
  return (
    <main className='contact container'>
      <ContactTitle />
      <ContactMap />
      <section className='contact-form row my-4 fade-up'>
        <article className='col-lg-4'>
          <div className='info'>
            {contactInfoData.map((info, index) => (
              <ContactInfo key={index} icon={info.icon} title={info.title} content={info.content} />
            ))}
          </div>
        </article>
        <article className='col-lg-8 mt-2 mt-lg-0'>
          <ContactForm />
        </article>
      </section>
    </main>
  );
};

export default Contact;

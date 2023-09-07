import { services } from '../../constants';

const Services = () => {
  return (
    <section className='services py-5'>
      <div className='container text-center'>
        <div className='title'>
          <h2 className='fw-bold py-2'>SERVICES</h2>
          <p className='fw-light lead'>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.
            Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic
            quas.
          </p>
        </div>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 my-5'>
          {services.map((item, index) => (
            <div className='col' key={index}>
              <div className='card my-2 py-3 box-shadow border-success text-primary'>
                <div className='card-body'>
                  {item.icon}
                  <h5 className='card-title pt-2 fw-bold'>{item.title}</h5>
                  <p className='card-text'>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

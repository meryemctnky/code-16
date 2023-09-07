import { content } from '../../constants';
import contentImg from '../../assets/akilli-sehir-bursa.jpg';

const Content = () => {
  return (
    <section className='content bg-success'>
      <div className='row row-cols-1 row-cols-md-2 m-0'>
        <div className='col px-0'>
          <img src={contentImg} className='content-img' alt='bura akilli sehir' loading='lazy' />
        </div>

        <div className='col py-4 px-4'>
          <div className='row row-cols-1 row-cols-sm-2 g-4'>
            {content.map((item, index) => (
              <div className='col d-flex flex-column gap-2 fade-up' key={index}>
                {item.icon}
                <h4 className='fw-semibold mb-0'>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;

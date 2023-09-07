import { Loading } from '../components';

const Idea = () => {
  return (
    <section className='container'>
      <div className='row'>
        <div className='col-12'>
          <iframe
            src='https://docs.google.com/forms/d/e/1FAIpQLSeEgWtdPUZs1Ssta4xGFsHJ8rp_9SP67BnmgcdwtPEAGqkbiA/viewform?embedded=true'
            className='iframe'
          >
            <Loading />
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Idea;

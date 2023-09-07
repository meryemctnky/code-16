import Counter from './Counter';
import { counterValues } from '../../constants';

const Counts = () => {
  return (
    <section className='counts bg-success'>
      <div className='container'>
        <div className='row g-4 py-4 row-cols-2 row-cols-lg-4 text-center'>
          {counterValues.map((item, index) => (
            <div className='col text-primary' key={index}>
              <Counter initialValue={item.value} />
              <p className='count-desc fs-4'>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counts;
